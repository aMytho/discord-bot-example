/**
 * An event for a gateway payload
 */
export enum EventName {
    /**
     * Connection is ready
     */
    Ready = "READY",
    /**
     * Someone in a guild updated their status
     */
    GuildMemberUpdate = "GUILD_MEMBER_UPDATE",
    /**
     * A guild has been created or you are recieving the guild info for the first time
     */
    GuildCreate = "GUILD_CREATE",
    /**
     * A message has been created
     */
    MessageCreate = "MESSAGE_CREATE"
}