import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { IUser } from '../../interfaces/user';

export const User = ({ user }: { user: IUser }) => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          source={{
            uri: user.avatar_url,
          }}
          style={styles.user__image}
        />
        <Text style={styles.user__name}>{user.login}</Text>
      </View>
      <Pressable>
        <Image
          source={require('../../../assets/baseline_arrow_right_alt_black_18.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  user: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
