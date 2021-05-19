import express from "express";
import { roll } from "@ts-monorepo/core";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send(roll("1d20"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
