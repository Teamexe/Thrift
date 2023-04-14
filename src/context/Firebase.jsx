import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';

import { getMessaging } from "firebase/messaging"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth"

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    Firestore,
    doc,
    getDoc,
    query,
    where,
    deleteDoc
} from "firebase/firestore";


import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyD81gQq4RAEXUP87YDRAxKqTQe5xaw4REU",
    authDomain: "bookify-2b4fe.firebaseapp.com",
    projectId: "bookify-2b4fe",
    storageBucket: "bookify-2b4fe.appspot.com",
    messagingSenderId: "293891283866",
    appId: "1:293891283866:web:c747d46bad9f7d06b2b823"
  };
  

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
export const messaging = getMessaging(firebaseApp);
const db = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();



export const FirebaseProvider = (probs) => {

    const [user, setUser] = useState(null);
    const [accept, setAccept] = useState(Boolean);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            // console.log("user", user);
            if (user) setUser(user);
            else setUser(null);
        });
    }, [])

    const signupUserWithWmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)

    const signout = () => {
       // alert("Sign-out successful!");
       const auth = getAuth();
       signOut(auth).then(() => {
         // Sign-out successful.
       }).catch((error) => {
         // An error happened.
       });
       
    };




    const handleCreateNewListing = async (name, isbn, price, coverPic) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${coverPic.name}`)
        const uploadResult = await uploadBytes(imageRef, coverPic);
        return await addDoc(collection(firestore, "books"), {
            name,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        });
    };

    const listAllBooks = () => {
        return getDocs(collection(firestore, "books"))
    };

    const getBookById = async (id) => {
        const docRef = doc(firestore, "books", id);
        const result = await getDoc(docRef);
        return result;
    };

    const getImageURL = (path) => {
        return getDownloadURL(ref(storage, path));
    };

    const placeOrder = async (bookId, qty) => {
        const collectionRef = collection(firestore, "books", bookId, "orders");
        const result = await addDoc(collectionRef, {
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            qty: Number(qty),
        });
        return result;
    };

    const fetchMyBooks = async (userID) => {
        // if(!user) return null; // error
        const collectionRef = collection(firestore, "books");
        const q = query(collectionRef, where("userID", "==", userID));

        const result = await getDocs(q);
        return result;
    };

    const getOrders = async (bookId) => {
        const collectionRef = collection(firestore, "books", bookId, "orders");
        // console.log(collectionRef);
        const result = await getDocs(collectionRef);
        return result;
    };

    const getOrderById = async (bookId, id) => {
        const docRef = doc(firestore, "books", bookId, "orders", id);
        // console.log(docRef);
        const result = await getDoc(docRef);
        return result;
    };

    const isLoggedIn = user ? true : false;

    const deleteBook = async (bookId) => {
        try {
          const bookRef = doc(db, 'books', bookId);
          await deleteDoc(bookRef);
          console.log('Book deleted successfully');
        } catch (error) {
          console.error('Error deleting book:', error);
        }
      };
     

    const Subcollection = () => {
        const [workData, setworkData] =useState([])
        //const {handleSignInWithGoogle, user} =useFirebase()
        const db =getFirestore()

        useEffect(() => {
            if (!user) {
                console.log("no user defined");
            } else {
                const getData = async () => 
                {
                    const db = getFirestore();
                    const q = query(collection(db, `books`))
                    const snapshot = await getDocs(q);
                    const data = snapshot.docs.map((doc) => ({
                        ...doc.data, id: doc.id
                    }))
                    data.map( async (elem) => {
                        const workQ = query(collection(db, `books/${elem.id}/orders`))
                        const workDetails = await getDocs(workQ)
                        const orders = workDetails.docs.map((doc) => ({
                            ...doc.data, id: doc.id
                        }))
                        // console.log(orders);

                        if (orders.length > 0) {
                            // delete the first order for this book
                            const orderToDelete = orders[0];
                            await deleteDoc(doc(db, `books/${elem.id}/orders/${orderToDelete.id}`));
                            console.log(`Deleted order ${orderToDelete.id} for book ${elem.id}`);
                          }
                        //   console.log(orders)
                    })
                }
                getData();
            }
        }, [user])
    };


    return (<FirebaseContext.Provider value={{
        signupUserWithWmailAndPassword, signinUserWithEmailAndPassword,
        signinWithGoogle,
        handleCreateNewListing,
        listAllBooks,
        getImageURL,
        getBookById,
        placeOrder,
        fetchMyBooks,
        getOrders,
        isLoggedIn,
        user,
        Subcollection,
        signout,
        deleteBook
    }}>
        {probs.children}
    </FirebaseContext.Provider>
    );
};
