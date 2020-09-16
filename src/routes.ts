import{ Request, Response} from 'express';
import createUser from './services/CreateUser';

function helloWorld(request: Request, response: Response) {
  const user = createUser({ 
    email:'jptick@gmail.com',
    password:'123',
    techs:[
      'Node',
      'ReactJS',
      'React Native',
      {title:'javascript', experience:100},
    ],
  });

  return response.json({message:'Hello World'});
}

export default helloWorld;