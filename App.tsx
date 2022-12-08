import { NavigationContainer } from '@react-navigation/native';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.droidSafeArea}>
        <View>
          <Text>Text here</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});
