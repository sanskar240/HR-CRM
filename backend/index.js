const express = require('express');
const {PrismaClient} = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
const prisma = new PrismaClient();
const cors = require('cors');
const SECRET = 'Qd5Rz1kDgB6bnNC8VdjceWLUBF70CtloxLCXGw8yM3M=' ;

//Middlewares:

//JWT:Qd5Rz1kDgB6bnNC8VdjceWLUBF70CtloxLCXGw8yM3M=
app.use(express.json());
app.use(cors());
// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };

  // Middleware to check admin role
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'ADMIN') return res.sendStatus(403);
    next();
  };

  // Register a new user
app.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const newUser = await prisma.user.create({
        data: { name, email, password: hashedPassword, role }
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: 'User already exists' });
    }
  });

  //Login a new user

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid credentials' });
  
    const token = jwt.sign({ userId: user.id, role: user.role }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  });


//Get users from database
 app.get('/users',async(req,res)=>{
    try{
        const users = await prisma.user.findMany();
         res.status(201).json(users);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Error creating the user"})
    }
 });

// Create a new user
app.post('/users', async (req, res) => {
    const { name, email, password, role } = req.body;
  
    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password:hashedPassword,
          role
        }
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  });

  //Ticket endpoints

  app.post('/tickets',async(req,res)=>{
    const {title,description,status} = req.body;
    try{
      const newTicket = await prisma.ticket.create({
        data:{
          title,
          description,
          status
        }
      });
      res.status(201).json(newTicket);
    }catch(error){
      console.error("Error creating ticket",error);
      res.status(501).json({message:"Internal server error"});
    }
  });

  app.get('/ticket',async(req,res)=>{
    try{
      const tickets = await prisma.ticket.findMany();
    }catch(error){
      console.error(error);
      res.status(500).json({message:"Internal Server Error"});
    }
  })


const PORT = process.env.PORT || 5003;

app.listen(PORT,()=>{
    console.log("Server running on port 5003");
});

//readme