import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

// error handler
// app.use로 모두 연결되어 있기 때문에 next 함수를 사용하면
// 호출되어 에러 헨들러가 작동됩니다.
// ! app.use로 연결되는 next 함수 개념 공부하기
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went Wrong!";

  return res.status(status).json({ success: false, status, message });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to Server");
});
