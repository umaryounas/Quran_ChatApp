import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/store';
import {signIn} from '../store/authSlice';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/navigation';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('mohsin@gmail.com');
  const [password, setPassword] = useState('abcd1234');
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const {loading} = useAppSelector(state => state.auth);

  const handleLogin = async () => {
    try {
      await dispatch(signIn({email, password})).unwrap();
      // Navigation will be handled automatically by the auth state change
    } catch (error: any) {
      setErrorMessage(error || 'Login failed. Please try again.');
      setErrorModalVisible(true);
    }
  };

  const closeErrorModal = () => {
    setErrorModalVisible(false);
  };

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      colors={['#0A333A', '#236952']}
      style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/Logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>QuranChat</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!loading}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              editable={!loading}
            />
          </View>

          <TouchableOpacity
            style={[styles.loginButton, loading && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.loginButtonText}>Sign In</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.backButton, loading && styles.backButtonDisabled]}
            onPress={() => navigation.navigate('WelcomeScreen')}
            disabled={loading}>
            <Text style={styles.backButtonText}>Back to Welcome</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <Modal
        visible={errorModalVisible}
        transparent
        animationType="fade"
        onRequestClose={closeErrorModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Error</Text>
            <Text style={styles.modalMessage}>{errorMessage}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={closeErrorModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    marginBottom: 10,
  },
  title: {
    fontSize: 33,
    fontWeight: '600',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  loginButton: {
    backgroundColor: '#0F3A40',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  backButtonDisabled: {
    opacity: 0.5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: width * 0.8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0F3A40',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#0F3A40',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   Image,
//   Dimensions,
//   ActivityIndicator,
//   Modal,
// } from 'react-native';
// import {useAppDispatch, useAppSelector} from '../store/store';
// import {signIn} from '../store/authSlice';
// import {useNavigation} from '@react-navigation/native';
// import {NavigationProp} from '../types/navigation';
// import LinearGradient from 'react-native-linear-gradient';
// import {signInWithEmailAndPassword} from 'firebase/auth';
// import {auth} from '../config/firebaseConfig'; // ✅ Fixed import

// const {width} = Dimensions.get('window');

// const LoginScreen = () => {
//   const [email, setEmail] = useState('mohsin@gmail.com');
//   const [password, setPassword] = useState('abcd1234');
//   const [errorModalVisible, setErrorModalVisible] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const dispatch = useAppDispatch();
//   const navigation = useNavigation<NavigationProp>();
//   const {loading} = useAppSelector(state => state.auth);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       setErrorMessage('Email and password are required.');
//       setErrorModalVisible(true);
//       return;
//     }

//     const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//     if (!emailRegex.test(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       setErrorModalVisible(true);
//       return;
//     }

//     try {
//       // Sign in with Firebase Authentication
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password,
//       );
//       const user = userCredential.user;

//       // Dispatching action to Redux after successful Firebase login
//       await dispatch(signIn({email, password})).unwrap();

//       // Redirect to next screen or home after success
//       navigation.navigate('HomeScreen');
//     } catch (error: any) {
//       // Handling Firebase and generic errors
//       const message = error.code
//         ? getErrorMessage(error.code)
//         : 'Login failed. Please try again.';
//       setErrorMessage(message);
//       setErrorModalVisible(true);
//     }
//   };

//   const getErrorMessage = (errorCode: string) => {
//     switch (errorCode) {
//       case 'auth/invalid-email':
//         return 'The email address is not valid.';
//       case 'auth/user-disabled':
//         return 'The user account has been disabled.';
//       case 'auth/user-not-found':
//         return 'No user found with this email.';
//       case 'auth/wrong-password':
//         return 'Incorrect password. Please try again.';
//       default:
//         return 'An unknown error occurred. Please try again.';
//     }
//   };

//   const closeErrorModal = () => {
//     setErrorModalVisible(false);
//   };

//   return (
//     <LinearGradient
//       start={{x: 0.0, y: 0.25}}
//       end={{x: 0.5, y: 1.0}}
//       colors={['#0A333A', '#236952']}
//       style={styles.container}>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="transparent"
//         translucent
//       />
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.content}>
//           <View style={styles.logoContainer}>
//             <Image
//               source={require('../assets/images/Logo.png')}
//               style={styles.logo}
//               resizeMode="contain"
//             />
//             <Text style={styles.title}>QuranChat</Text>
//             <Text style={styles.subtitle}>Sign in to continue</Text>
//           </View>

//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Email</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your email"
//               placeholderTextColor="rgba(255, 255, 255, 0.5)"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//               editable={!loading}
//             />
//           </View>

//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your password"
//               placeholderTextColor="rgba(255, 255, 255, 0.5)"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry
//               editable={!loading}
//             />
//           </View>

//           <TouchableOpacity
//             style={[styles.loginButton, loading && styles.loginButtonDisabled]}
//             onPress={handleLogin}
//             disabled={loading}>
//             {loading ? (
//               <ActivityIndicator color="#fff" />
//             ) : (
//               <Text style={styles.loginButtonText}>Sign In</Text>
//             )}
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.backButton, loading && styles.backButtonDisabled]}
//             onPress={() => navigation.navigate('WelcomeScreen')}
//             disabled={loading}>
//             <Text style={styles.backButtonText}>Back to Welcome</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>

//       <Modal
//         visible={errorModalVisible}
//         transparent
//         animationType="fade"
//         onRequestClose={closeErrorModal}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Error</Text>
//             <Text style={styles.modalMessage}>{errorMessage}</Text>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={closeErrorModal}>
//               <Text style={styles.modalButtonText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1},
//   safeArea: {flex: 1},
//   content: {flex: 1, padding: 20, justifyContent: 'center'},
//   logoContainer: {alignItems: 'center', marginBottom: 40},
//   logo: {width: width * 0.3, height: width * 0.3, marginBottom: 10},
//   title: {fontSize: 33, fontWeight: '600', color: 'white', marginBottom: 5},
//   subtitle: {fontSize: 16, color: 'rgba(255, 255, 255, 0.8)', marginBottom: 20},
//   inputContainer: {marginBottom: 20},
//   label: {fontSize: 14, color: 'white', marginBottom: 8},
//   input: {
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     color: 'white',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   loginButton: {
//     backgroundColor: '#0F3A40',
//     borderRadius: 8,
//     padding: 16,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   loginButtonDisabled: {opacity: 0.7},
//   loginButtonText: {color: '#fff', fontSize: 16, fontWeight: '600'},
//   backButton: {marginTop: 16, alignItems: 'center'},
//   backButtonDisabled: {opacity: 0.5},
//   backButtonText: {color: 'white', fontSize: 14},
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 20,
//     width: width * 0.8,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#0F3A40',
//     marginBottom: 10,
//   },
//   modalMessage: {
//     fontSize: 16,
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   modalButton: {
//     backgroundColor: '#0F3A40',
//     borderRadius: 8,
//     padding: 12,
//     width: '100%',
//     alignItems: 'center',
//   },
//   modalButtonText: {color: 'white', fontSize: 16, fontWeight: '600'},
// });

// export default LoginScreen;
