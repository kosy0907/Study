# Login Test
Firebase를 활용한 로그인 데모

1. FireBase(https://console.firebase.google.com/) Project 생성
2. React App 생성
3. Project에 내 앱 생성
4. Authentication 설정
5. firebase 설치
    ```js
    npm i firebase
    // or
    yarn add firebase
    ```
6. firebase.js 작성
    ```js
    // .env 파일로 가져올 수 있음
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
7. firebase import
    ```js
    import { auth } from '../firebase';
    ```
8. Login, SignUp, SignOut Function 작성
    ```js
    //Login
    //로그인 함수
    export default function Login() {
        const emailRef = useRef(null);
        const passwordRef = useRef(null);
        const signIn = e => {
            e.preventDefault();
            // Email과 PW로 로그인
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
    //회원가입 함수
    export default function SignUp() {
        const emailRef = useRef(null);
        const passwordRef = useRef(null);
        const signUp = e => {
            e.preventDefault();
            // Email과 PW로 계정 생성
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
    //로그아웃 함수
    <button onClick={() => auth.signOut()}>SignOut<button>
    ```