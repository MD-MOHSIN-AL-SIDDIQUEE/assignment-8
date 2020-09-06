import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams()
    const [post,setPost] = useState([]) ;
    const [postComment,setPostComment] = useState([])
    

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>res.json())
        .then(data => setPost(data))
    },[])

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res =>res.json())
        .then(data => setPostComment(data))
    },[])

   
 const    {body,title} = post

 
    return (
       
        <div className="post-container">
              <img src="https://randomuser.me/api/portraits/med/men/1.jpg" alt=""/>
            <h1> title : {title}</h1>
            <h2>detail : {body}</h2>
            <br/>
            <h2>Comment :</h2>
            {
                postComment.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;