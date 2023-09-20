import { collection, getDocs, query, where } from 'firebase/firestore'
import { ArtType } from 'service/arts/schema'
import { GetDocument } from 'service/firebase'
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


export const getArtData = async (productId : string) => { 
    return await GetDocument('Arts' , productId ? productId : '').then(async (product)=> 
        await GetDocument('Users' , product ? product?.data()?.uploadBy : '' ).then((user)=> ({author: `${user.data()?.firstname + ' ' + user.data()?.lastname}` , ...product.data()} as ArtType)
        )
    )           
}


export const GetArtCollection = async () => {
    const artQuery = query(collection(db, 'Arts'))
    const artSnapshot = await getDocs(artQuery)
  
    const artPromises = artSnapshot.docs.map(async (doc) => {
        const userId = doc.data()?.uploadBy
        const user = await GetDocument('Users', userId)
        const author = `${user.data()?.firstname} ${user.data()?.lastname}`
        return { ...doc.data(), author }
    })
  
    const artData = await Promise.all(artPromises)
  
    return artData
}