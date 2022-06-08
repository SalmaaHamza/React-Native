import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { AddTodo } from "./src/components/add-todo";
import { Header } from "./src/components/header";
import { TodoList } from "./src/components/todo-list";
import { useState} from 'react'

const App = () => {

  const [list,setList] = useState([]);

  const handleAddTodo = (todo)=>{
    setList([...list,todo])
  }

  return (
    <View style={{height:'100%'}}>
      <StatusBar hidden />
      <Header title={"TODO APP"} />
      <AddTodo onTodoAdd={handleAddTodo}/>
      <TodoList todos={list}/>
    </View>
  );
};

export default App;
