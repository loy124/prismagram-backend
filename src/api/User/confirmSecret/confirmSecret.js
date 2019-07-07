import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    confirmSecret: async(_, args) => {
      const {email, secret} = args;
      const user = await prisma.user({ email });
      if(user.loginSecret === secret) {
        // JWT
          return 'TOKEN'
      } else{
        throw Error(" 이메일 / 인증번호가 일치하지 않습니다");
      }
    }
  }
}