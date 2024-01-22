import { StyleSheet, View} from 'react-native';
import ToDoList from './components/ToDoList.js';


export default function App() {
  console.log(ToDoList)
  return (
    <View style={styles.container}>
      <ToDoList tasks/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
