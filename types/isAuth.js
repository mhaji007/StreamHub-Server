// Check GraphQL headers for an authorization token
// isAuth (or "isAuthenticated") to make sure the current
// session contains a logged in user.


import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../types/MyContext';
import jwt from 'jsonwebtoken';

const APP_SECRET = process.env.SESSION_SECRET || 'aslkdfj43r34r344';

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const authorization = context.req.headers['authorization'];
  try {
    const token = authorization?.replace('Bearer ', '')!;
    const user = jwt.verify(token, APP_SECRET) as any;
    context.res.locals.userId = user.id;
    return next();
  } catch (err) {
    throw new Error(err.message);
  }
};
