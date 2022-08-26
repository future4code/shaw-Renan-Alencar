import axios from "axios";
import { BASE_URL } from "../Constants/Url";

export const getList = (dataList: any, breend: string) => {
  try {
    const token: any = {
      headers: { Authorization: localStorage.getItem("token") },
    };
    axios
      .get(`${BASE_URL}/list?breed=${breend}`, token)
      .then((res) => {
        dataList(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {}
};
