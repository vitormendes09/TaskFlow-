import { string } from "zod";

export class User {

  private id?: number;
  private name: string;
  private email: string;
  private password: string;
  
  constructor(
     name: string,
     email: string,
     password: string
  ) {

   
    this.name = name;
    this.email = email;
    this.password = password;
   }

   get getName(): string{
      return this.name;
   }

   
   get getEmail() : string {
      return this.email
   }
   
   get getPassword(): string{
      return this.password
   }


   set Setname(newName: string) {
      if(newName.length < 3){
         throw new Error ("O nome deve ter no mínimo 3 caracteres");
      }

      this.name = newName;
   }


   set SetEmail(newEmail:string){

      this.email = newEmail;

   }

   set setPassword(newPassword:string){
      if(newPassword.length < 6 ){
         throw new Error ("Sua senha deve ter no mínimo 6 caractéres")
      }

      this.password = newPassword;
   }
}
