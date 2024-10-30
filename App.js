import { StatusBar, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDetailsScreen from './screens/MealDetailsScreen';
import IconButton from './components/IconButton';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import {Ionicons} from '@expo/vector-icons'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator
  screenOptions={{
    headerStyle: {backgroundColor: '#351401'}
    ,headerTintColor:'white',
    sceneContainerStyle: {backgroundColor: '#3f2f25'},
    drawerContentStyle: {backgroundColor: '#351401' },
    drawerInactiveTintColor: 'white', 
    drawerActiveTintColor: '#351401', 
    drawerActiveBackgroundColor: '#e4baa1'}}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{drawerIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} ></Ionicons>}}/>
    <Drawer.Screen name='Favorite' component={FavoriteScreen} options={{drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size} ></Ionicons>}}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
         headerStyle: { backgroundColor: '#341401'},headerTintColor: 'white',contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{ headerShown: false}}/>
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} options={({route})=>{
            const categoryTitle  = route.params.categoryTitle; 
            return {
              title: categoryTitle
            }
          }}
          
          />
          <Stack.Screen name="MealsDetails" component={MealsDetailsScreen} options={{ title: 'Meals Details Screen', 
            headerRight: () => {
              return <IconButton></IconButton>
            }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
