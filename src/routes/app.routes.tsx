import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Navigator,Screen} = createNativeStackNavigator()

export function AppRoutes(){
    
    return (
        <Navigator
        initialRouteName="login"
        screenOptions={{headerShown: false}}
        >
            <Screen
            name="login"
            component={Login}
            />
        
        </Navigator>
    )
}