import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, ImageBackground, Image, Animated, Linking } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBSBlCEHAWBBuW3wLrcRYlnZdVgx1o82XM",
  authDomain: "road-app-9933f.firebaseapp.com",
  projectId: "road-app-9933f",
  storageBucket: "road-app-9933f.firebasestorage.app",
  messagingSenderId: "392230495859",
  appId: "1:392230495859:web:da51f8070afde1abcd2c06",
  measurementId: "G-EVJXB23V7L"
};

const app = initializeApp(firebaseConfig);

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication, loading }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-photo/woman-with-broken-car-triangle_657883-453.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.authContainer}>
          {/* Logo */}
          <Image
            source={require('./assets/logo_transparent.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
          <StatusBar style="auto" />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#ddd"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#ddd"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAuthentication} disabled={loading}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.buttonText}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [buttonScale] = useState(new Animated.Value(1));  // Animation value for scaling the button

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      setLoading(true);
      if (user) {
        await signOut(auth);
        console.log('User logged out successfully!');
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const navigateToSite = () => {
    Linking.openURL('https://safetyroad.onrender.com') // Opens the site in the browser
      .catch(err => console.error("Failed to open page:", err));
  };

  // Animation function for scaling the button
  const animateButton = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 1.1,
        duration: 150,
        useNativeDriver: true
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      })
    ]).start();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <View style={styles.authContainer}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}>
            <TouchableOpacity style={styles.button} onPress={navigateToSite} onPressIn={animateButton}>
              <Text style={styles.buttonText}>Go to Site</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      ) : (
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
          loading={loading}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    color: '#333',
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomContainer: {
    marginTop: 20,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
    fontSize: 16,
  },
  loaderContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -25 }],
    width: '80%',
  },
});

export default App;
