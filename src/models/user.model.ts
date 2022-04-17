import Role from "./role.model";

export default class User {
    // create fields from prisma model
    constructor(
        public id: number | undefined = undefined,
        public username: string,
        public password: string,
        public name: string,
        public surname: string,
        public role: Role = Role.USER
    ) {}
}
