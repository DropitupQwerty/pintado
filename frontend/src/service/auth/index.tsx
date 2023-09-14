import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { LoginType, RegisterType } from 'service/auth/schema'
import { auth, db , } from 'utilities/firebase'
import { doc, setDoc } from 'firebase/firestore' 



export const LoginApi = async (data : LoginType) => {
 
    return signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
            return user
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            console.log(errorCode)
            console.log(errorMessage)
        })

}


export const RegisterApi = async (data : RegisterType) => { 

    try {
        const response = await createUserWithEmailAndPassword(auth ,data.email , data.password)
        const currentUser : User | null = auth.currentUser

        if(currentUser) {
            updateProfile(currentUser , {
                displayName: `${data.firstname} ${data.lastname}`,
            })
        }
        
        await setDoc(doc(db , 'Users'  , response.user.uid) , {
            ...data , userType: 'user' ,userId  : response.user.uid
        })


    } catch (error) {
        
        alert(error)
    }
}


export const Logout = () => {
    auth.signOut()
    localStorage.clear()
    window.location.reload()
}