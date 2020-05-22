const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const multiParty = require('connect-multiparty');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
*/

const multiPartyMiddleware = multiParty({ uploadDir: './uploads' });
app.post('/uploads',multiPartyMiddleware, (req,res)=>{
    const files = req.files;
    console.log(files);
    res.json({ message: files });
});

app.use((err, req, res, next)=> {
    res.json({ error: error.message })
});

app.listen(5500, ()=>{
    console.log("server start!")
});
