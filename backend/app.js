// impot the express application that we installed using npm i express
const express = require("express");

// import Body-parser module
const bodyParser = require("body-parser");

// impot bcrypt
const bcrypt = require("bcrypt");

// impot axios
const axios = require("axios");

// impot multer module
const multer = require("multer");

// impot axios module
const path = require("path");


// impot jsonwebtoken module
const jwt = require('jsonwebtoken');

// impot express-session module
const session = require('express-session');

// import mongoose module
const mongoose = require("mongoose");
// .connect is a method perdefine mogosse
mongoose.connect("mongodb://127.0.0.1:27017/sportSoirDB");

// this line creat a backend express application
const app = express();

// configuration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, PATCH, PUT"

    );

    next();

});

app.use('/image', express.static(path.join('backend/images')));
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


const secretKey = 'corcocoder23';
app.use(session({ secret: secretKey, }));

// DataBase Simulation

// let matchesData=[
//     {id:1,teamOne:"EST",teamTwo:"CA",scoreOne:1,scoreTwo:1},
//     {id:2,teamOne:"CSS",teamTwo:"ESS",scoreOne:2,scoreTwo:3},
//     {id:3,teamOne:"FCB",teamTwo:"RMD",scoreOne:3,scoreTwo:1},
//     {id:4,teamOne:"ESS",teamTwo:"RM",scoreOne:0,scoreTwo:0},
//     {id:5,teamOne:"FCB",teamTwo:"RMD",scoreOne:5,scoreTwo:1}

// ];

// models importation

const Match = require("./models/match");
const User = require("./models/user");
const Team = require("./models/team");
const Player = require("./models/player");
const Stadium = require("./models/stadium");

const { log } = require("console");
const stadium = require("./models/stadium");

// Business Logic: get all matches

app.get("/matches", (req, res) => {
    console.log("here into bl:get all matches");
    Match.find().then((docs) => {
        res.json({ matches: docs });
    })
    // res.json({matches:matchesData});

})

// Business Logic: get  matches by id

app.get("/matches/:id", (req, res) => {
    console.log("Here into BL: Get Matches by ID");
    Match.findById(req.params.id).then(
        (doc) => {
            res.json({ match: doc });

        });
    // let matchId=req.params.id;
    // // for (let i = 0; i < matchesData.length; i++) {
    // //     if (matchesData[i].id == matchId) {
    // //         res.json({match:matchesData[i]});
    // //     }

    // // }
    // let findedMatch= matchesData.find((obj)=>{
    //     return obj.id==matchId;
    // })
    // res.json({match:findedMatch});
});

// Business Logic : add match
// Http://localhost:3000:matches
app.post("/matches", (req, res) => {
    console.log("Here inti BL: Add Match");
    let obj = new Match(req.body);
    //  .save method mongoose
    obj.save();
    res.json({ msg: "Added with success" });
    // let obj = req.body;
    // console.log("Here object from FE", obj);
    // matchesData.push(obj);
    // res.json({msg:"Added with success"});
});

// Business Logic : Delete Match
app.delete("/matches/:id", (req, res) => {
    console.log("Here into BL: Delete Match");
    let matchId = req.params.id;
    Match.deleteOne({ _id: matchId }).then((deleteRespose) => {
        console.log("Here response after delete", deleteRespose);
        if (deleteRespose.deletedCount == 1) {
            res.json({ msg: "deleted with success" });
        } else {
            res.json({ msg: "Error" });
        }
    });
    // for (let i = 0; i < matchesData.length; i++) {
    //     if (matchesData[i].id == matchId) {
    //        matchesData.splice(i,1);
    //        break;
    //     }

    // }
    // res.json({isDeleted:true});
});

// Business Logic : edit Match

app.put("/matches", (req, res) => {
    console.log("Here intro BL: Edit Match");
    let newMatch = req.body;
    Match.updateOne({ _id: req.body._id }, newMatch).then((updateResponse) => {
        console.log("here response after update", updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }
    });
    // for (let i = 0; i < matchesData.length; i++) {
    //     if (matchesData[i].id == newMatch.id) {

    //        matchesData[i]=newMatch;
    //        break;
    //     }

    // }
    // res.json({msg:"Edited with success"});
});

// Business Logic : Get all teams

app.get("/teams", (req, res) => {
    console.log("Here intro BL: Get all teams");
    Team.find().then((docs) => {
        res.json({ teams: docs })
    })
});
// Business Logic : get team by id

