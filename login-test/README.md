# Login Test
Firebase를 활용한 로그인 데모

1. FireBase(https://console.firebase.google.com/) Project 생성
2. React App 생성
3. Project에 내 앱 생성
4. firebase 설치
    ```js
    npm i firebase
    ```
5. firebase.js 작성
    ```js
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';

    var firebaseConfig = {
        apiKey: //API KEY,
        authDomain: //AUTH DOMAIN,
        projectId: //PROJECT ID,
        storageBucket: //STORAGE BUCKET,
        messagingSenderId: //MESSAGING SENDER ID,
        appId: //APPID
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const auth = firebase.auth();
    export { auth };
    export default db;
    ```
6. firebase import
    ```js
    import { auth } from '../firebase';
    ```
7. Login, SignUp, SignOut Function 작성
    ```js
    //Login
    export default function Login() {
        const emailRef = useRef(null);
        const passwordRef = useRef(null);
        const signIn = e => {
            e.preventDefault();
            auth.signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            ).then(user => {
                console.log(user)
            }).catch(err => {
                console.log(err)
            })
        }
        return (
            ...
        )
    ```
    ```js
    //SignUp
    export default function SignUp() {
        const emailRef = useRef(null);
        const passwordRef = useRef(null);
        const signUp = e => {
            e.preventDefault();
            auth.createUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            ).then(user => {
                console.log(user)
            }).catch(err => {
                console.log(err)
            })
        }
        return (
            ...
        )
    ```
    ```js
    //SignOut
    <button onClick={() => auth.signOut()}>SignOut<button>
    ```