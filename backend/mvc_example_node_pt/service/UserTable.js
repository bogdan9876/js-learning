export const QueryUserById = (id) => {
    return User.FindById(id);
}

export const QueryListOfUsers = (condition) => {
    if (condition) {
        return User.findAll(condition).exec();
    }
    return User.findAll().exec();
}

export const DeleteUserById = (id) => {
    return User.remove({ _id: id }).exec();
}
