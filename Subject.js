import React from "react";
import { StyleSheet, View, Text, Button } from "react-native"
import globalStyles from './global-styles';

export default function Subject({route, navigation}){
  let name = route.params.name || ''


    return(
        <View style={globalStyles.container}>
            <Text>{name}</Text>
        </View>
    )
}