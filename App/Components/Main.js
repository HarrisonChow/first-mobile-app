import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';
var api = require('../Utils/api');
var Dashboard = require('./Dashboard')

var styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    padding: 30,
    marginTop:65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isloading: false,
      error: false
    }
  }
  handleChange(event){
    this.setState({
      username: event.nativeEvent.text
    });
  }
  handleSubmit(){
    this.setState({
      isloading:true
    });
    api.getBio(this.state.username)
      .then((res) => {
        if(res.message === 'Not Found'){
          this.setState({
            error: 'User not found',
            isloading: false
          })
        } else {
            this.props.navigator.push({
              title: res.name || "Select an Option",
              component: Dashboard,
              passProps: {userInfo: res}
            });
            this.setState({
              isloading: false,
              error: false,
              username: ''
            })
          }
        });
  }
  render(){
    var showErr = (
      this.state.error ? <Text> {this.state.error}</Text> : <View></View>
    );
    return(
      <View style = {styles.mainContainer}>
        <Text style={styles.title}>Search A boat by State</Text>
        <TextInput
          style= {styles.searchInput}
          value={this.state.username}
          onChange= {this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor='white'>
            <Text style={styles.buttonText}> Search </Text>
        </TouchableHighlight>
        {showErr}
      </View>
    )
  }
};

module.exports = Main;
