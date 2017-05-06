// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import GiftedListView from 'react-native-gifted-listview';

const fetchItem = (page, listViewRef) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (page === 1) {
        resolve(initialData.concat({title: 'now loading...'}));
      } else {
        const current = listViewRef._getRows();
        const loading = current.pop();
        listViewRef._setRows(current);
        resolve(continueData(page).concat(loading));
      }
    }, 1000);
  });
};

export default class ListViewTest extends Component {
  _renderRowView(data) {
    return (
      <View>
        <Text style={{fontSize: 18, margin: 10}}>{data.title}</Text>
      </View>
    );
  }

  _onFetch = (page = 1, callback, options) => {
    fetchItem(page, this.listViewRef)
      .then((data) => {
        callback(data, {
          allLoaded: false
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 64, backgroundColor: '#CCC'}} />
        <GiftedListView
          ref={(ref) => this.listViewRef = ref}
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          refreshable={true}
          enableEmptySections={true}
          paginationFetchingView={() => null}
          paginationWaitingView={() => null}
          customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}
          refreshableTintColor="blue"
          onEndReached={() => this.listViewRef._onPaginate()}
          onEndReachedThreshold={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6b585',
  },
});

const initialData = [
  {title: 'title-1'},
  {title: 'title-2'},
  {title: 'title-3'},
  {title: 'title-4'},
  {title: 'title-5'},
  {title: 'title-6'},
  {title: 'title-7'},
  {title: 'title-8'},
  {title: 'title-9'},
  {title: 'title-10'},
  {title: 'title-11'},
  {title: 'title-12'},
  {title: 'title-13'},
  {title: 'title-14'},
  {title: 'title-15'},
  {title: 'title-16'},
  {title: 'title-17'},
  {title: 'title-18'},
  {title: 'title-19'},
  {title: 'title-20'},
  {title: 'title-21'},
  {title: 'title-22'},
  {title: 'title-23'},
  {title: 'title-24'},
  {title: 'title-25'},
  {title: 'title-26'},
  {title: 'title-27'},
  {title: 'title-28'},
  {title: 'title-29'},
  {title: 'title-30'}
];

const continueData = (page) => [
  {title: `title-${30 + (page - 1) * 5 - 4}`},
  {title: `title-${30 + (page - 1) * 5 - 3}`},
  {title: `title-${30 + (page - 1) * 5 - 2}`},
  {title: `title-${30 + (page - 1) * 5 - 1}`},
  {title: `title-${30 + (page - 1) * 5}`},
];
AppRegistry.registerComponent('ListViewTest', () => ListViewTest);
