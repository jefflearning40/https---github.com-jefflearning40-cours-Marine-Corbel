import express from 'express';
import {createUser,users,readUser2} from '../controllers/user.controller.js'
const userRouter = express.Router();


userRouter.post('/',createUser)

userRouter.get('/',(req,res)=>{
    res.send(users);
});
userRouter.get('/user2',readUser2);

export default userRouter;
