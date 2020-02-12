import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TimeScreen from './src/screens/TimeScreen';
import CountryListScreen from './src/screens/CountryListScreen';
import ResultScreen from './src/screens/ResultScreen';

const navigator=createStackNavigator(
  {
    Time:{
      screen:TimeScreen,
      navigationOptions:{
        header:null
      }
    },
    Result:{
      screen:ResultScreen,
      navigationOptions:{
        header:null
      }
    },
    Country:{
      screen:CountryListScreen,
      navigationOptions:{
        headerTitleStyle: { alignSelf: 'center',marginHorizontal:50},
        title: 'Choose a Location',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#0d48a1'
    },
                
      }
    }
  },
  {
    initialRouteName:'Time'
  }
)

export default createAppContainer(navigator);