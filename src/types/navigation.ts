export type RootStackParamList = {
  WelcomeScreen: undefined;
  TransitionScreen1: undefined;
  // ... other screens ...
  NameScreen: undefined;
  EmailScreen: {userData: UserData};
  PasswordScreen: {userData: UserData};
  AgeScreen: {userData: UserData};
  // ... other screens ...
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
