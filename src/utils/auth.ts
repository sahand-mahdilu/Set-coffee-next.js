import { hash } from "bcryptjs"


const hashPassword= async(password:string)=>{

    const hashedPassword = hash(password,12)

    return hashedPassword


}