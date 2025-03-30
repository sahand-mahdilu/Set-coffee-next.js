import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";


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
    expiresIn: "60s",
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

export {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyToken,
  generateRefreshToken,
};