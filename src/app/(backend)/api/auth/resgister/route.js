import {prisma} from "@/lib/prisma";
import bcrypt from "bcrypt";


export async function POST(req){

  const {name,email,password} = await req.json()

  const hash = await bcrypt.hash(password,10)

  const user = await prisma.user.create({
    data:{
      name,
      email,
      password:hash
    }
  })

  return Response.json(user)
}