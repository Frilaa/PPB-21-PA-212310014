import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

export class Car extends Component {
    constructor(props) {
        super(props);
        this.Come2Go = this.Come2Go.bind(this);
        this.state = {
            merek: "Toyota",
            types: {type: "Matic", model: "Calya ADS"},
        };
    }

    Come2Go(value) {
        return (
            <View style={{marginLeft: 10}}>
                <Text>Let's go running away from duty</Text>
                <Text>with us only {value} IDR</Text>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
            <View style={{marginTop: 70, marginLeft: 10}}>
                <Text>Hi, i'm a car</Text>
                <Text>Merek: {this.state.merek}</Text>
                <Text>Type: {this.state.types.type}</Text>
                <Text>Model: {this.state.types.model}</Text>
            </View>
            {this.Come2Go(200000)}
            </ScrollView>
        );
    }
}

export default Car;