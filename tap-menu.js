import react from "react";
import {View,Text} from "react-native";
import globalStyles from "./global-style";

export default function TabMenu({navigation}){
    return(
        <View style={globalStyles}>
            <Text style={{fontSize:18}}>Menu Screen</Text>
        </View>
    )
}