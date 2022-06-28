export enum UserRole{
   normal = "normal",
   admin = "admin"
}

export class User {
  constructor(
     public id: string,
     public email: string,
     public password: string,
     public role: UserRole
  ) {}

}

export interface AuthenticatorData {
   id:string,
   role: UserRole
}