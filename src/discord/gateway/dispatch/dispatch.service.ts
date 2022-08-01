import { Injectable, Logger } from '@nestjs/common';
import { EventName } from '../eventName';
import { Payload } from '../payload';

@Injectable()
export class DispatchService {
    private readonly logger = new Logger(DispatchService.name);

    handleDispatch(payload: Payload) {
        switch(payload.t) {
            case EventName.Ready:
                this.logger.log("Discord is ready!");
                break;
            case EventName.MessageCreate:
                this.logger.log(`${payload.d.author.username}: ${payload.d.content}`);
                break;
            case EventName.GuildMemberUpdate:
                this.logger.log("A guild member was updated");
                break;
            case EventName.GuildCreate:
                this.logger.log("A guild was created!");
            break;
            default:
                break;
        }
    }
}
