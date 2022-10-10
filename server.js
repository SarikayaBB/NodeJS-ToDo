const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
var basliklar = [];
var aciklamalar = [];
var tarih = new Date();
app.get("/", function (req, res) {
  res.render("index.ejs", {
    baslik: "",
    aciklama: "",
    basliklar: [],
    aciklamalar:[],
    bugun: tarih.toLocaleDateString()
/* BUNDAN SONRA YAPARKEN    
res.render("index.ejs",{model:{
baslik:
aciklama:
....
    }
});    seklinde yapabilirsin. cagirirken de model.baslik vb. sekilde cagir*/
  });
});
app.post("/", function (req, res) {

  basliklar.push(req.body.baslik);
  aciklamalar.push(req.body.aciklama);
  console.log(basliklar);
  console.log(aciklamalar);
  res.render("index.ejs", {basliklar:basliklar, aciklamalar:aciklamalar,baslik:'',aciklama:''});
});
app.listen(3000, () => console.log("Server is listening at port 3000."));

//https://stackoverflow.com/questions/4037939/powershell-says-execution-of-scripts-is-disabled-on-this-system
//npm i -g nodemon 
