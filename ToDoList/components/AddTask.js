import React, { useState} from 'react';
import { StyleSheet, Button, View, Keyboard, TextInput } from 'react-native';
import 'react-native-get-random-values'

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    
    const handleAddTask = () => {
        if (title.trim() !== '') {
            onAddTask(title);
            setTitle('');
        }
    };
    
    return (
        <View style={styles.addTaskForm}>
            <TextInput 
                style={styles.input}
                placeholder='Enter your new task'
                value={title}
                onChangeText={(text) => setTitle(text)}
                returnKeyType='done'
                onSubmitEditing={Keyboard.dismiss}
            />
            <Button title="Add Todo" onPress={handleAddTask} style={styles.addBtn} />
        </View>
    );
};

const styles = StyleSheet.create({
    addTaskForm: {
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

export default AddTask;