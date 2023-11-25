import { StyleSheet, View, StatusBar } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
});
