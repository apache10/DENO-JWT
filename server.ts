import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {login, auth, guest} from './routes.ts'
import authMiddleware from './authMiddleware.ts';

// define router
const router = new Router();

// adding endpoints to router
router
  .post('/login', login)
  .get('/guest', guest)
  .get('/auth', authMiddleware,  auth) // adding middleware for /auth endpoint only
  ;

// creating application
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8000});
console.log("Started on port: 8000");