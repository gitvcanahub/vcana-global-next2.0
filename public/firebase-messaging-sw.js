

importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');


  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
       
      }).catch(function(err) {
      
      });
    }

firebase.initializeApp({
     messagingSenderId: "67159139554",
  })

const initMessaging = firebase.messaging()


  function requestPermission() {

  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {

    }
  });
}


