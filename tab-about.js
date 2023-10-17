import react from "react";
import {View,Text,StyleSheet,Image,ScrollView} from "react-native";
import globalStyles from "./global-style";

export default function TabAbout({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={{fontSize:18}}>About Screen</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent} style={{alignItems: 'center'}} horizontal={false}>
            <Image source={require('./c62590c1756680060e7c38011cd704b5.jpg')} style={styles.img}></Image>
            <Text style={styles.text}>
            GigaChad is a meme and recurring character, emerging since 2017, showcasing what is considered to be the model of idealized hypermasculinity. The term became popular in a lot of incel (involuntary celibate) communities. It is uknown if GigaChad is based on Russian model Ernest Khalimov, or was created by Krista Sudmalis. The image is mostly used in Virgin versus Chad memes, to show the Chad in the situation. There is another version that has the same lighting, but more overweight/underweight to show the virgin in the situation. The music used is called "Can You Feel My Heart"
            </Text>
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
    fontSize: 16,
  },
  img: {
    width: 200,
    height: 200,
    alignItems: 'center'
  }
})