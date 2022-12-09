import { Link } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IUser } from '../../interfaces/user';

export const User = ({ user }: { user: IUser }) => {
  return (
    <Link
      to={{ screen: 'UserDetails', params: { id: user.id } }}
      style={styles.container}
    >
      <View style={styles.user}>
        <Image
          source={{
            uri: user.avatar_url,
          }}
          style={styles.user__image}
        />
        <Text style={styles.user__name}>{user.login}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderBottomColor: '#dad6d6',
    borderBottomWidth: 1,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },
  user__image: {
    width: 65,
    height: 65,
  },
  user__name: {
    fontSize: 16,
    marginStart: 15,
  },
});
