/**
 * The opcode for a gateway payload
 */
export enum Operation {
    /**
     * An event was dispatched
     */
    Dispatch = 0,
    /**
     * Heartbeat (send)
     */
    Heartbeat = 1,
    /**
     * Identify yourself to discord. Starts a session (send)
     */
    Identify = 2,
    /**
     * Update a users's presence (send)
     */
    Presence = 3,
    /**
     * voice state. Join/leave/move in voice channels (send)
     */
    Voice = 4,
    /**
     * Resume a previous session (send)
     */
    Resume = 6,
    /**
     * Discord says we should reconnect NOW
     */
    Reconnect = 7,
    /**
     * Request guild members. Offline in large guild (send)
     */
    Request = 8,
    /**
     * Session has been invalidated. You should reconnect and resume
     */
    Invalid = 9,
    /**
     * Sent after connecting to Discord
     */
    Hello = 10,
    /**
     * Sent when a heartbeat is recieved
     */
    HeartbeatACK = 11
}