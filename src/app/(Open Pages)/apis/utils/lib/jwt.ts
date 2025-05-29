import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'your-secret-key';

interface UserPayload {
  email: string;
}

export const generateToken = (user: UserPayload): string => {
  return jwt.sign(user, secretKey, { expiresIn: '1h' });
};

export const verifyToken = (token: string): UserPayload | null => {
  try {
    return jwt.verify(token, secretKey) as UserPayload;
  } catch (error) {
    return null;
  }
};