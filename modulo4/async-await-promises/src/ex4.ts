import axios from "axios"
import { baseURL } from "./baseURL"

const news = {
  title: "Ultima noticia",
  content: "Estamos aprendendo back",
  date: Date.now()
}

const createNews = async (news: any) => {
  return  await axios.put(`${baseURL}/news`, news)
}

const main = async () => {
  try {
    const result = await createNews(news)
    console.log(result)
    
  } catch (error:any) {
    const resp = error.response?.data || error.message
        console.log(resp)
  }
}

main()