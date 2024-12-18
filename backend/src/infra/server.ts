import express from 'express';
import dotenv from 'dotenv';

// import { UserControllerFactory } from '../factories/UserControllerFactory';

// const { router } = UserControllerFactory();

dotenv.config();

const app = express();
app.use(express.json());

// app.use(router);

app.get('/', (req, res) => {
    res.send('StudyBuddy API is running!')
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
