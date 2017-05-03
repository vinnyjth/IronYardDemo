/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 50,
    borderRadius: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class TappableBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    const { color='red', tapColor='blue', text='A box!'} = this.props;
    const { selected } = this.state;

    const backgroundColor = selected ? tapColor : color;
    return (
      <TouchableOpacity onPress={() => this.setState({ selected: !selected })}>
        <View style={[styles.box, { backgroundColor } ]}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class IronYardDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <View style={styles.boxContainer}>
          <TappableBox/>
          <TappableBox/>
          <TappableBox/>
          <TappableBox/>
          <TappableBox/>
          <TappableBox/>
          <TappableBox/>
          <TappableBox/>
          <TappableBox/>          
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('IronYardDemo', () => IronYardDemo);
