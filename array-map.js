import react from 'react'
import {View, Text} from 'react-native'

export default function ArrayMap(){
    const cars = ['Toyota', 'Nissan', 'GTR']
    return(
        <View>
            <Text>การแสดงข้อมูลใน Array ด้วยเมธอด Map </Text>
            {cars.map(list => {
                return(
                    <View>
                        <Text>{list}</Text>
                    </View>
                )
            })}
        </View>
    )
}