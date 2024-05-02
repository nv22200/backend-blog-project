import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db";
import { 
  errorResponserHandler, 
  invalidPathHandler, 
} from "./middleware/errorHandler";

// Routes
import userRoutes from "./routes/userRoutes";
import PostRoutes from "./routes/PostRoutes";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/Posts", PostRoutes);

app.use(invalidPathHandler);
app.use(errorResponserHandler);

// static assets
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
