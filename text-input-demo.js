import react from 'react'
import {View, Text, StyleSheet, Alert, Button, TextInput} from 'react-native'

export default function TextInputDemo(){
    
    let [inputName, setInputName] = react.useState('')
    let [inputEmail, setInputEmail] = react.useState('')
    let [inputPassword, setInputPassword] = react.useState('')
    let [inputMemo, setInputMemo] = react.useState('')

    const onPressButton1 = () => {
        let msg ='ขอบคุณครับ'
        if (inputName===''){
        msg = 'กรุณากำหนดชื่อของท่าน'
    } else if (inputEmail===''){
        msg = 'กรุณากำหนดอีเมล์'
    } else if (inputPassword===''){
        msg = 'กรุณากำหนดรหัสผ่าน'
    }
    Alert.alert(msg)
}
    

return(
    <View style={styles.container}>
        <View style={styles.item}>
        <Text>Name</Text>
        <TextInput style={styles.TextInput} defaultValue={inputName} 
        onChange={event => setInputName(event.nativeEvent.text)}
        /> 
        </View>
        <View style={styles.item}>
        <Text>Email</Text>
        <TextInput style={styles.TextInput} defaultValue={inputEmail}
        onChangeText={text => setInputEmail(text)}
        keyboardType='email-address' //number-pad, secureTextEntry(password)
        /> 
        </View>
        <View style={styles.item}>
        <Text>Password</Text>
        <TextInput style={styles.TextInput} defaultValue={inputPassword}
        onChangeText={text => setInputPassword(text)}
        secureTextEntry={true}//number-pad, secureTextEntry(password)
        /> 
        </View>
        <View style={styles.item}>
        <Text>Memo</Text>
        <TextInput style={[styles.TextInput, {height:64}]} defaultValue={inputMemo}
        onChangeText={text => setInputMemo(text)}
        multiline={true}
        numberOfLines={3}
        /> 
        </View>
        
        <View style={styles.item}>
        <Button title="ตรวจสอบข้อมูล" color="violet" onPress={ onPressButton1 } />
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
        marginBottom:15,
    },
    TextInput:{
        height: 32,
        width:300,
        borderWidth: 1,
        borderColor: 'blue',
        color: 'green',
        backgroundColor: 'white',
        marginTop:5,
        paddingTop:3,
        paddingBottom:3,
        
    }
})