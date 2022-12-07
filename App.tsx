import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log(Platform);
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View>
        <Text>Text here</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});
