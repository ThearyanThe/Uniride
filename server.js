const http = require("http");
const express = require("express");
const userRouter = require("./router/userRouter/userRouter");
//!server
const app = express();
const server = http.createServer(app);
//routers
app.use('/',userRouter);
//start the server
const PORT = process.env.PORT || 9090;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
