import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component={TabNavigator} />
            <Drawer.Screen name = "Profile" component={Profile} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator