import { prisma } from "../../../../generated/prisma-client";


export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;

      // const post = await prisma.post({ id }).$fragment(FULL_POST_FRAGMENT);
      // const comments = await prisma
      //   .post({ id })
      //   .comments()
      //   .$fragment(COMMNET_FRAGMENT);
      // const files = await prisma.post({ id }).files();
      // const user = await prisma.post({ id }).user();
    
      return prisma.post({ id });
    }
  }
};
