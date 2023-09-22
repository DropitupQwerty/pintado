import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { LoginType, RegisterType } from 'service/auth/schema'
import { auth } from 'utilities/firebase'
import { SetDocuments } from 'service/firebase'



export const LoginApi = async (data : LoginType) => {
 
    return signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
            return user
        })
        .catch((error) => {
            const errorMessage = error.message
            alert(errorMessage)
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
        const userData = {...data , userType: 'user' , userId  : auth.currentUser ? auth.currentUser.uid :'' }        
        await  SetDocuments('Users', response.user.uid , userData)
        localStorage.setItem('token', JSON.stringify(userData))
        window.location.reload()

    } catch (error) {
        alert(error)
    }
}


export const Logout = () => {
    auth.signOut()
    localStorage.clear()
    window.location.replace('/')
}