import {DataTypes} from "sequelize";
import User from "./User.js";

class Token extends Model {}
    Token.define(
        "Token",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            token: {
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
    );
Token.belongsTo(
    User,
    {
        foreignKey: {
            name: "id",
            allowNull: true,
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
Token.sync({
    alter: true,
}).then(r => console.log('Token table is created'));

export default Token;