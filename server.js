

const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(fileUpload());
app.use(express.static("files"));

app.post("/upload", (req, res) => {
  const newpath = __dirname+ "/src/images/";
  const file = req.files.file;
  const filename = file.name;
  
  file.mv(`${newpath}${filename}`, (err)=>{
    if(err){
      res.status(500).send({ message: "File upload failed", code : 200 });
      }
    res.status(200).send({message: "File Uploaded", code : 200});

  });
});

app.listen(3002, ()=>{
  console.log("Server runnuing successfully on 3002");
})