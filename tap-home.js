import react from "react";
import {View,Text,StyleSheet,ScrollView,Image} from "react-native";
import globalStyles from "./global-style";

export default function TabHome({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={{fontSize:18}}>GET FUMO BEECH</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent} style={{alignItems: 'center'}} horizontal={false}>
            <Text style={styles.text}>GiGaChad info Application</Text>
            <Image source={require('./45ac655ac667f5480339deaa638d762b.jpg')} style={styles.img}></Image>
            </ScrollView>
            
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:50
  },
  scrollViewContent: {
    margin: 5,
    padding:20,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: 'red'
  },
  img: {
    width: 300,
    height: 350,
    alignItems: 'center'
  }
})