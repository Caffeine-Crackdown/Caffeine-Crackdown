/**
Practicing routing while attempting to create home page

**/

import React, {Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

class Home extends Component{

  // constructor(){
  //   super()
  //   this.navigate=this.navigate.bind(this)
  // }
  // //.pop gets rid of the current route that you're on
  // navigate(route){
  //   this.props.navigator.push({//.push allows you to get to new route
  //     name
  //   });
  // }

  static navigationOptions={
    header:null,
  };


  render(){
    const {navigate}=this.props.navigation;
    return(
      <View>
        <LinearGradient colors = {['#FDB05D','#EF4F8C']}
        style = {styles.testing}
        >

        <View style={styles.container}>

        <Image source={require('./broken_cup.png')} />

        <Text>Congratulations on taking the first step on a healthier life!</Text>
        <Button
          title= "Let's go!"
          onPress={()=>navigate('About')}
          style={styles.homeButtonStyle}
          />
          </View>
          </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  },
  homeButtonStyle:{
    color:'white',
    borderRadius:50,
    width:'400',
  },
  testing: {
    padding: 15,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 5,
    height:'100%',
    width: '100%',
  },
});


export default Home
