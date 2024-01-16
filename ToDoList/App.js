import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODO LIST</Text>
      <ToDoList initialList={[]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 'fill',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '700'
  }
});
