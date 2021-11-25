// src/components/Post/index.js
import React from "react";

const Post = (props) => {
  
    const nickname = props.nickname;
    const avatar = props.avatar;
    const image = props.image;
    const caption = props.caption;

    return (
    <article className="Post">
        <header>
            <div className="Post-user">
        
            <div className="Post-user-avatar">
                <img src={avatar} alt={nickname} />
            </div>
        
            <div className="Post-user-nickname">
                <span>{nickname}</span>
            </div>
            </div>
        </header>

        <div className="Post-image">
            <div className="Post-image-bg">
                <img alt={caption} src={image} />
            </div>
        </div>

        <div className="Post-caption">
            <strong>Basil</strong> {caption}
        </div>
        </article>
    )};

export default Post;