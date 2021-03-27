import cors from "cors";
import express from "express";
import userRoutes from "../routes/userRoutes";

const PORT = process.env.PORT || 2100;

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
      "X-Password-Expired"
    ],
    optionsSuccessStatus: 200
  })
);

app.use("/", userRoutes);

app.use((err, req, res, next) => {
  console.log(err.message)
  return res.status(500).json({
    message: err.message || "There was an error in the user Service"
  });
});

app.listen(Number(PORT), "0.0.0.0", () => {
  console.info(`Users service listening on ${PORT}`);
});