import react from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Flatlist} from 'react-native'

export default function FlatlistDemo(){
    const listData = [
        {name:'cake1', price:99},
        {name:'cake2', price:999},
        {name:'cake3', price:9999},
        {name:'cake4', price:99999},
    ]
    const renderFlatListItem = (listData) =>{
        return(
            <View>
                <Text>{listData.item.name}</Text>
                <Text>{listData.item.price}฿</Text>
            </View>
        )
    }

return(
    <View style={styles.container}>
        <Text>รายการสินค้า</Text>.
        <Flatlist data={listData} renderItem={renderFlatListItem} keyExtractor={(item,index) => item+index}
        style={styles.flatlist} contentcontainerStyle        
        />
    </View>
    
)
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
    },
    flatlist:{
        marginTop: 10
    }
    
})