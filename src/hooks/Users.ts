import { GITHUB_API } from '@env';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '../interfaces/user';

const getUsers = async (): Promise<IUser[]> => {
  return await (await fetch(`${GITHUB_API}`)).json();
};

export const useUsers = () => {
  return useQuery(['users'], getUsers);
};
