import { User } from '../mongo';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { Request, Response } from 'express';

async function signupUser(req: Request, res: Response) {
  const email = req.body.email;
  const password = req.body.password;
  const nickName = req.body.nickName;
  const hashedPassword = await hashPassword(password);

  const user = new User({
    email: email,
    role: 'user',
    nickName: nickName,
    password: hashedPassword,
  });
  user
    .save()
    .then(() => {
      res
        .status(201)
        .send({
          userId: user?._id,
          token: createToken(email),
          role: user?.role,
        });
    })
    .catch((err) =>
      res.status(409).send({ message: "Problème d'enregistrement ! " + err })
    );
}

function hashPassword(password: string) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

async function loginUser(req: Request, res: Response) {
  try {
    const email: string = req.body.email;
    const password: string = req.body.password;

    const user: any = await User.findOne({ email: email });

    const valablePassword = await bcrypt.compare(password, user.password);
    if (!valablePassword) {
      res.status(401).send({ message: 'Mot de passe incorrect' });
      return;
    }

    const token = createToken(email);
    res.status(200).send({ userId: user?._id, token: token, role: user?.role });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Internal Error' });
  }
}
function createToken(email: string) {
  const tokenPassword = process.env.TOKENPASSWORD!;
  const token = jsonwebtoken.sign({ email: email }, tokenPassword, {
    expiresIn: '24h',
  });
  return token;
}

export { signupUser, loginUser };
