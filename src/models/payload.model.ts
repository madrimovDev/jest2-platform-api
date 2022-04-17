import Role from "./role.model";

export type Payload = {
    username: string,
    userId: number,
    role: Role
}