import {DataTypes, Model} from "sequelize";
import Role from "./Role.js";
import Token from "./Token.js";

class User extends Model {}
  User.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
      role: {
            type: DataTypes.STRING,
            allowNull: false,
      },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
          default: new Date(),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }
  )

User.hasMany(
    Role,
    {
        foreignKey: {
            name: "id",
            allowNull: true,
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        }
)
User.hasOne(
    Token,
    {
        foreignKey: {
            name: "id",
            allowNull: true,
        },
onDelete: "CASCADE",
onUpdate: "CASCADE",
    }
)
User.sync({
    alter: true,
}).then(r => console.log('User table is created'));
export default User;