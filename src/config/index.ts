import dotenv from "dotenv"
import path from "path";
// ! config file

dotenv.config({ path: path.join(process.cwd(), ".env") });


const config = {
    connection_str : process.env.CONNECTION_STRING,
    port : process.env.PORT,
    secrete: process.env.SECRETE_AUTH
}

export default config;