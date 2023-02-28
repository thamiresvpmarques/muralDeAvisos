const PORT = 3000;
const express = require('express');
const path = require('path')
const apiRoutes = require('./routes/api')

const app = express();

app.use('/api', apiRoutes)
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, (err)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log("Server rodando na port", PORT)
    }
})


