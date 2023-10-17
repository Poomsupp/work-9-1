import React from "react";
import { StyleSheet, View, Text, Button } from "react-native"
import globalStyles from './global-styles';

export default function Contact({route, navigation}){
    let id =route.params.id || 0
    let name =route.params.name || ''
    let phone = ''
    if(route.params.phone){
        phone = route.params.phone.join(', ')
    }
    let bdg='', mdg=''
    if(route.params.education){
        bdg=route.params.education.bachelorDegree || ''
        mdg=route.params.education.masterDegree || ''
    }
    let info = `
        Detail: ${'\n'}
        id: ${id}
        name: ${name}
        married: ${route.params.married || false}
        phone: ${phone}
        bachelor's degree: ${bdg}
        master's degre: ${mdg}
    `
    return(
        <View style={globalStyles.container}>
            <Text>{info}</Text>
            
            
        </View>
    )
}