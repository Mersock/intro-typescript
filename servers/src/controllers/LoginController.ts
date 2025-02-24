import { Request, Response, NextFunction } from 'express';
import { get, controller, post, bodyValidator } from './decorators';

@controller('/auth')
class LoginControllers {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="POST">
          <div>
            <label>Email</label>
            <input name="email" />
          </div>
            <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <button>Submit</button>
        </form>
        `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email == 'admin@admin.com' && password == '1234') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid value');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;

    res.redirect('/');
  }
}
