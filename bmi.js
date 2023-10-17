import react from 'react'
import {View, Text, StyleSheet, Image, Button, TextInput} from 'react-native'

export default function Bmi(){
    
    let [inputNum1, setInputNum1] = react.useState(0)
    let [inputNum2, setInputNum2] = react.useState(0)
    let [score,setScore] = react.useState(0)
    let [grade,setGrade] = react.useState(0)
    let [img,setImg] = react.useState(require('./p7.jpg'))
    const onPressButton1 = () => {
        let a=parseInt(inputNum1)
        let b=parseInt(inputNum2)
        let image=''
        let c=b/100
        let d=c*c
        let f=a/d
        if (f<=18.50){ 
            msg = 'น้ำหนักน้อย / ผอม'
            image= require('./p5.jpg')
        } else if (f>=18.50 && f<=22.90){ 
            msg = 'ปกติ (สุขภาพดี)'
            image= require('./p3.jpg')
        } else if (f>=23 && f<=24.90){ 
            msg = 'ท้วม / โรคอ้วนระดับ 1'
            image= require('./p2.jpg')
        } else if (f>=25 && f<=29.90){ 
            msg = 'อ้วน / โรคอ้วนระดับ 2'
            image= require('./p4.png')
        }else{ 
            msg = 'อ้วนมาก / โรคอ้วนระดับ 3'
            image= require('./p6.jpg')
        } 
        setScore(f.toFixed(2))
        setGrade(msg)
        setImg(image)
    }
return(
    <View style={styles.container}>
        <View>
            <Text>BMI Calculator App</Text>
        </View>
        <View style={styles.item}>
            <Text>นํ้าหนัก</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum1} 
        onChange={event => setInputNum1(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>
        <View style={styles.item}>
            <Text>ส่วนสูง</Text>
        <TextInput style={styles.TextInput} defaultValue={inputNum2} 
        onChange={event => setInputNum2(event.nativeEvent.text)}
        keyboardType='number-pad'
        /> 
        </View>

        <View>
            <Text>BMI :{score}</Text>
            <Text>อยู่ในเกณท์ :{grade}</Text>
            <Image source={img} style={styles.img} />
        </View>
        
        <View style={styles.item}>
        <Button title="คำนวณ" color="violet" onPress={ onPressButton1 } />
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
    },
    img:{
      width: 300,
      height: 300,
      borderWidth: 1,
      borderColor: 'red',
      marginBottom: 15,
    }
})