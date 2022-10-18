import Feed from '../screens/Feed'
import CreatePost from "../screens/CreatePost"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Feed" component={Feed} />
            <Tab.Screen name = "CreatePost" component={CreatePost} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator

