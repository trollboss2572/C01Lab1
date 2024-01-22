import React from "react";
import {View, Text, Button, useState} from "react"
import {StyleSheet} from "react-native"
import AddTask from "./AddTask.js"

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});


const ToDoList = (tasks = []) => {
    const [toDos, setToDos] = useState(
        tasks.map((title, i) => ({ id: i, title: title } ))
      );
    const [id, setID] = useState(toDos.length)
    const addToDo = function(title)
    {
        insArr = ToDos
        insArr.push({id: id, title: title})
        setToDos(insArr)
        setID(id + 1)
    }
    const removeToDo = function(id)
    {
        setToDos(array.filter((element) => element.id !== id))
    }
    return(
        <View style={styles.todoListContainer}>
            {
                toDos.map((toDo) =>
                {
                    <View style={styles.todoItem} id={`Task${toDo.id}`}>
                        <Text>{toDo.title}</Text>
                        <Button onClick={removeToDo(toDo.id)}>Remove</Button>
                    </View>
                })
            }
            <AddTask onAddTask={addToDo}></AddTask>
        </View>
    )
}

export default ToDoList