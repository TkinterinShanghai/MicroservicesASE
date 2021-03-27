import cors from "cors";
import express from "express";
import itemRouter from "./routes/itemRoutes";
import userRouter from "./routes/userRoutes";

const PORT = process.env.PORT || 2000;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired",
    ],
    optionsSuccessStatus: 200,
  })
);

app.use("/v1/user", userRouter);
app.use("/v1/items", itemRouter);

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message || "There was an error in the API gateway! ",
  });
});

app.listen(Number(PORT), "0.0.0.0", () => {
  console.info(`API Gateway listening on ${PORT}`);
});
