import axios from "axios"
import { baseURL } from "./baseURL"

//A. Ela enviar todas as promises de uma fez

//B. Que as notificações são enviadas ao mesmo tempo, não uma por uma

//C.

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
      const promises = ids.map(id => {
        axios.post(`${baseURL}/notifications`, {
          subscriberId: id,
          message: message,
        })
      })
      await Promise.all(promises)
      console.log(`Notificações enviadas com sucesso`)
    } catch (error) {
      console.log(`Erro ao enviar para ${id}`);
    }
  }
};

getsubscribers()
  .then(getIds)
  .then(sendNotification)