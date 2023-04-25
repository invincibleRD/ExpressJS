// const url = require("url");
// const http = require("http");
// const requestUrl = url.format({
//   protocol: "http",
//   hostname: "20.235.178.194",
//   port: "80", //default port
//   pathname: "/trades",
// });

// const options = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// http
//   .request(requestUrl, options, (res) => {
//     let data = "";
//     res.on("data", (chunk) => {
//       data += chunk;
//     });
//     res.on("end", () => {
//       console.log(JSON.parse(data)); // Do something with the fetched data
//     });
//   })
//   .end();

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/calculate', (req, res) => {
//   const number = parseInt(req.query.number);
//   const operation = req.query.operation;

//   switch (operation) {
//     case 'inc':
//       res.send((number+1).toString())
//       break;
//     case 'dec':
//       res.send((number-1).toString())
//       break;
//     case 'sq':
//       res.send(Math.pow(number, 2).toString())
//       break;
//     default:
//       console.log(operation)
//       res.send('Invalid operation');
//   }
// });

// const path =require('path')
// const dir=path.join(__dirname,'index.html')
// app.get('/', (req, res) => {
//   // res.sendFile(dir);
//   res.send("hi")
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// http module

// const http = require("http");
// friends = [
//   {
//     id: 0,
//     name: "dipedra",
//   },
//   {
//     id: 1,
//     name: "shubham",
//   },
//   {
//     id: 2,
//     name: "ravinder",
//   },
// ];
// const PORT = 3000;
// const server = http.createServer();
// server.on("request", (req, res) => {
//   const items = req.url.split("/");
//   // item=["","friends","1"]
//   if (req.method === "POST" && items[1] === "friends") {
//     req.on("data", (data) => {
//       const friend = data.toString();

//       console.log("Recieved:", friend);
//       friends.push(JSON.parse(friend))
//     });
//   } else if (req.method === "GET" && items[1] == "friends") {
//     res.statusCode = 200;
//     res.setHeader = ("content-Type", "application/json");
//     if (items.length === 3) {
//       const fi = +items[2];
//       res.end(JSON.stringify(friends[fi]));
//     } else {
//       res.end(JSON.stringify(friends));
//     }
//   } else if (req.method === "GET" && items[1] === "messages") {
//     res.setHeader = ("content-Type", "text/html");
//     res.statusCode = 200;
//     res.write("<h1>Message</h1>");
//     res.end();
//   } else {
//     res.end("bad request");
//   }
// });
// server.listen(PORT, () => {
//   console.log(`listening at port:${PORT}`);
// });

// express

const express = require("express");

const app = express();
const PORT = 3000;
const friends = [
  {
    id: 0,
    name: "Dipednra ",
  },
  {
    id: 1,
    name: "shubham ",
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = start - Date.now();
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", (req, res) => {
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);
  res.status(200).json({ Data: "New Friend was Created" }); 
});

app.get("friends", (req, res) => {
  res.status(200).json(friends);
});

app
  .get("/friends/:friendID", (req, res) => {
    const friendID = Number(req.params.friendID);
    const friend = friends[friendID];
    if (friend) {
      res.status(200).json(friend);
    } else {
      res.status(404).json({ error: "Friend Not Found" });
    }
  })
  .listen(PORT, () => console.log(`Listening at port: ${PORT}`));
