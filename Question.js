import react from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Question(){
    return(
        <View>
            <Text style={T.Text}>Question</Text>
        </View>
    )
}

const T = StyleSheet.create({
    Text:{
        textAlign:'center',
        fontSize:20,
        marginTop:30
    }
})