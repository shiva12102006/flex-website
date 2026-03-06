import {prisma} from "@/lib/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function POST(req){

  const {email,password} = await req.json()

  const user = await prisma.user.findUnique({
    where:{email}
  })

  if(!user){
    return Response.json({error:"User not found"})
  }

  const match = await bcrypt.compare(password,user.password)

  if(!match){
    return Response.json({error:"Wrong password"})
  }

  const token = jwt.sign(
    {id:user.id, role:user.role},
    process.env.JWT_SECRET,
    {expiresIn:"1d"}
  )

  const res = Response.json({
    success:true,
    role:user.role
  })

  res.cookies.set("token",token,{
    httpOnly:true
  })

  return res
}