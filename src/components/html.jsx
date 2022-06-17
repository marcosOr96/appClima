import React from 'react';
import {Text, View, TouchableNativeFeedback, Alert}  from 'react-native';

const Main = () => {
    return (
        <View>
            <View>
                <TouchableNativeFeedback 
                onPress={() => Alert.alert('Hemos tocado el texto')}>
                    <Text>Otra Aplicacion</Text>
                </TouchableNativeFeedback>
            </View>
            <View>
            <TouchableNativeFeedback 
                onPress={() => Alert.alert('Hemos tocado el otro texto')}>
                    <Text> Nueva aplicacion</Text>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
}

export default Main;