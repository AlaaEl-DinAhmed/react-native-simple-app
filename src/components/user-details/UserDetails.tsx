import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Linking,
  Text,
  View,
} from 'react-native';
import { useUserDetails } from '../../hooks/UserDetails';
export const UserDetails = ({ route }: any) => {
  const { login } = route.params;
  const user = useUserDetails(login);
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(user.data?.html_url || '');
    if (supported) {
      await Linking.openURL(user.data?.html_url || '');
    } else {
      Alert.alert(`Don't know how to open this URL: ${user.data?.html_url}`);
    }
  }, [user.data?.html_url]);
  return (
    <>
      {user.isLoading ? (
        <ActivityIndicator size="large" color="#171515" />
      ) : (
        <View>
          <Image
            source={{
              uri: user.data?.avatar_url,
              width: 60,
              height: 60,
            }}
          />
          <Text>{user.data?.name}</Text>
          <Text onPress={handlePress}>{user.data?.html_url}</Text>
        </View>
      )}
    </>
  );
};
