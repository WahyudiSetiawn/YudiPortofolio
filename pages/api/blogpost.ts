import { PrismaClient, blogposts } from '@prisma/client';

import type { NextApiRequest, NextApiResponse } from 'next'

  type Data = {
    posts:blogposts[]
  }
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const prisma = new PrismaClient()
    const allPosts = await prisma.blogposts.findMany() //allPosts bisa diganti
    console.log(allPosts)
    res.status(200).json({posts: allPosts})
  }