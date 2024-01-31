import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';


const app = express();
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);
mongoose
.connect('mongodb+srv://raph123:raph123@cluster0.qk2vsaj.mongodb.net/?retryWrites=true&w=majority'
)
.then(() => app.listen(5000))
.then(() => console.log('Connected To Databae and Listening To Localhost 5000')
)
.catch((err) => console.log(err));
