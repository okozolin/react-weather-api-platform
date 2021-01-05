import axios from "axios";
import { SERVER_PORT } from "../config/ports"

const http =  axios.create({
    baseURL: SERVER_PORT,
    headers: {
      "Content-type": "application/json"
    }
  });

  export default http;