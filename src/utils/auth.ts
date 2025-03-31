import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";


const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await hash(password, 12); 
  return hashedPassword;
};


const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};


const generateAccessToken = (data: object): string => {
  const secretKey = process.env.AccessTokenSecretKey;
  if (!secretKey) {
    throw new Error(
      "AccessTokenSecretKey is not defined in environment variables"
    );
  }

  const token = sign({ ...data }, secretKey, {
    expiresIn: "60d",
  });
  return token;
};


const verifyToken = (token: string): object | string | boolean => {
  const secretKey = process.env.AccessTokenSecretKey;
  if (!secretKey) {
    throw new Error(
      "AccessTokenSecretKey is not defined in environment variables"
    );
  }

  try {
    const tokenPayload = verify(token, secretKey);
    return tokenPayload;
  } catch (err) {
    console.log("Verify Access Token Error ->", err);
    return false;
  }
};


const generateRefreshToken = (data: object): string => {
  const secretKey = process.env.RefreshTokenSecretKey;
  if (!secretKey) {
    throw new Error(
      "RefreshTokenSecretKey is not defined in environment variables"
    );
  }

  const token = sign({ ...data }, secretKey, {
    expiresIn: "10d", 
  });
  return token;
};
const valiadteEmail = (email:string) => {
    const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
    return pattern.test(email);
  };

  const validatePassword = (password:string) => {
    const pattern =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
    return pattern.test(password);
  };


  const validateUsername = (username:string) => {
    const pattern =
      /^[a-z0-9_-]{3,15}$/g;
    return pattern.test(username);
  };






export {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyToken,
  generateRefreshToken,
  valiadteEmail,
  validatePassword,
  validateUsername
};