import  connection  from "./connection";

export default async function selectTask(id:string) {
  const result = await connection("TodoListTask")
  .join('TodoListUser', 'creator_user_id', 'TodoListUser.id')
  .select("TodoListTask.id", "TodoListTask.title", "TodoListUser.name")
  .where({"TodoListTask.id": id})
   
  
  return result;
}