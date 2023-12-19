
import { Response } from "express";
import { redis } from "../utils/redis";
import userModel from "../models/user.model";

//GET user by id
export const getUserById = async (id: string, res: Response) => {
  const userJson = await redis.get(id);

  if (userJson) {
    const user = JSON.parse(userJson);
    res.status(201).json({
      success: true,
      user,
    });
  }
};

//Get All UsersService
export const getAllUsersService = async (res: Response) => {
  const users = await userModel.find().sort({ createdAt: -1 });

  res.status(201).json({
    success: true,
    users,
  });
};

//Update user role 
export const updateUserRoleService = async (res:Response, id: String, role: string) => {
  const user = await userModel.findByIdAndUpdate(id,{role},{new: true});

  res.status(201).json({
    success: true,
    user,
  });
}