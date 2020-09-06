import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Post.css';


const Post = (props) => {
    const {title,id}=props.post
    
 
    return (
        <div className= "post-container">
            <img src="https://randomuser.me/api/portraits/med/men/1.jpg" alt=""/>
            <h1> Post Title : {title}</h1>
            
            <Link to={`/details/${id}`}>
                <Button variant="contained" color="primary">
                Show Details of {id}
             </Button>
         </Link>
        </div>
    );
};

export default Post;