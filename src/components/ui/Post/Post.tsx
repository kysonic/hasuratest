import React, { FC } from 'react';
import clsx from 'clsx';
import { Post } from '../../../pages/api/posts';

export type PostComponentProps = {
    post: Post;
    className?: string;
};

export const PostComponent: FC<PostComponentProps> = (props) => {
    const { post, className } = props;

    return (
        <div className={clsx('c-post', className)}>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.author}</div>
        </div>
    );
};

export default PostComponent;
