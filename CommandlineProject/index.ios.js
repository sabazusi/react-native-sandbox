import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  TextInput
} from 'react-native';

class SearchResult extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hai</Text>
      </View>
    );
  }
}

class ArrayDataView extends Component {
  render() {
    return (
      <View>
        {
          this.props.data.map((num) => (
            <Text>{num}</Text>
          ))
        }
      </View>
    );
  }
}

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      dataList: [1, 2, 3, 4, 5]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          ref={(ref) => this.inputRef = ref}
          onChangeText={(value) => this.setState({value})}
        />
        <Button
          title="search"
          onPress={() => this.props.navigator.push({
            component: SearchResult,
            title: `Result for ${this.state.value}`
          })}
        />

        <View>
          <ArrayDataView data={this.state.dataList} />
        </View>
        <Button
          title="change data order"
          onPress={() => this.setState({ dataList: [2, 3, 4, 5, 1] })}
        />
      </View>
    )
  }
}

export default class reactapp extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        itemWrapperStyle={{flex: 1, paddingTop: 64}}
        initialRoute={{
          component: Search,
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
