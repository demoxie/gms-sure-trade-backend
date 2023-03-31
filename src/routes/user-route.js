import express from "express";
import UserController from "../controller/user-controller.js";

class UserRoute {
  constructor() {
    this.router = express.Router();
    this.userController = new UserController();
  }

  routes = async ()=>{
    this.router.get('/', this.userController.getAllUsers);
    this.router.get('/:id', this.userController.getUserById);
    this.router.post('/', this.userController.createUser);
    this.router.put('/:id', this.userController.updateUser);
    this.router.delete('/:id', this.userController.deleteUser);
    this.router.post('/login', this.userController.login);
    this.router.post('/logout', this.userController.logout);
    this.router.post('/refresh', this.userController.refresh);
    return this.router;
  }
}
export default UserRoute;