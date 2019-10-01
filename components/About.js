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
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


class About extends Component{

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

        <Text>About page</Text>
        <Button
          title= "go back to Test1"
          onPress={()=>navigate('Test1',{name:'JaneDoe'})}/>
          </View>
        </LinearGradient>
      </View>
    );
  }

}

const styles=StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
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

export default About
