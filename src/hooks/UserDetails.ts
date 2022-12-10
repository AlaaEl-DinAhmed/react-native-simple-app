import { GITHUB_API } from '@env';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '../interfaces/user';

const getUserDetails = async (login: string): Promise<IUser> => {
  return await (await fetch(`${GITHUB_API}/${login}`)).json();
};

export const useUserDetails = (login: string) => {
  return useQuery(['userDetails', login], () => getUserDetails(login));
};
