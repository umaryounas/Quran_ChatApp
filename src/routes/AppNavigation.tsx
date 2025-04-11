import React, {use, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../store/store';
import {checkAuthStatus} from '../store/authSlice';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {logout} from '../store/authSlice';

// Import screens
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TransitionScreen1 from '../screens/TransitionScreen1';
import TransitionScreen2 from '../screens/TransitionScreen2';
import TransitionScreen3 from '../screens/TransitionScreen3';
import TransitionScreen4 from '../screens/TransitionScreen4';
import TransitionScreen5 from '../screens/TransitionScreen5';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import AgeScreen from '../screens/AgeScreen';
import GenderScreen from '../screens/GenderScreen';
import QuranConnectionScreen from '../screens/QuranConnectionScreen';
import QuizScreen6 from '../screens/QuizScreen6';
import QuizScreen7 from '../screens/QuizScreen7';
import QuizScreen8 from '../screens/QuizScreen8';
import QuizScreen9 from '../screens/QuizScreen9';
import QuizScreen10 from '../screens/QuizScreen10';
import QuizScreen11 from '../screens/QuizScreen11';
import QuizScreen12 from '../screens/QuizScreen12';
import QuizScreen13 from '../screens/QuizScreen13';
import QuizScreen14 from '../screens/QuizScreen14';
import JoinThousandsScreen from '../screens/JoinThousands';
import CostExplanationScreen from '../screens/CostExplanation';
import JourneyScreen from '../screens/JourneyScreen';
import DiscountScreen from '../screens/DiscountScreen';
import ChatWelcomeScreen from '../screens/ChatWelcomeScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileInformationScreen from '../screens/ProfileInformationScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import SubscriptionManagementScreen from '../screens/SubscriptionManagementScreen';
import VoiceToTextSettingsScreen from '../screens/VoiceToTextSettingsScreen';
import AIResponseLengthScreen from '../screens/AIResponseLengthScreen';
import FAQsScreen from '../screens/FAQsScreen';
import ClearHistoryScreen from '../screens/ClearHistoryScreen';
import ManageDevicesScreen from '../screens/ManageDevicesScreen';
import ReportProblemScreen from '../screens/ReportProblemScreen';
import DownloadDataScreen from '../screens/DownloadDataScreen';
import AppLockMainScreen from '../screens/AppLockMainScreen';
import CreatePinScreen from '../screens/CreatePinScreen';
import PinSuccessScreen from '../screens/PinSuccessScreen';
import Awareness1Screen from '../screens/Awareness1Screen';
import Awareness2Screen from '../screens/Awareness2Screen';
import Awareness3Screen from '../screens/Awareness3Screen';
import Awareness4Screen from '../screens/Awareness4Screen';
import Awareness5Screen from '../screens/Awareness5Screen';
import Awareness6Screen from '../screens/Awareness6Screen';
import DrawerComponent from '../components/DrawerComponent';
import {fetchAllChats} from '../store/chatSlice';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <AuthStack.Screen
        name="TransitionScreen1"
        component={TransitionScreen1}
      />
      <AuthStack.Screen
        name="TransitionScreen2"
        component={TransitionScreen2}
      />
      <AuthStack.Screen
        name="TransitionScreen3"
        component={TransitionScreen3}
      />
      <AuthStack.Screen
        name="TransitionScreen4"
        component={TransitionScreen4}
      />
      <AuthStack.Screen
        name="TransitionScreen5"
        component={TransitionScreen5}
      />
      <AuthStack.Screen name="NameScreen" component={NameScreen} />
      <AuthStack.Screen name="EmailScreen" component={EmailScreen} />
      <AuthStack.Screen name="PasswordScreen" component={PasswordScreen} />
      <AuthStack.Screen name="AgeScreen" component={AgeScreen} />
      <AuthStack.Screen name="GenderScreen" component={GenderScreen} />
      <AuthStack.Screen
        name="QuranConnectionScreen"
        component={QuranConnectionScreen}
      />
      <AuthStack.Screen name="QuizScreen6" component={QuizScreen6} />
      <AuthStack.Screen name="QuizScreen7" component={QuizScreen7} />
      <AuthStack.Screen name="QuizScreen8" component={QuizScreen8} />
      <AuthStack.Screen name="QuizScreen9" component={QuizScreen9} />
      <AuthStack.Screen name="QuizScreen10" component={QuizScreen10} />
      <AuthStack.Screen name="QuizScreen11" component={QuizScreen11} />
      <AuthStack.Screen name="QuizScreen12" component={QuizScreen12} />
      <AuthStack.Screen name="QuizScreen13" component={QuizScreen13} />
      <AuthStack.Screen name="QuizScreen14" component={QuizScreen14} />
      <AuthStack.Screen
        name="JoinThousandsScreen"
        component={JoinThousandsScreen}
      />
      <AuthStack.Screen
        name="CostExplanationScreen"
        component={CostExplanationScreen}
      />
      <AuthStack.Screen name="JourneyScreen" component={JourneyScreen} />
      <AuthStack.Screen name="DiscountScreen" component={DiscountScreen} />
    </AuthStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name="ChatWelcomeScreen"
        component={ChatWelcomeScreen}
      />
      <MainStack.Screen name="ChatScreen" component={ChatScreen} />
      <MainStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <MainStack.Screen
        name="ProfileInformationScreen"
        component={ProfileInformationScreen}
      />
      <MainStack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <MainStack.Screen
        name="SubscriptionManagementScreen"
        component={SubscriptionManagementScreen}
      />
      <MainStack.Screen
        name="VoiceToTextSettingsScreen"
        component={VoiceToTextSettingsScreen}
      />
      <MainStack.Screen
        name="AIResponseLengthScreen"
        component={AIResponseLengthScreen}
      />
      <MainStack.Screen name="FAQsScreen" component={FAQsScreen} />
      <MainStack.Screen
        name="ClearHistoryScreen"
        component={ClearHistoryScreen}
      />
      <MainStack.Screen
        name="ManageDevicesScreen"
        component={ManageDevicesScreen}
      />
      <MainStack.Screen
        name="ReportProblemScreen"
        component={ReportProblemScreen}
      />
      <MainStack.Screen
        name="DownloadDataScreen"
        component={DownloadDataScreen}
      />
      <MainStack.Screen
        name="AppLockMainScreen"
        component={AppLockMainScreen}
      />
      <MainStack.Screen name="CreatePinScreen" component={CreatePinScreen} />
      <MainStack.Screen name="PinSuccessScreen" component={PinSuccessScreen} />
      <MainStack.Screen name="Awareness1Screen" component={Awareness1Screen} />
      <MainStack.Screen name="Awareness2Screen" component={Awareness2Screen} />
      <MainStack.Screen name="Awareness3Screen" component={Awareness3Screen} />
      <MainStack.Screen name="Awareness4Screen" component={Awareness4Screen} />
      <MainStack.Screen name="Awareness5Screen" component={Awareness5Screen} />
      <MainStack.Screen name="Awareness6Screen" component={Awareness6Screen} />
    </MainStack.Navigator>
  );
};

const DrawerNavigator = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllChats());
  }, []);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => <DrawerComponent></DrawerComponent>}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#0F3A40',
        },
        drawerLabelStyle: {
          color: 'white',
        },
        drawerActiveTintColor: '#FFD700',
        drawerInactiveTintColor: 'white',
      }}>
      <Drawer.Screen
        name="ChatWelcome"
        component={MainNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const AppNavigation = () => {
  const dispatch = useAppDispatch();
  const {isAuthenticated, loading} = useAppSelector(state => state.auth);

  if (loading) {
    // You might want to show a loading screen here
    return null;
  }
  console.log('isAuthenticated ===> ', isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;
