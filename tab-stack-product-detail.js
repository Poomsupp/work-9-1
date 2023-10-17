import React from "react";
import { StyleSheet, View, Text, Button } from "react-native"
import globalStyles from './global-styles';

export default function TabStackProductDetail({route, navigation}){
  let name = route.params.name || ''
  let price = route.params.price || ''
  let img = route.params.img || ''


    return(
        <View style={globalStyles.container}>
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Text>{img}</Text>
        </View>
    )
}