import { GITHUB_API } from '@env';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Props } from '../../interfaces/user';
import { User } from '../user/User';

export function Users() {
  const getUsers = async (): Promise<Props[]> => {
    return await (await fetch(`${GITHUB_API}`)).json();
  };

  const query = useQuery(['users'], getUsers);

  const renderUsers: ListRenderItem<Props> = ({ item }) => <User user={item} />;

  return <FlatList data={query.data} renderItem={renderUsers} />;
}