import {View,Text,StyleSheet} from 'react-native';
export const Header = ({title})=>{

    return <View style={styles.headerContainer}>
        <Text style={styles.title}>
            {title||'APP HEADER'}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    headerContainer:{
    },
    title:{
        backgroundColor:'black',
        color:'white',
        fontSize:28,
        textAlign:'center',
        padding:10,
        marginBottom:5,
    }
})  