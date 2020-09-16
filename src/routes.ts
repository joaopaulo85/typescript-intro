import{ Request, Response} from 'express';

function helloWorld(request: Request, response: Response) {
  return response.json({message:'Hello World'});
}

export default helloWorld;