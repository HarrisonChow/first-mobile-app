import React, { Component } from 'react';
var Main = require('./App/Components/Main');
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

export default class first_moile_app extends Component {
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute={{
          title: 'Fishing Boat Booking',
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('first_moile_app', () => first_moile_app);
