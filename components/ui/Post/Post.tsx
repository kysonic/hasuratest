import React, { FC } from 'react';
import clsx from 'clsx';

export type PostComponentProps = {
    className?: string;
};

export const PostComponent: FC<PostComponentProps> = () => {

    return (<div>POST</div>)
};

export default PostComponent;
