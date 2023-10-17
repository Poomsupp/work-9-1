import react from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Image() {
    const items = ['image']
    return(
        <View style={styles.container}>
            {items.map((item, i) => {
                return(
                    <View style={styles.item}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                )
            }
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop:0,
        padding:5
    },
    item:{
        height:300,
        width:300,
        backgroundColor: '#40E0D0',
        marginButtom:0,
        //paddingLeft:10,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})