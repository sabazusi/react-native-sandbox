import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';
 
class Scene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {
          const nextIndex = this.props.index +1;
          this.props.navigator.push({
            component: Scene,
            title: 'Scene ' + nextIndex,
            passProps: {
              index: nextIndex
            },
          })
        }}>
        <Text>進む</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
 
export default class reactapp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        itemWrapperStyle={{flex: 1, paddingTop: 64}}
        initialRoute={{
          component: Scene,
          title: 'Initial Scene',
          passProps: {
            index: 0,
          },
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});
 
AppRegistry.registerComponent('CommandlineProject', () => reactapp);
