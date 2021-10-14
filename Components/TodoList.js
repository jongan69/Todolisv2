import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const TodoList = () => {
    const [title, setTitle] = useState('Todo List')
    return (
        < View> 
            <Text>{title}</Text>
            <Button title='change me'onPress={() => setTitle('My list')}/>
        </View>
    )
}

export default TodoList;