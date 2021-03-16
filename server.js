const express = require('express');
const bodyParser = require('body-parser');
const {cloudinary} = require('./utils/cloudinary');

const app = express();


app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/upload', async(req, res) => {
  console.log(req.body);
/*   res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  ); */

  try {
    const getPicture = req.body.data;
const uploadedResponse = await cloudinary.uploader.upload(getPicture, {
upload_preset: 'PedroLuis'
})

/*res.setHeader('Content-Type', 'application/json');
res.send(uploadedResponse.url);
console.log(uploadedResponse.url)
console.log(res.message)*/
res.json({message: uploadedResponse.url})  
    
  } catch (error) {
    console.error(error)
    res.status(500).json({error:'something get wrong'})
  }
}

);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));