import  connection  from "./connection";

export default async function selectUser(id:string) {
  const result = await connection("TodoListUser")
  .select("name")
  .where({id})
  
  return result[0];
}