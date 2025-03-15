import { Router } from 'express';
import Controller from '../controller/controllers.js';
const router =  Router();

router.get('/user', Controller.getUser)


export default router;