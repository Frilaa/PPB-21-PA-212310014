import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { ItemTypograp } from './ItemTypograp';
import { ImageItem } from './ImageItem';

class Nomor2 extends Component {
    render() {
        return (
            <View style={{flex : 1 , alignItems : 'center', justifyContent: 'center'}}>

            <ItemTypograp />
            <ImageItem />

            </View>
          
        );
    }
}

export default Nomor2;