import { signInWithEmailAndPassword } from 'firebase/auth'
import { LoginType } from 'service/auth/schema'
import { auth } from 'utilities/firebase'


export const LoginApi = (data : LoginType) => {

    return signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user
            return user
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            console.log(errorCode)
            console.log(errorMessage)
        })
}


export const Logout = () => {
    auth.signOut()
    localStorage.clear()
}