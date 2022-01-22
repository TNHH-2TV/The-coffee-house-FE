import axios from "axios";

const baseURL = "http://localhost:5000"
 
const fetch = axios.create({ baseURL });

export default fetch;

//all api
export * from "./login";