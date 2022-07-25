import { EventName } from "./eventName";
import { Operation } from "./operation";


/**
 * A discord payload sent via gateway
 */
export interface Payload {
    /**
     * The type of payload
     */
    op: Operation;
    /**
     * The event name of the operation
     */
    t?: EventName;
    /**
     * Number of the most recent response
     */
    s?: number;
    /**
     * The data of the payload
     */
    d?: any;
}