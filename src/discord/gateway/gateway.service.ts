import { Injectable } from '@nestjs/common';
import * as WebSocket from "ws";
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class GatewayService {

    private ws = new WebSocket("wss://gateway.discord.gg?v=10&encoding=json");

    constructor(
        private authService: AuthService,
        private apiService: ApiService
        ) {
        this.ws.on("open", () => {
            this.onOpen();
            setTimeout(() => {
                // Uncomment to send a bot start message
                //this.apiService.sendMessage("I have arrived, hello world!", "979089096175673399")
            }, 5000);
        });

        this.ws.on("message", (data) => {
            this.onMessage(data.toString())
        });

        this.ws.on("error", (err) => {
            this.onError(err);
        });

        this.ws.on("close", (code, reason) => {
            this.onClose(code, reason);
        });
    }

    onOpen() {
        console.log("Connection opened!");

        setInterval(() => {
            this.heartBeat();
        }, 41250)
    }

    heartBeat() {
        this.ws.send(JSON.stringify({
            d: null,
            op: 1
        }));

        console.log("Send heartbeat!");
    }

    identifyBot() {
        this.ws.send(JSON.stringify({
            op: 2,
            d: {
                token: this.authService.getToken(),
                intents: 33281,
                properties: {
                    os: "linux",
                    browser: "none",
                    device: "none"
                }
            }
        }))
    }

    onMessage(data: string) {
        console.log("Got a message through the connection! Message below!");
        let parsedData = JSON.parse(data);
        console.log(parsedData);

        switch(parsedData.op) {
            case 10:
                this.identifyBot()
            break;

            case 11:
                console.log("Heartbeat recieved!");
                break;
            
            default:
                try {
                    console.log(parsedData.d.channels)
                } catch(e) {

                }
        }
    }

    onError(err: Error) {
        console.log("Connection had an error!");
        console.log(err);
    }

    onClose(code, reason) {
        console.log(`Connection closed. Reason: ${reason.toJSON()}. Code: ${code}`);
        console.log(reason, code);
    }
}