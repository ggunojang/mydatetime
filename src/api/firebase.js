// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDp4OhTag69NZBsc014BoQ01RvErP6ZH2g",
    authDomain: "mydatetime-todo.firebaseapp.com",
    projectId: "mydatetime-todo",
    storageBucket: "mydatetime-todo.appspot.com",
    messagingSenderId: "505360265096",
    appId: "1:505360265096:web:9d4d71026b9811cba2943d",
    measurementId: "G-7E5N52B9DT",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
