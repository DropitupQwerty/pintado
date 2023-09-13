import { atom } from 'jotai'

//get the token from local storage
const getAuthenticationToken = () => {


    const token = localStorage.getItem('token')

    if (token) {
        return JSON.parse(token)
    }

    return null

}

const currentAuthAtom = atom(getAuthenticationToken())


//const [data, setData] = useState();
export const authAtom = atom(
    (get) => get(currentAuthAtom), // get = currentAuthAtom
    (get, set, update) => {
        set(currentAuthAtom, update)
        localStorage.setItem('token', JSON.stringify(update))
    }
)
