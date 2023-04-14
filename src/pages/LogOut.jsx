import { useFirebase } from "../context/Firebase";
import '../css/Logout.css';
import { Link } from 'react-router-dom';


function LogoutPage() {
  const firebase = useFirebase();
  const handleLogout = async(e) =>{
    firebase.signout();
    alert('Logged Out!')
  }


  return (
    <div className="container mx-auto mt-10 max-w-md flex justify-center items-center flex-col">
    <h1 className="text-2xl font-bold mb-5">Are you sure you want to logout?</h1>
    {/* <Link to="/"> */}
  <button className="button23 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded " onClick={() => {handleLogout();}}>
    Logout
  </button>
{/* </Link> */}

  </div>  
 );
}

export default LogoutPage;
