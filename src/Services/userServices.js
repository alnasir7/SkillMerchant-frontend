import configs from "../Configs/Configs.json";
import http from "./httpServices";

export async function subscribeUser({ subscriber }) {
  const apiPoint = configs.apiEndPoint + "/subscribtions";
  try {
    const result = await http.post(apiPoint, subscriber);
  } catch (error) {
    console.log(error);
  }
}

export async function sendMessage(message) {
  const apiPoint = configs.apiEndPoint + "/messages";
  try {
    const result = await http.post(apiPoint, message);
  } catch (error) {
    console.log(error);
  }
}
