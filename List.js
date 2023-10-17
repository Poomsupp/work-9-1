import React from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Alert, Image} from 'react-native'

export default function List({navigation}){
   const listData = [
        {name:'iphone15', price:48900},
        {name:'ipad', price:25900},
        {name:'iwatch', price:35900},
        {name:'ipad air', price:39900}
   ]
   const onPressItem = (item)  => { navigation.navigate("Subject", {
     name: item.name
   }
   )

}
   const renderFlatListItem = (listData) =>{
        return (
          <TouchableOpacity onPress={() => onPressItem(listData.item)}>
            <View key={listData.item.name} style={styles.flatListItem}>
                <Image style={styles.img} source={require('./home.png')} />
                <Text style={styles.itemName}>{listData.item.name}</Text>
                <Text style={styles.itemPrice}>{listData.item.price}฿</Text>
            </View>
            </TouchableOpacity>
        )
       
   }
    return(
        <View style={styles.container}>
           <Text style={{alignSelf:'center', fontSize:20}}>รายการสินค้า</Text>
           <FlatList data={listData} 
           renderItem={renderFlatListItem}
           keyExtractor={(item, index) => item+index}
           style={styles.flatList}
           contentContainerStyle={styles.flatListContent}
           numColumns={2}
           />
        </View>      
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:50,
    },
    flatList: {
        marginTop: 10
    },
    flatListContent: {
        margin: 10,
        paddingBottom:50,
        alignItems: 'center'
    },
    flatListItem:{
        width: 150,
        flexDirection: 'column',
        justifyContent:'space-between',
        backgroundColor: '#cde',
        margin: 10,
        padding:10
    },
    itemName:{
        fontSize: 18, fontWeight:'bold'
    },
    itemPrice:{
        fontSize: 16, color: 'gray'
    },
    img:{
        height:40,
        width:40,
        marginRight: 10
    }
})