import React, {Component} from 'react';
import {Platform} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';

/*import page components*/
import HomeScreen from './src/components/HomeScreen';
import AboutScreen from './src/components/AboutScreen';
import ProfileScreen from './src/components/ProfileScreen';
import MessageSquareScreen from './src/components/MessageSquareScreen';
import NewsFeedScreen from './src/components/NewsFeedScreen';
import StoryScreen from './src/components/Story';
import MessageScreen from './src/components/MessageScreen';


/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ProfileScreen />
    );
  }
}

*/



const TabNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    MessageSquare: MessageSquareScreen,
    Editorial: NewsFeedScreen,
    About: AboutScreen,
    Profiles : ProfileScreen,
    Story: StoryScreen,
    Message: MessageScreen
 },
 {
   initialRouteName : 'Home',
   defaultNavigationOptions : {
      headerStyle: {
        backgroundColor: '#D9D9D9'
      },
      headerTintColor: '#333',
      headerTitleStyle: {
          fontWeight: 'bold'
      },
  }
 }

);

export default createAppContainer(TabNavigator);

