import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Post } from './api/posts';

import styles from '../styles/Home.module.css';

export type HomeProps = {
    data: Post[];
};

export default function Home(props: HomeProps) {
    const { data } = props;

    console.log(data);

    return (
        <div className={styles.container}>
            <Head>
                <title>Trying to use Hasura and GraphQL</title>
                <meta
                    name="description"
                    content="NextJS Application To Use Hasura and Apollo Client with it"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <section className={styles['posts-list']}>
                    {data.map((post) => (
                        <Link href={`/posts/${post.id}`} key={post.id}>
                            <div className={styles['posts-list-item']}>
                                <div className={styles['posts-list-item-id']}>
                                    {post.id}
                                </div>
                                <div
                                    className={styles['posts-list-item-title']}
                                >
                                    {post.title}
                                </div>
                                <div
                                    className={styles['posts-list-item-author']}
                                >
                                    {post.author}
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>

            <footer className={styles.footer}>
                This is the footer!!! Man!
            </footer>
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/posts');
    const posts = await response.json();

    return {
        props: posts,
    };
}
