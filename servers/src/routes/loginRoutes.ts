import { Router, Request, Response } from 'express';

/**
 * define request with body.
 */
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="em" />
    </div>
      <div>
      <label>Password</label>
      <input type="password" name="pa" />
    </div>
    <button>Submit</button>
  </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { em, pa } = req.body;

  if (em && pa && em == 'admin@admin.com' && pa == '1234') {
    req.session = { loggedIn: true }
    res.redirect('/')
  } else {
    res.send('Invalid value')
  }
});

router.get('/',(req:Request,res:Response) => {
    if(req.session && req.session.loggedIn){
      res.send(`
        <div>
          <div>You are logged in.</div>
          <a href="/logout">Logout</a>
        <div>
      `)
    }else{
      res.send(`
        <div>
          <div>You are logged out.</div>
          <a href="/login">Login</a>
        <div>
      `)
    }
})

export { router };
