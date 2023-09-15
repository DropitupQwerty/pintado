import { atom } from 'jotai'
import { UserTokenType } from 'service/auth/schema'

//get the token from local storage
const getAuthenticationToken = () => {


    const token = localStorage.getItem('token')

    if (token) {
        return JSON.parse(token) as UserTokenType
    }

    return null

}

const currentAuthAtom = atom(getAuthenticationToken())


//const [data, setData] = useState();
export const authAtom = atom(
    (get) => get(currentAuthAtom), // get = currentAuthAtom
    (get, set, update) => {
        set(currentAuthAtom, update as UserTokenType)
        localStorage.setItem('token', JSON.stringify(update))
    }
)
