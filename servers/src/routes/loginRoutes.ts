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
  
  if(em){
    res.send(em.toUpperCase())
  }else{
    res.send('Please Provide an Email.')
  }
});

export { router };
