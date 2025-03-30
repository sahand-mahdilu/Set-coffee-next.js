import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

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

const verifyToken = (token: string) => {
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
