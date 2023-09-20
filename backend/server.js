require('dotenv').config();
const express = require('express');
const kisiRouter=require("./Routes/kisiRouter");
const port = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/kisi',kisiRouter);


app.listen(port, () => {
  console.log(`service is running on:: [${port}]`);
});



      