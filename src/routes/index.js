import express from 'express';
import database from '../services/database.js';

const router = express.Router();

router.post('/register', async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message: 'All fields are required'});
        }
        const saveUser = {
            name,
            email,
            password
        };
        const data = await database.createUser(saveUser);
        res.status(201).json({message: 'User created successfully', data});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

router.post('/login', async (req, res)=>{
    try{
        const { email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: 'All fields are required'});
        }
        const data = await database.getUserByEmail(email);
        res.status(201).json({message: 'User logged in successfully', data});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

router.get('/health', (req, res) => {
  res.send(req.query.name);
});

export default router;