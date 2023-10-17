import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import {Ionicons} from 'react-native-vector-icons';
import TabHome from './tap-home';
import TabStackProduct from './tab-stack-product';
import TabStackProductDetail from './tab-stack-product-detail'
import TabMenu from './tap-menu';
import TabUser from './tab-user'
import TabAbout from './tab-about'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function App() {
  const ProductStack = () => {
  const Stack = createStackNavigator()
  return (
      
        <Stack.Navigator initialRouteName='List'>
          <Stack.Screen name="TabStackProduct" component={TabStackProduct}
          options={{headerTitle: 'หน้าแรก', headerBackTitle:''}}
          />
          <Stack.Screen name="TabStackProductDetail" component={TabStackProductDetail}
          options={{headerTitle: 'รายละเอียดสินค้า', headerBackTitle:''}}
          />

        </Stack.Navigator>
      
  )
}

    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
          <Tab.Navigator tabBarOptions={{
            labelStyle: {fontSize: 18},//ขนาดตัวอักษร(บนปุ่ม)
            showLabel: true,//เเสดงข้อความหรือไม่เเสดงข้อความ
            inactiveTintColor: 'blue',//สีข้อความเเละไอคอนในสถานะปกติ
            activeTintColor: 'red',//สีข้อความเเละไอคอนในสถานะที่เลือกอยู่
          }}>
            <Tab.Screen name="TabHome" component={TabHome} options={{
              tabBarLabel:'หน้าเเรก', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="md-home"size={18} color={color}/>
              }
            }}/>
            <Tab.Screen name="TabProduct" component={ProductStack} options={{
              tabBarLabel:'สินค้า', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="cart"size={18} color={color}/>
              }
            }}/>
            <Tab.Screen name="TabUser" component={TabUser} options={{
              tabBarLabel:'ผู้ใช้', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <AntDesign name="user" size={24} color="blue"/>
              }
            }}/>
            <Tab.Screen name="TabAbout" component={TabAbout} options={{
              tabBarLabel:'เกี่ยวกับ', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Entypo name="info" size={24} color="blue"/>
              }
            }}/>
            <Tab.Screen name="TabMenu" component={TabMenu} options={{
              tabBarLabel:'เมนู', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="help"size={18} color={color}/>
              }
            }}/>
          </Tab.Navigator>
        </NavigationContainer>
  )
}
