import React from 'react';
import { View, Text, Image } from 'react-native';

function Bicycle () {
    const city = "south west";
    const peoples = [{name: "Frila", fams: "Sister"}, {name: "Emanuel", fams: "Brother"}]
    return (
        <View style={{marginLeft: 10, marginTop: 70}}>
            <Text>Hi, i'm a bicycle </Text>
            <TakeARide peoples={peoples} />
            {Place2Go (city)}
        <View>
            <Text>Sepeda Gunung</Text>
            <Image source={{uri: "https://trexsporting.com/images/products/187-o_oPoPoG3u.png" }} style={{ width: 200, height: 200 }} />
        </View>

        <View>
            <Text>Sepeda Lipat</Text>
            <Image source={{uri: "https://sgp1.digitaloceanspaces.com/radarbogor/2020/09/660736723p.jpg" }} style={{ width: 200, height: 200 }} />
        </View>

        </View>
    );
}

export default Bicycle;

const TakeARide = ({peoples}) => {
    return (
        <View>
            <Text>Let's go ridding with us:</Text>
            {peoples.map ((v, index)=>(
                <View key={index}>
                    <Text>{v.name} / my {v.fams} </Text>
                </View>
            ))}
        </View>
    )
};
function Place2Go(value) {
    return <Text>We'r going to {value} west now, come on.</Text>;
}
