import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
    /**
     * Our discord bot token
     */
    private token: string;

    constructor(private configService: ConfigService) {
        this.onRun();
    }

    /**
     * Loads our token into our service
     */
    onRun() {
        this.token = this.configService.get("token") || "";
        if (this.token != "") {
            console.log(`The token is ${this.token}`);
        } else {
            console.log(`No token was found! Please input one in an .env file.`)
        }
    }

    /**
     * Returns our token
     */
    getToken(): string {
        return this.token;
    }
}
