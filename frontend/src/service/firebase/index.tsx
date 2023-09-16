import { addDoc, doc, setDoc , collection, getDoc } from 'firebase/firestore'
import { db } from 'utilities/firebase'

export const SetDocuments = async (collectionName : string , docId : string , data : object , merge: boolean = false ) => { 

    const response = await setDoc(doc(db, collectionName , docId), { 
        ...data
    },{
        merge : merge
    })

    return response
}







export const AddDocuments = async (collectionName : string , data : object ) => { 

    const response = await addDoc(collection(db, collectionName), { 
        ...data
    })
    return response
}



export const GetDocument = async (collection : string , docName : string ) => { 
    const document = await getDoc(doc(db , collection, docName ))
    return document
}