import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories,Product,Products } from "../screens/App";
import { Easing } from "react-native";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
   
    return (        
            <Stack.Navigator initialRouteName="Categories" >
                <Stack.Screen name="Categories" component={Categories} options={{headerShown:false}}/>
                <Stack.Screen name="Products" component={Products}   />
                <Stack.Screen name="Product" component={Product} />
            </Stack.Navigator>        
    )
}

export default ShopNavigator