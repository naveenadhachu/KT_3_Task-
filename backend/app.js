const express = require(“express”);
const studentsRouter = require(“./routes/students”);
const app = express();
app.use(express.json());
app.use(“/students”, studentsRouter);
app.get(“/”, (req, res) => {
 res.send(“School Management System”);
});
Const PORT = 3000;
App.listen(PORT, () => {
 Console.log(`Server running at http://localhost:${PORT}`);
});
