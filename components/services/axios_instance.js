import axios from "axios";
import {MAIN_FRONTEND_URL} from '../config/urls'

const instance = axios.create({
  baseURL : MAIN_FRONTEND_URL,
});

export default instance;