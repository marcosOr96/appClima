import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ClimateInfo from './src/components/climateInfo.js';
import ClimateForm from './src/components/climateForm.js';

import {CLIMATE_KEY} from './Keys.js';

class App extends Component { 

  getClimate = async e => {
    const { city } = e.target.elements;
    const cityValue = city.value;

    const URL = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityValue}&appid=${CLIMATE_KEY}';
    const response = await fetch(URL);
    const date = await response.json;
    console.log(date); 
  }
 
  render () {
    return (
      <View style={styles.container}>
        <View className='container p-4'>
          <View className='row'>
            <View className='col-md-6 mx-auto'>
              <ClimateForm/>
              <ClimateInfo/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
