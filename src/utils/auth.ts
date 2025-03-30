import { compare, hash } from "bcryptjs";

const hashPassword = async (password: string):Promise<string>  =>  {
  const hashedPassword = hash(password, 12);

  return hashedPassword;
};


const verifyPassword= async(password:string,hashedPassword:string):Promise<boolean> =>{

    const isValid = await compare(password,hashedPassword)

    return isValid

}

