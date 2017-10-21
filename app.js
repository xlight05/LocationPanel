const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const port = process.env.PORT || 3000;


let app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

cloudinary.config({
    cloud_name: 'da6yjdm3d',
    api_key: '613653817217321',
    api_secret: 'F6-z9RKRSc4nznItFcVx2kxeDsc'
});



app.post('/addLocation', (req, res) => {
 
});

app.listen(port, () => {
    console.log(`Server is open on port ${port}`);
});