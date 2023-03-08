import dotenv from "dotenv";
dotenv.config()
export const {
    APP_PORT,
    DEBUG_MODE,
    MONGO_ATLAS_URL,
    JWT_SECRET
} = process.env