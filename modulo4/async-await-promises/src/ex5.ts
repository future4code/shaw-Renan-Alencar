import axios from "axios"
import { baseURL } from "./baseURL"

const message =  "Curso back Labenu";

const  getsubscribers =  async () => {
  const response = await 
    axios.get(`${baseURL}/subscribers`) 
    return response.data
}

const getIds = (subscribers: any) => {
  return subscribers.map((subscriber: any) => {
    return subscriber.id;
  });
};

const sendNotification = async (ids: string[]): Promise<void> => {
  for (const id of ids) {
    try {
      await axios
        .post(`${baseURL}/notifications`, {
          subscriberId: id,
          message: message,
        })
        .then(() => {
          console.log(`Notificação enviada a ${id}`);
        });
    } catch (error) {
      console.log(`Erro ao enviar para ${id}`);
    }
  }

  //Modo alternativo e mais eficiente
  // for (const id of ids) {
  //   axios
  //     .post(`${baseURL}/notifications`, {
  //       subscriberId: id,
  //       message: message,
  //     })
  //     .then(() => {
  //       console.log(`Notificação enviada a ${id}`);
  //     })
  //     .catch(() => {
  //       console.log(`Erro ao enviar para ${id}`);
  //     });
  // }
};

getsubscribers()
  .then(getIds)
  .then(sendNotification)
