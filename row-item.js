import react from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function RowItem() {
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop:50,
        padding:5
    },
    item:{
        height:100,
        width:100,
        backgroundColor: 'violet',
        marginButtom:15,
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