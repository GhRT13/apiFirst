import { UserController } from "./controller/user.controller";
import { BaseRouter } from "../shared/routers/router";
export class UserRouter extends BaseRouter<UserController>{
    constructor(){
        super(UserController);
    }
    routes(): void {
        this.router.get('/user', (req, res) => this.controller.getUsers(req, res));
    }
}