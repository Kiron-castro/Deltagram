import React from 'react';
import styled from 'styled-components';
import Avatar from '../../Avatar';

// types
import type {Post as PostType} from '../../../types/Post';

const PostWrapper=styled.div`
    background-color:#bebebe;
    color: #222121;
    padding: 10px;
    border-bottom: 3px solid #404040;

    .post-top {
        display: flex;
        flex-direction:row;
        align-items: center;
    }

    h2 {
        margin:0;
        margin-left: 10px;
    }

`;

const Post=({post}:{post: PostType})=>{
    const {
        title,
        body,
        user
    } = post;

    const userName = user ? user.name : 'Uknown User';

    return (
        <PostWrapper>
            <div className="post-top">
                <Avatar userName={userName} />
                <h2>{userName}</h2>
            </div>
            <h2>{title}</h2>
            <p>{body}</p>
        </PostWrapper>
    )
}

export default Post;
