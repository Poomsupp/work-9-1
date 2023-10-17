import react from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function ColumnItem() {
    const items = ['one', 'two', 'three', 'four', 'five']
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
        flexDirection: 'column',
        marginTop:50,
        padding:10
    },
    item:{
        height:60,
        backgroundColor: 'violet',
        marginButtom:15,
        paddingLeft:10,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})