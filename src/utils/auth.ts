import { compare, hash } from "bcryptjs";

const hashPassword = async (password: string) => {
  const hashedPassword = hash(password, 12);

  return hashedPassword;
};


const verifyPassword= async(password:string,hashedPassword:string) =>{

    const isValid = await compare(password,hashedPassword)

    return isValid

}

