import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
const navigator = createStackNavigator(
  {
    //routes..has to have at least one screen
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      //options used for every screen
      title: "Default Title...",
    },
  }
);

//creates a default react component and then displays whatever route
export default createAppContainer(navigator);
