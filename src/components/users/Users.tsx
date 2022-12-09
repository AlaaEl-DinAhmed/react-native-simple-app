import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useUsers } from '../../hooks/Users';
import { IUser } from '../../interfaces/user';
import { User } from '../user/User';

export function Users() {
  const users = useUsers();
  const renderUsers: ListRenderItem<IUser> = ({ item }) => <User user={item} />;

  return <FlatList data={users.data} renderItem={renderUsers} />;
}
