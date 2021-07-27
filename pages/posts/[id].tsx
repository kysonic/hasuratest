import { GetStaticProps } from 'next';
import { DefaultLayout } from '../../components/layouts/Default/Default';
import { Post } from '../api/posts';

export type PostPageProps = {
    post: Post;
};

export default function PostPage(props: PostPageProps) {
    const { post } = props;

    return <DefaultLayout>
        <PostComponent></PostComponent>
    </DefaultLayout>;
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
