import { connection } from "../data/connection"

const selectAll = async (
  filterNameType: any,
  orderNameType: any,
  order: any,
  offset: any
): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .orderBy(orderNameType, order)
    .limit(5)
    .offset(offset)
    .where("name", "like", `%${filterNameType}%`)
    .orWhere("type", "like", `%${filterNameType}%`);

  return result;
};

export default selectAll;