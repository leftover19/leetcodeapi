import express, { Response, Request } from 'express'
import cors from 'cors'
import query from './graphql/solvedQuery';
import fetchData from './fetchData';
const app = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({
        Usage: {
            '/:username/details': "get all the required details of user",
        }
    });
});

app.get('/:username/', async (req: Request, res: Response) => {
    try {
        const user = req.params.username;
        const userDetails = await fetchData(query, user);
        console.log(userDetails);
        res.json(userDetails);
        
    }
    catch(err){
        console.log(err);
        return res.status(400);
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

