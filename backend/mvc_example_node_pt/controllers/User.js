import {
    QueryListOfUsers,
    QueryUserById,
    DeleteUserById,
} from "../service/UserTable.js";

export const GetAllUsers = (req, res) => {
    const userList = QueryListOfUsers();
    return res.json(userList)
}

export const GetUser = (req, res) => {
    const userId = req.params.id;
    const user = QueryUserById(userId);
    return res.json(user)
}

export const DeleteUser = (req, res) => {
    const userId = req.params.id;
    const user = DeleteUserById(userId);
    return res.json(user)
}

export const UpdateUser =  (req, res) => {}
