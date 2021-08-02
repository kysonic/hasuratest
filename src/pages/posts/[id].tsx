import { GetStaticProps } from 'next';
import Link from 'next/link';
import { DefaultLayout } from '../../components/layouts/Default/Default';
import { Post } from '../api/posts';
import PostComponent from '../../components/ui/Post/Post';

export type PostPageProps = {
    post: Post;
};

export default function PostPage(props: PostPageProps) {
    const { post } = props;

    return (
        <DefaultLayout>
            <PostComponent post={post} />
            <br />
            <Link href="/" passHref>
                Go Back
            </Link>
        </DefaultLayout>
    );
}

export async function getStaticPaths() {
    const response = await fetch('http://localhost:3000/api/posts');
    const data = await response.json();

    const paths = data.data.map((post: Post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const response = await fetch(
        `http://localhost:3000/api/posts/${params?.id}`
    );

    const data = await response.json();

    return { props: { post: data.data } };
};
