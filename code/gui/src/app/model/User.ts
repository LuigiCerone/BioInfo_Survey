export class User{
  username: string;
  password: string;
  accessToken: string;
  role: string;

  constructor(jwtResponse: any){
    this.accessToken = jwtResponse.accessToken;
    this.username = jwtResponse.user.username;
    this.password = jwtResponse.user.password;
    this.role = jwtResponse.user.role;
  }
}
