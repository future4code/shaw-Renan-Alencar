import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase{

private static Case_Cubo = "Case_Cubo"
  async createTables() {
    try {
      
      await this.getConnection().raw(
        `
        CREATE TABLE ${Migrations.Case_Cubo}(
          id VARCHAR(255) PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL,
          participation INT NOT NULL
        );
        `
      )
    } catch (error:any) {
      console.log(error.message)
    } finally{
      BaseDatabase.destroyConnection()
    }
  
  }
}

new Migrations().createTables();