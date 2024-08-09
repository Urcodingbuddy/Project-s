const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json()); 
const mainRouter = require('./routes/index');


app.use('/app/v1',mainRouter)
app.listen(port,'0.0.0.0',()=>{
    console.log(`Server is running on port ${port}`);
})