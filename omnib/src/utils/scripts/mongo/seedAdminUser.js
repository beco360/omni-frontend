/**
 * RUN: node -r dotenv/config .\src\utils\scripts\mongo\seedAdminUser.js
 */

// const Permission = require('../../../db/models/Permission');
const Rol = require('../../../db/models/Rol');
const User = require('../../../db/models/User');
const UserData = require('../../../db/models/UserData');


const initDatabase = require('../../../db');
initDatabase();
(
    async function () {
        try {
            const rolAdmin = new Rol();
            rolAdmin.name = "Admin";
            await rolAdmin.save();
            console.log(rolAdmin);


            const userAdmin = new User();
            userAdmin.email = "santiagoemp01@gmail.com";
            userAdmin.password = "kb#j#!%FZCn$TpBmtR#9gKu4Gj$!Rk"
            userAdmin.rol = rolAdmin;
            await userAdmin.save();
            console.log(userAdmin);

            const userAdminData = new UserData();
            userAdminData.name = "Admin";
            userAdminData.user = userAdminData;
            await userAdminData.save();
            console.log(userAdminData);
        } catch (error) {
            console.log(error);
        }
    }
)();