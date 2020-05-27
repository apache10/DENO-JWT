import { Context } from "https://deno.land/x/oak/mod.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts"
import key from './key.ts'

// middleware function for JWT validation
const authMiddleware = async (ctx: Context, next: any) => {

  // Taking JWT from Authorization header 
  const headers: Headers = ctx.request.headers;
  // Comparing if it is valid JWT token, if YES - we continue, 
  // otherwise we return with status code 401
  const authorization = headers.get('Authorization')
  if (!authorization) {
    ctx.response.status = 401;
    return;
  }
  // extracting JWT authorization
  const jwt = authorization.split(' ')[1];
  if (!jwt) {
    ctx.response.status = 401;
    return;
  }
  if (await validateJwt(jwt, key, {isThrowing: false})){
    await next();
    return;
  }

  ctx.response.status = 401;
  ctx.response.body = {message: 'Invalid jwt token'};
}

export default authMiddleware;