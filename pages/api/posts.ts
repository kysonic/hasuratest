// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type Post = {
  id: number;
  title: string;
  author: string;
}

type Data = {
  data: Array<Post>;
}

export const posts = [
  {
    id: 1,
    title: 'My Really First Post',
    author: 'kysonic'
  },
  {
    id: 2,
    title: 'How about Hasura + Next.js',
    author: 'kysonic'
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: posts });
}
