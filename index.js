const express = require("express");
const multer = require ("multer")
const app = express();
const port = 8000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

app.get("/register", (req, res)=>{
    res.status(200).sendFile(__dirname + "/index.html")
})
app.post ("/register", upload.single("image"), (req, res)=>{
    res.status(200).send("file is uploaded");
})
app.get ("/test", (req,res)=>{
    res.status(200).send("testing api")
})

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
});
