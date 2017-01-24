import React, {Component} from 'react';
import {
  View,
  WebView,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6EF',
    flex: 1,
    flexDirection: 'column'
  }
});

class Web extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <WebView url = {this.props.url} />
      </View>
    )
  }
};
Web.propTypes = {
  url: React.PropTypes.string.isRequired
}

module.exports = Web;
