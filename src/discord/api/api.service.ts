import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import axios from "axios"

@Injectable()
export class ApiService {

    private url = `https://discord.com/api/v10`


    constructor(private authService: AuthService) {

    }

    async sendMessage(message: string, ID: string) {
        try {
            let request = await axios.post(`${this.url}/channels/${ID}/messages`, {
                content: message
            }, {
                headers: {
                    Authorization: `Bot ${this.authService.getToken()}`,
                    "User-Agent": `UdemyBot http://localhost:3000, 0.0.0`
                }
            });
    
            console.log(request.data);
        } catch(e) {
            console.log(e);
            console.log("ERROR ABOVE")
        }

    }
}
