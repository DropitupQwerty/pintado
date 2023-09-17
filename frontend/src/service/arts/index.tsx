import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from 'utilities/firebase'

export const GetUnApprovedData = async () => {
    
    const artQuery  = query(collection(db , 'Arts') , where('approved', '==' , false))
    const artSnapshot = await getDocs(artQuery) 
    
    const Art : unknown[] = []
    artSnapshot.forEach((doc)=> {
        Art.push(doc.data())
    })    

    return Art
} 
