import React from "react"
import {useState, TextInput, Button} from "react"
import {StyleSheet} from "react-native"


const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
}); 

function AddTask()
{
    [title, setTitle] = useState("")
    return(
        <View style={styles.addTodoForm}>
            <TextInput style={styles.input} value={title} onChangeText={setTitle(e.value)}></TextInput>
            <Button onPress={props.onAddTask(title)}>Add</Button>
        </View>
    )
}

export default AddTask