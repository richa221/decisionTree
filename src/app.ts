import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { DecisionTreeService } from './services/treeService';

// Create an Express app
const app = express();
app.use(bodyParser.json());

// POST route to execute the decision tree
app.post('/execute-tree', (req: Request, res: Response) => {
    // try {
    const tree = DecisionTreeService.fromJSON(req.body);
    tree.execute();
    res.status(200).send('Given Decision tree run successfully.');
    // } catch (error) {
    //     res.status(400).send(`Error: Error while executing tree`);
    // }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
