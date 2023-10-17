import React from "react";
import { StyleSheet, View, Text, Button } from "react-native"
import globalStyles from './global-styles';

export default function Home({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text>Home Screen</Text>
            <Button title="go to About"
            onPress={() => navigation.navigate("About")}
            />
            <Button title="ข้อมูลนักศึกษาคนที่ 1"
            onPress={() => navigation.navigate("Contact", {
                id: 12356789,
                name:'Poomsup Karnnithi',
                married: true,
                phone:['087777777','089999999'],
                education: {
                    bachelorsDegree:'Information System',
                    masterDegree: 'IT'
                }
            })}
            />
        </View>
    )
}