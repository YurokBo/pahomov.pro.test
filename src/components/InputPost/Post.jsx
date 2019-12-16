import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.inputFieldPost}>
            <input type="text" value='Почта*'/>
        </div>


    );
}

export default Post;