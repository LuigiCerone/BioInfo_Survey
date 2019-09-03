import * as jwt_decode from 'jwt-decode';

export class User {
  username: string;
  password: string;
  accessToken: string;
  role: string;
  patient: boolean;

  constructor(jwtResponse: any) {
    this.accessToken = jwtResponse.accessToken;

    const decode = jwt_decode(this.accessToken);

    console.log(decode);

    this.username = decode.username;
    this.role = decode.role[0].authority;
    if (this.role !== 'ROLE_DOCTOR') {
      this.patient = true;
    }
  }
}
