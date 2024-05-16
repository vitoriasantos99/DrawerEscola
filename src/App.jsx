import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Notas from './components/Notas';
import Faltas from './components/Faltas';
import Cursos from './components/Cursos';
import Documentos from './components/Documentos';
import Ajuda from './components/Ajuda';

const Drawer = createDrawerNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer>
                <Drawer.Navigator
                initialRouteName='Cursos'
                screenOptions={{
                    drawerActiveBackgroundColor: '#f4a1b5',
                    drawerActiveTintColor: '#e86786',
                }}>
                    <Drawer.Screen name='Notas' component={Notas}/>
                    <Drawer.Screen name='Faltas' component={Faltas}/>
                    <Drawer.Screen name='Cursos' component={Cursos}/>
                    <Drawer.Screen name='Documentos' component={Documentos}/>
                    <Drawer.Screen name='Ajuda' component={Ajuda}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}