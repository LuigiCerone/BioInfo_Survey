export class User{
  username: string;
  password: string;
  accessToken: string;
  role: string;
  patient: boolean;

  constructor(jwtResponse: any) {
    this.accessToken = jwtResponse.accessToken;
    this.username = jwtResponse.user.username;
    this.password = jwtResponse.user.password;
    this.role = jwtResponse.user.role;
    if (this.role !== 'DOCTOR'){
      this.patient = true;
    }
  }
}
