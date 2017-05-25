// @flow

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class NextScreen extends React.Component {
  static navigationOptions = {
    title: 'Next Screen'
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>next screen</Text>
        <Text>{params.value}</Text>
        <Button
          title="Update Value to 2"
          onPress={params.updateValue}
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor() {
    super();
    this.state = {
      value: 1
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'center', marginTop: 300}}>
        <Button
          title="move to next screen"
          onPress={() => navigate('Next', {
            value: this.state.value,
            updateValue: () => this.setState({ value: 2 })
          })}
        />
      </View>
    );
  }
}
const NavigationSample = StackNavigator({
  Home: { screen: HomeScreen },
  Next: { screen: NextScreen }
});
AppRegistry.registerComponent('navigation', () => NavigationSample);
