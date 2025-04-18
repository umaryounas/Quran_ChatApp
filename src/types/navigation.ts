import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  TransitionScreen1: undefined;
  // ... other screens ...
  NameScreen: undefined;
  EmailScreen: {userData: UserData};
  PasswordScreen: {userData: UserData};
  AgeScreen: {userData: UserData};
  // ... other screens ...
  Awareness1Screen: undefined;
    Awareness2Screen: undefined;
    Awareness3Screen: undefined;
    Awareness4Screen: undefined;
    Awareness5Screen: undefined;
    Awareness6Screen: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number | null;
  gender: string;
  quranConnection: string;
  focusStruggle: string;
  emotionalConnection: string;
  guidanceFrequency: string;
  consistencyLevel: string;
}
