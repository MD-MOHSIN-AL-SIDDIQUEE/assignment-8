import React from 'react';

const Comment = (props) => {
    const {id,body,name}=props.comment
    
    return (
        <div>
            <h1>name {id} : {name} </h1>
            <h2>detail: {body}</h2>
        </div>
    );
};

export default Comment;