import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export function User() {
  return (
    <View style={styles.user}>
      <Image
        source={{
          uri: 'https://github.githubassets.com/images/modules/open_graph/github-mark.png',
        }}
        style={styles.user__image}
      />
      <Text style={styles.user__name}>User</Text>
    </View>
  );
}

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
