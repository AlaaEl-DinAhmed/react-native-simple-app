import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IUser } from '../../interfaces/user';

export const User = ({ user }: { user: IUser }) => {
  return (
    <View style={styles.user}>
      <Image
        source={{
          uri: user.avatar_url,
        }}
        style={styles.user__image}
      />
      <Text style={styles.user__name}>{user.login}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user__image: {
    width: 100,
    height: 100,
  },
  user__name: {
    fontSize: 20,
    marginStart: 20,
  },
});
