// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Post, posts } from '../posts';

export type Data = {
    data: Post;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const id = Number(req.query.id);

    res.status(200).json({ data: posts[id - 1] });
}
