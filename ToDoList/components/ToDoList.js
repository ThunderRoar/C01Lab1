import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";

const ToDoList = ({ initialList }) => {
    const [tasks, setTasks] = useState(
        initialList.map((task) => ({
            id: uuidv4(),
            title: task,
        }))
    );

    const addToDo = (newTitle) => {
        setTasks((prevToDoList) => [ ...prevToDoList, { id: uuidv4(), title: newTitle } ]);
    };

    const removeToDo = (id) => {
        setTasks((prevToDoList) => prevToDoList.filter((task) => task.id !== id));
    };

    return (
        <View style={styles.todoListForm}>
            {tasks.map((task) => (
                <View key={task.id} style={styles.todoItem}>
                    <Text style={styles.text}>{task.title}</Text>
                    <TouchableOpacity onPress={() => removeToDo(task.id)}>
                        <Text style={styles.buttonText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

// Setting the initial value if not explicity provided
ToDoList.defaultProps = {
    initialList: [],
};

const styles = StyleSheet.create({
    todoListForm: {
        margin: 10,
        width: 300
    },
    todoItem: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
    },
    text: {
        marginRight: 20,
        width: 200
    },
    buttonText: {
        color: 'rgb(72, 157, 255)'
    }
});

export default ToDoList;
