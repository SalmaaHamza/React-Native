import { View, Text, TextInput, TouchableOpacity,NativeModules,LayoutAnimation } from "react-native";
import { addTodoStyles as styles } from "../../styles";
import { useState } from "react";
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
  let counter = 1;
export const AddTodo = ({onTodoAdd}) => {
  const [focused, setFocused] = useState(false);
  const [title,setTitle] = useState('')
  const handleChangeText = (text)=>{
      setTitle(text)
  }
  const handleAddTodo = ()=>{
      const todo = {
          id:counter++,
          title,
          done:false
      }
      title&&onTodoAdd(todo);
      console.log(todo)
  }
  return (
    <View style={styles.container}>
      <TextInput
        onFocus={() => {
            LayoutAnimation.spring()
          setFocused(true);
        }}
        onBlur={() => {
            LayoutAnimation.linear()

          setFocused(false);
        }}
        value={title}
        onChangeText={handleChangeText}
        style={{ ...styles.input, ...(focused ? styles.inputFocused : {}) }}
        placeholder="enter todo title ..."
      />
      <TouchableOpacity style={styles.btnContainer} onPress={handleAddTodo}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
