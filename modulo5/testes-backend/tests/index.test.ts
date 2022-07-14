import { UserBusiness } from "../src/business/UserBusiness";
import { UserDataMocks } from "./mocks/UserDataMocks"



const userBusinessMock = new UserBusiness(
  new UserDataMocks as any,
);

describe("Teste getUserById", () => {

  test("Erro de usuário não existente",async () => {
    try {
      await userBusinessMock.getUserById("abc")
    } catch (error:any) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("Usuário não localizado")
    } finally {
      expect.assertions(2)
    }
  })

  test("Resposta de sucesso", async () => {
    const getUserByIdMock = jest.fn((id: string) => {
      return userBusinessMock.getUserById(id);
    });

    try {
      const result = await getUserByIdMock("id_mock1");

      expect(getUserByIdMock).toHaveBeenCalledWith("id_mock1");
      expect(result).toEqual({
        id: "id_mock1",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      expect.assertions(2);
    }
  });
})