import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from 'utilities/firebase'





export const UploadSingleImage = (image : File , imagePathName : string) => {
    const reference = ref(storage, imagePathName)

    
    return  uploadBytes(reference, image )
        .then(snapshot => {
            return getDownloadURL(snapshot.ref)
        })
        // .then(downloadURL => {
        //     return downloadURL
        //     console.log('Download URL', downloadURL)
        // })
  
    
}