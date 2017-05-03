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
  TouchableOpacity,
  Animated,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

class TappableBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
    this.animatedValue = new Animated.Value(0);
  }

  animate() {
    const grow = Animated.spring(
      this.animatedValue,         // Auto-multiplexed
      {
        toValue: 1,
        tension: 70,
        friction: 5,
        useNativeDriver: true,
      } // Back to zero
    );
    const shrink = Animated.spring(
      this.animatedValue,         // Auto-multiplexed
      {
        toValue: 0,
        tension: 100,
        useNativeDriver: true,
      } // Back to zero
    );
    Animated.sequence([grow, shrink]).start();
  }

  handlePress() {
    const { onPress, number } = this.props;
    this.animate();
    onPress(number);
  }

  render() {
    const { color='red', number } = this.props;
    const { selected } = this.state;

    const scale = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.5],
    });

    return (
      <TouchableOpacity onPress={() => this.handlePress()}>
        <Animated.View style={[styles.box, { backgroundColor: color },  { transform: [ { scale } ] }]}>
          <Text style={styles.buttonText}>{number}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default class IronYardDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    }
  }
  handlePress(number){
    const { value } = this.state;
    this.setState({ value: value + number });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.value}
        </Text>
        <View style={styles.boxContainer}>
          <TappableBox number={1} onPress={(n) => this.handlePress(n)}/>
          <TappableBox number={2} onPress={(n) => this.handlePress(n)}/>
          <TappableBox number={3} onPress={(n) => this.handlePress(n)}/>
          <TappableBox number={4} onPress={(n) => this.handlePress(n)}/>
          <TappableBox number={5} onPress={(n) => this.handlePress(n)}/>
          <TappableBox number={6} onPress={(n) => this.handlePress(n)}/>
          <TappableBox number={7} onPress={(n) => this.handlePress(n)}/>
          <TappableBox number={8} onPress={(n) => this.handlePress(n)}/>
          <TappableBox number={9} onPress={(n) => this.handlePress(n)}/>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('IronYardDemo', () => IronYardDemo);
