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


class Test1 extends Component{

  static navigationOptions={
    header:null,
  };

  render(){
    const {navigate}=this.props.navigation;
    return(
      <View >
      <LinearGradient colors = {['#FDB05D','#EF4F8C']}
      style = {styles.testing}

      >
      <View style={styles.container} >
        <Text>Test1 page</Text>
        <Button
          title= "go back to homepage"
          onPress={()=>navigate('Home',{name:'JaneDoe'})}/>
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

export default Test1
