import { Router } from "express";
import { v7 } from "uuid";

import { Todos } from "../todos.types";

const router = Router();

const todos: Todos[] = [
  {
    id: v7(),
    title: "home work AIT",
    content: "RESTful API methods",
    status: "in progress",
  },
  {
    id: v7(),
    title: "buy groceries",
    content: "cheese, zucchini, apples, watermelon",
    status: "done"
  },
];

router.get("/", (__req, res)=>{
    res.status(200).json(todos)
})

export default router;