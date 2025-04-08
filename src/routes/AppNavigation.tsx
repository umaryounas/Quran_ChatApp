import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import TransitionScreen1 from '../screens/TransitionScreen1';
import TransitionScreen2 from '../screens/TransitionScreen2';
import TransitionScreen3 from '../screens/TransitionScreen3';
import TransitionScreen4 from '../screens/TransitionScreen4';
import TransitionScreen5 from '../screens/TransitionScreen5';
import NameScreen from '../screens/NameScreen';
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
import ChatApp from '../screens/ChatScreen';
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
import ChatWelcomeScreen from '../screens/ChatWelcomeScreen';
import ChatScreen from '../screens/ChatScreen';
const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={WelcomeScreen} />
          <Stack.Screen name="TransitionScreen1" component={TransitionScreen1} />
          <Stack.Screen name="TransitionScreen2" component={TransitionScreen2} />
          <Stack.Screen name="TransitionScreen3" component={TransitionScreen3} />
          <Stack.Screen name="TransitionScreen4" component={TransitionScreen4} />
          <Stack.Screen name="TransitionScreen5" component={TransitionScreen5} />
          <Stack.Screen name="NameScreen" component={NameScreen} />
          <Stack.Screen name="AgeScreen" component={AgeScreen} />  
          <Stack.Screen name="GenderScreen" component={GenderScreen} />
          <Stack.Screen name="QuranConnectionScreen" component={QuranConnectionScreen} />  
          <Stack.Screen name="QuizScreen6" component={QuizScreen6} />
          <Stack.Screen name="QuizScreen7" component={QuizScreen7} />
          <Stack.Screen name="QuizScreen8" component={QuizScreen8} />
          <Stack.Screen name="QuizScreen9" component={QuizScreen9} />
          <Stack.Screen name="QuizScreen10" component={QuizScreen10} />
          <Stack.Screen name="QuizScreen11" component={QuizScreen11} />
          <Stack.Screen name="QuizScreen12" component={QuizScreen12} />
          <Stack.Screen name="QuizScreen13" component={QuizScreen13} />
          <Stack.Screen name="QuizScreen14" component={QuizScreen14} />
          <Stack.Screen name="JoinThousandsScreen" component={JoinThousandsScreen} />
          <Stack.Screen name="CostExplanationScreen" component={CostExplanationScreen} />
          <Stack.Screen name="JourneyScreen" component={JourneyScreen} />
          <Stack.Screen name="DiscountScreen" component={DiscountScreen} />
          <Stack.Screen name="ChatApp" component={ChatApp} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="ProfileInformationScreen" component={ProfileInformationScreen} />
          <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
          <Stack.Screen name="SubscriptionManagementScreen" component={SubscriptionManagementScreen} />
          <Stack.Screen name="VoiceToTextSettingsScreen" component={VoiceToTextSettingsScreen} />
          <Stack.Screen name="AIResponseLengthScreen" component={AIResponseLengthScreen} />
          <Stack.Screen name="FAQsScreen" component={FAQsScreen} />
          <Stack.Screen name="ClearHistoryScreen" component={ClearHistoryScreen} />
          <Stack.Screen name="ManageDevicesScreen" component={ManageDevicesScreen} />
          <Stack.Screen name="ReportProblemScreen" component={ReportProblemScreen} />
          <Stack.Screen name="DownloadDataScreen" component={DownloadDataScreen} />
          <Stack.Screen name="AppLockMainScreen" component={AppLockMainScreen} />
          <Stack.Screen name="CreatePinScreen" component={CreatePinScreen} />
          <Stack.Screen name="PinSuccessScreen" component={PinSuccessScreen} />
          <Stack.Screen name="Awareness1Screen" component={Awareness1Screen} />
          <Stack.Screen name="Awareness2Screen" component={Awareness2Screen} />
          <Stack.Screen name="Awareness3Screen" component={Awareness3Screen} />
          <Stack.Screen name="Awareness4Screen" component={Awareness4Screen} />
          <Stack.Screen name="Awareness5Screen" component={Awareness5Screen} />
          <Stack.Screen name="Awareness6Screen" component={Awareness6Screen} />
          <Stack.Screen name="ChatWelcomeScreen" component={ChatWelcomeScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default RootNavigator;
  