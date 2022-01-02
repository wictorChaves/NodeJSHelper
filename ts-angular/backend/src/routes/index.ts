import { Router }                                                from 'express';
import { NamesController }                                       from 'src/controllers/NamesController';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';

// User-route
const userRouter = Router();
userRouter.get('/all', getAllUsers);
userRouter.post('/add', addOneUser);
userRouter.put('/update', updateOneUser);
userRouter.delete('/delete/:id', deleteOneUser);

// Name-route
const nameRouter      = Router();
const namesController = new NamesController();
nameRouter.get('/', namesController.getAll);
nameRouter.post('/', namesController.addOne);
nameRouter.put('/', namesController.updateOne);
nameRouter.delete('/:id', namesController.deleteOne);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/names', nameRouter);
export default baseRouter;
