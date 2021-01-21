export class User {
    id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: String;
  collectionValue: number

  constructor(id: number = 0, username: string = '',
              password: string = '', firstname: string = '',
              lastname: string = '', phonenumber: string = '',
              email: string = '', collectionValue: number = 0) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.phonenumber = phonenumber;
    this.email = email;
    this.collectionValue = collectionValue;
  }

}
