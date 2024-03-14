
import UserModel from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-express";

const signup = async (_: any, args: any) => {
    const { username, password } = args;
    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ username, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ userId: user.id }, "the key", { expiresIn: "1h" });

    return { token, user };
};

const login = async (_: any, args: any) => {
    const { username, password } = args;
    const user = await UserModel.findOne({ username });

    if (!user) {
        throw new AuthenticationError("Invalid credentials");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
        throw new AuthenticationError("Invalid credentials");
    }

    const token = jwt.sign({ id: user.id, username: user.username }, "the key");

    return { token, user };
};

export default { signup, login };