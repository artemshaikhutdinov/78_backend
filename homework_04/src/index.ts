import express from "express";
import todosRouter from "./modules/routes/todos.routes";

const app = express();

app.use(express.json());

app.get("/status", (_req, res)=>{
    res.status(200).json({status:"ok"});
});
app.use("/todos", todosRouter)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});