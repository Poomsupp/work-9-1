import React from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Alert, Image} from 'react-native'

export default function TabStackProduct({navigation}){

    let a = <Image source={require('./iphone.png')} style={styles.img} />
    let b = <Image source={require('./ipad.png.png')} style={styles.img} />
    let c = <Image source={require('./iwatch.png')} style={styles.img} />
    let d = <Image source={require('./ipadair.png')} style={styles.img} />

   const listData = [
        {name:'iphone15', price:48900,img:[a]},
        {name:'ipad', price:25900,img:[b]},
        {name:'iwatch', price:35900,img:[c]},
        {name:'ipad air', price:39900,img:[d]}
   ]
   const onPressItem = (item)  => { navigation.navigate("TabStackProductDetail", {
     name: item.name,
     price: item.price,
     img: item.img
   }
   )

}
   const renderFlatListItem = (listData) =>{
        return (
          <TouchableOpacity onPress={() => onPressItem(listData.item)}>
            <View key={listData.item.name} style={styles.flatListItem}>
                <Text style={styles.itemimg}>{listData.item.img}</Text>
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
        height:100,
        width:100,
        marginRight: 10
    }
})