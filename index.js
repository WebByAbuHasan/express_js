const express= require(`express`);
const app= express();


app.get("/",(req,res)=>{
    res.send("this is home page");
})
app.get("/about",(req,res)=>{
    res.send("this is about page");
})
app.get("/contact",(req,res)=>{
    res.send("this is contact page");
})
app.get("/blog",(req,res)=>{
    res.send("this is blog page");
})

app.listen(8080,function(){
    console.log("Server running on port 8080");
})