app.get("/teams/getById/:id", (req, res) => {
    console.log("here into BL: Get team by id ");
});
// business Logic: delet team
app.delete("/teams/delete/:id", (req, res) => {
    console.log("here intr BL : belete team");
});
// business Logiic : add team
app.post("/teams", (req, res) => {
    console.log("here intro BL:Add Team", req.body);  
    // let team = new Team(req.body);
    // team.save((err, doc) => {
    //     if (err) {
    //         res.json({ msg: "Error" })
    //     } else { 
    //         res.json({ msg: "Added with success" })

    //     }
    // })
});

// business Logiic : edit team
app.put("/teams/editTeam", (req, res) => {
    console.log("here intro BL:edit Team");
});

// business Logic : login
app.post("/users/login", (req, res) => {
    let result;
    console.log("here intro BL:login", req.body);
    User.findOne({ email: req.body.email })
        // retreave the user with the given email
        .then((doc) => {
            if (!doc) {
                return res.json({ msg: "Please Check Your Email" });
            } else {
                // if the doc is not exist it mean the user does not exist
                console.log("Result", doc);
                // if the user exist check if the password is the same
                bcrypt.compare(req.body.pwd, doc.pwd).then((pwdCompare) => {
                    // save the result in pwdCompare 
                    console.log("Here pwdCompare", pwdCompare);
                    if (pwdCompare) {
                        const token = jwt.sign({
                            fName: doc.firstName,
                            lName: doc.lastName,
                            id: doc._id,
                            role: doc.role
                        }, secretKey, { expiresIn: '1h' });
                        console.log("token", token);
                        // if the pass is the same 
                        res.json({
                            msg: "welcome",
                            token: token
                        });
                    } else {
                        res.json({ msg: "Please check your passaword" });
                        // if the pass is not the same
                    }
                });

            }

        })


    // User.findOne({email:req.body.email,pwd: req.body.pwd}).then(
    //     (doc)=> {
    //     console.log("Here doc",doc);
    //         if (doc) {
    //         res.json({msg:true});
    //     } else {
    //         res.json({msg:false});
    //     }
    // });
});

// business Logic : signup
app.post("/users/subscription", multer({ storage: storageConfig }).single("img"), (req, res) => {
    console.log("here intro BL:subscription", req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
        if (doc) {
            res.json({ msg: "oops, email exists" })
        } else {
            bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
                console.log("Here crypted pwd", cryptedPwd);
                req.body.pwd = cryptedPwd;
                req.body.avatar = `http://localhost:3000/image/${req.file.filename}`;
                let user = new User(req.body);
                user.save((err, doc) => {
                    if (err) {
                        res.json({ msg: "Failed" });

                    } else {
                        res.json({ msg: "Added with success" });
                    }
                });
            });
        }
    })


});

// Business Logic : Get All Users
app.get("/users", (req, res) => {
    console.log("Here into BL: Get All Users")
    User.find().then((users) => {
        res.json({ users: users });
    });
});

//Business Logic : Add Player
app.post("/players", (req, res) => {
    console.log("Here into BL:", req.body);
    Team.findById(req.body.teamId).then((team) => {
        if (!team) {
            return res.json({ message: "Team not found" });
        }
        // 
        const player = new Player({
            name: req.body.name,
            nbr: req.body.nbr,
            age: req.body.age,
            team: team._id,
        });
        player.save((err, doc) => {
            team.players.push(player);
            team.save();
            res.json({ msg: "Player Added with Success" });
        });
    });
});

// Business Logic : Get All Team Informations
app.get("teams/:teamId/info", (req, res) => {
    console.log("Here into BL: Get All Team info", req.params.teamId);
    Team.findOne({ _id: req.params.teamId }).populate("players").then(
        (docs) => {
            console.log("Here teams", docs);
            res.json({ x: docs });
        });
});

// Business Logic : Weather
app.post("/weather", (req, res) => {
    console.log("Here into BL weather", req.body);
    let key = "afeef0442cdf7b70db5aa2258331e3b7";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`;
    axios.get(apiURL).then((response) => {
        console.log("Here API Response", response);
        let weatherToSend = {
            temperature: response.data.main.temperature,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            speed: response.data.wind.speed,
            icone: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        };
        res.json({ resp: weatherToSend });
    })
});

//  Business Logic : add stadium
app.post("/stadia", (req, res) => {
    console.log("here into BL add stadium", req.body);
    let s = new Stadium(req.body);
    let stadium = new Stadium(req.body);
    stadium.save((err,doc)=>{
        if (err) {
            res.json({msg:"Error"});
        } else {
            res.json({msg:"Success"});
 
        }
    }) ;
});
//  Business Logic : get all stadium

app.get("/stadia",(req,res)=>{
    console.log("here into Bl : get all stadium");
    stadium.find().then((docs)=>{
        res.json({stadiumsTab:docs});
    })
})


// make app importable from another files
module.exports = app;  