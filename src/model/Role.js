import {DataTypes, Model} from "sequelize";
import User from "./User.js";

class Role extends Model {}
    Role.define(
        "Role",
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
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                default: new Date(),
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
});
Role.belongsTo(
    User,
    {
        foreignKey: {
            name: "id",
            allowNull: true,
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }
);
Role.sync({
    alter: true,
}).then(r => console.log('Role table is created'));

export default Role;