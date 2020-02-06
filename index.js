var express = require("express");
var app = express();
var fs = require("fs");
app.use(express.static("root"));
let data = fs.readFileSync("./posts.json");
let json = JSON.parse(data)
console.log(json);
app.use(express.json());                                        

app.get("/post",(req,res)=>{

// json.push({"title":"soham","desc":"dave"})

res.send(json);
	// res.send(req.params);
	// res.send(req.query);
})





app.post("/post",(req,res)=>{
    json.push(req.body);
    
//  json.push({"title":"nishant","desc":"shah"});
fs.writeFileSync("./posts.json",JSON.stringify(json,null,2));   
res.send(json);

})




app.listen(3000,()=>{console.log("listening on port 3000")});