import { ArtType } from 'service/arts/schema'
import { AddDocuments } from 'service/firebase'




export const AddItemsToCart = async (userId: string, artData: ArtType) => {

    await AddDocuments(`Users/${userId}/cart`, artData)

}