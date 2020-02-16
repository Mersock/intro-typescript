import { Router, Request, Response, NextFunction } from 'express';

/**
 * define request with body.
 */
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403).send('Not Permission');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
        <div>
          <div>You are logged in.</div>
          <a href="/logout">Logout</a>
        <div>
      `);
  } else {
    res.send(`
        <div>
          <div>You are logged out.</div>
          <a href="/login">Login</a>
        <div>
      `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;

  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route.');
});

export { router };
