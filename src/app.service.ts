import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return 'Hello Udemy!';
  }

  getToken() {
    let token = this.configService.get("token");
    if (token) {
      console.log(`The token is ${token}`);
    } else {
      console.log("No token was found. Get one from the developer site!")
    }
    return `Check the console for the token value!`
  }
}