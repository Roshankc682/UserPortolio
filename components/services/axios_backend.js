import axios from "axios";
import {SEND_MAIL} from '../config/urls'

const backend_instance = axios.create({
  baseURL : SEND_MAIL,
});

export default backend_instance;