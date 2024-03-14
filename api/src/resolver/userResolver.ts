import UserModel from '../model/user';
import { AuthenticationError } from 'apollo-server-express';

export const user = async (_, { id }) => {
  return await UserModel.findById(id);
};

export const users = async () => {
  return await UserModel.find();
};

export const createUser = async (_, { username, password }, { user }) => {
  if (!user) {
    throw new AuthenticationError('You must be logged in to create a user');
  }

  const newUser = new UserModel({ username, password });
  return await newUser.save();
};

export const updateUser = async (_, { id, username, password }, { user }) => {
  if (!user) {
    throw new AuthenticationError('You must be logged in to update a user');
  }

  const existingUser = await UserModel.findById(id);
  if (!existingUser) {
    throw new Error('User not found');
  }

  if (username) existingUser.username = username;
  if (password) existingUser.password = password;

  return await existingUser.save();
};

export const deleteUser = async (_, { id }, { user }) => {
  if (!user) {
    throw new AuthenticationError('You must be logged in to delete a user');
  }

  const existingUser = await UserModel.findById(id);
  if (!existingUser) {
    throw new Error('User not found');
  }

  await UserModel.deleteOne({ _id: id });

  return { id };
};