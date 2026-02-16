export class User {
  email: string;
  password_hash: string;
  username: string;
  constructor(email: string, password_hash: string, username: string) {
    this.email = email;
    this.password_hash = password_hash;
    this.username = username;
  }
}
