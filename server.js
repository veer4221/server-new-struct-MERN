import express from "express";
import { APP_PORT, MONGO_ATLAS_URL } from "./config";
const app = express();
import routes from "./routes"
import errorHandler from "./middlewares/errorHandler";
import mongoose from "mongoose";

app.use(express.json());
app.use("/api", routes)


mongoose.connect(MONGO_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Mongoose is connected :>>>🤘😎🤘');
});

app.use(errorHandler);
app.listen(APP_PORT, () => console.log(`server is running on port ::> ${APP_PORT} 🚀❤️‍🔥🚀`))