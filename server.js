// import the app that we created
const app=require("./backend/app");

// app will lesson to every thing coming from port 3000 then will be sending it to app.js (party logic)
app.listen(3000, ()=>{
    console.log("APP is listening on PORT 3000")
});


