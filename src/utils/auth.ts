import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = hash(password, 12);

  return hashedPassword;
};

const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isValid = await compare(password, hashedPassword);

  return isValid;
};

const generateAccessToken = (data: object) => {
  const secretKey = process.env.AccessTokenSecretKey;
  if (!secretKey) {
    throw new Error(
      "AccessTokenSecretKey is not defined in environment variables"
    );
  }

  const token = sign({ ...data }, secretKey, {
    expiresIn: "60s",
  });

  return token
};
