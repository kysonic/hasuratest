import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Default.module.css';

export type DefaultLayoutProps = {
    className?: string;
};

export const DefaultLayout: FC<DefaultLayoutProps> = (props) => {
    const { className, children } = props;

    return (
        <div className={clsx('l-default', className)}>
            <header className={styles.header}></header>
            {children}
            <footer className={styles.footer}></footer>
        </div>
    );
};
