import User from "../model/User.js";

class UserController {
  constructor() {
    this.userModel = User;
  }

  getAllUsers = async (req, res, next) => {
    try {
      const users = await this.userModel.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };

  getUserById = async (req, res, next) => {
    try {
      const user = await this.userModel.getUserById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req, res, next) => {
    try {
      const user = await this.userModel.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };

  updateUser = async (req, res, next) => {
    try {
      const user = await this.userModel.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      const user = await this.userModel.deleteUser(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const user = await this.userModel.login(req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  logout = async (req, res, next) => {
    try {
      const user = await this.userModel.logout(req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  refresh = async (req, res, next) => {
    try {
      const user = await this.userModel.refresh(req.body);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}
export default UserController;