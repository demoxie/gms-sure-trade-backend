class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
    getUserById = async (id)=>{
    return this.userRepository.getUserById(id);
  }
    getUserByEmail = async (email)=>{
    return this.userRepository.getUserByEmail(email);
    }
    createUser = async (user)=>{
    return this.userRepository.createUser(user);
    }
    updateUser = async (user)=>{
    return this.userRepository.updateUser(user);
    }
    deleteUser = async (id)=>{
    return this.userRepository.deleteUser(id);
    }
    getAllUsers = async ()=>{
    return this.userRepository.getAllUsers();
    }
    login = async (email, password)=>{
    return this.userRepository.login(email, password);
    }
    logout = async (id)=>{
    return this.userRepository.logout(id);
    }
}
export default UserService;