import react from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function LayoutItem() {
    const items = ['A', 'B', 'C', 'D',]
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
        marginTop:-10,
        padding:5
    },
    item:{
        height:140,
        width:140,
        backgroundColor: 'violet',
        marginButtom:5,
        //paddingLeft:10,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
    },
    text: {
        color: 'black',
        fontSize: 20
    }
})