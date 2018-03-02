export class User{
    public _id:string;
    public username: string
    public password: string
    public token: string;

  constructor(username:string,password:string)
  {
    this.username = username;
    this.password = password;
  }
}
