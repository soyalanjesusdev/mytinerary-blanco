import axios from 'axios';

const authAction = {
sendComment: (comment,itineraryId)=>{
    return async(dispatch, getState)=>{
        let user = localStorage.getItem("token")
        if(comment.trim() !== "" && user){
            const commentToPost = await axios.post("http://localhost:4000/api/comments/"+itineraryId,{comment},{
            headers:{
            'Authorization':'Bearer '+ user
        }})
        return commentToPost.data.response
        }
    }
},
deleteComment: (commentId, itineraryId)=>{
    return async(dispatch, getState)=>{
        let user = localStorage.getItem("token")
        const comments = await axios.put("http://localhost:4000/api/comments/"+itineraryId,{commentId,delete:true},{
            headers:{
            'Authorization':'Bearer '+ user
        }})
        if(comments.data.success){
            return comments.data.response
        }
    }
},
modifyComment: (comment, commentId, itineraryId)=>{
    return async(dispatch, getState)=>{
        let user = localStorage.getItem("token")
        const comments = await axios.put("http://localhost:4000/api/comments/"+itineraryId,{comment, commentId, delete:false},{
            headers:{
            'Authorization':'Bearer '+ user
        }})
        if(comments.data.success){
            return comments.data.response
        }
    }
},
}


export default authAction