import axios from "axios";

export async function submitUser(payload) {
  return await axios.post("https://httpbin.org/post", payload);
}
