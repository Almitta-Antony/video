import { baseUrl } from "./baseurl";
import { commonRequest } from "./commonRequest";


//add video
export const addVideo=async(body)=>{
   return await commonRequest('POST',`${baseUrl}/videos`,body)
}


//get all videos
export const getAllVideos=async()=>{
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}

//delete single video
export const deleteVideo=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}

//add category
export const addCategory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/categories`,body)
 }
 

//get all category
export const getAllCat=async()=>{
    return await commonRequest('GET',`${baseUrl}/categories`,{})
}


//delete category

export const deleteCat=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
}



// add histroy
export const addHistory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/histories`,body)
 }
 

 //get all histories
 export const getAllHistory=async()=>{
    return await commonRequest('GET',`${baseUrl}/histories`,{})
}


//delete history

export const deleteHis=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/histories/${id}`,{})
}


//drag and drop

//drag a single video
export const getVideo=async(id)=>{
   return  await  commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}

//drop (update the category)
export const updateCategory=async(id,body)=>{
    return  await  commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
 }
 


 //single view og categories
 //get single category
 
export const getSingleCat=async(id)=>{
    return await commonRequest('GET',`${baseUrl}/categories/${id}`,{})
}

//delete single category
// export const deleteSingle=async(id)=>{
//     return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
// }

// update category // drop same api


