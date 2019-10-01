import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import {Navigator} from 'react-native-deprecated-custom-components';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {Button} from 'native-base';
import Home from './components/Home.js';
import About from './components/About.js';
import Test1 from './components/Test1.js';





const MainNavigator = createStackNavigator({
  Home:{screen: Home},
  About:{screen:About},
  Test1:{screen:Test1},
});

const App=createAppContainer(MainNavigator);

export default App;






// export default class Routing extends Component {
//   constructor() {
//     super()
//
//     this.renderScene=this.renderScene.bind(this)
//   }
//
//   renderScene(route,navigator){
//     if(route.name==='homePage'){
//       return<Home navigator={navigator}/>
//     }else if(route.name==='aboutPage'){
//       return<About navigator={navigator}/>
//     }
//   }
//   render(){
//     return (
//         <Navigator
//           initialRoute={{name:'homePage'}}
//           renderScene={this.renderScene}
//         />
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
