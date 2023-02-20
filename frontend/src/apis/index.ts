import axios from "axios";
import { API_BASIC_URL } from "const/Consts";

const handleSendRequst = async (data: any) => {
  return axios.post(`${API_BASIC_URL}` + `contact`,data)
};

export {
  handleSendRequst,
};