import { express } from "express";
const router = express.Router();

import {
    GetAllUsers,
    GetUser,
    UpdateUser,
    DeleteUser
} from "../controllers/User"

router.get("/all", GetAllUsers);
router.get("/byId/:id", GetUser);
router.put("/", UpdateUser);
router.delete("/:id", DeleteUser);

export { router as userRoute }
