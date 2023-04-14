importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyCjPt0uV_7e2-F0UufeuFpP6Zod6rYHE2M",
    authDomain: "bookify-7be2e.firebaseapp.com",
    projectId: "bookify-7be2e",
    storageBucket: "bookify-7be2e.appspot.com",
    messagingSenderId: "77073578413",
    appId: "1:77073578413:web:3aa60b336f9d01c4270924"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});