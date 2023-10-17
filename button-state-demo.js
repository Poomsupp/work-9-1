import react from 'react'
import {View, Text, StyleSheet, Alert, Button} from 'react-native'

export default function ButtonStateDemo(){
    
    const t = 'จำนวนครั้งที่คลิก : '
    let [count, setCount] = react.useState(0)
    let [text, setText] = react.useState(t+count)


    const onPressButton1 = () => {
    const result = count+1
    setCount(result)
    setText(t+result)
    }
    const onPressButton2 = () => {
        const result = 0
    setCount(result)
    setText(t+result)
    }

return(
    <View style={styles.container}>
        <View style={styles.item}>
        <Button title="Click Here" color="violet" onPress={ onPressButton1 } />
        </View>
        <View>
            <Text>{text}</Text>
        </View>
        <View style={styles.item}>
        <Button title="Click Here" color="violet" onPress={ onPressButton2 } />
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginTop:50,
        alignItems:'center'
    },
    item:{
        width: 150,
        marginBottom:15
    }
})