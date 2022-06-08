import Checkbox from "expo-checkbox";
import { View, Text, ScrollView, FlatList } from "react-native";
import { listStyles  as styles} from "../../styles";

export const TodoList = ({todos}) => {
 
  return (
    <FlatList
    style={styles.listContainer}
      data={todos}
      renderItem={({ item }) => {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.doneContainer}>
            <Text >
                Done
            </Text>
            <Checkbox value={item.done} />
            </View>
          </View>
        );
      }}
      keyExtractor={(item, index) => `${item.id}${index}`}
      ListHeaderComponent={() => <Text style={styles.listHeader}>TODOS</Text>}
      ItemSeparatorComponent={() => (
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 3,
            margin: 2,
          }}
        ></View>
      )}
      ListEmptyComponent={()=>(<Text>please add todo!</Text>)}
    />
  );
};
