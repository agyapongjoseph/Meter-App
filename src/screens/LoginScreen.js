import React, { useState } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { TextInput, Button, Title, ActivityIndicator } from 'react-native-paper';
import api from '../services/api';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    setLoading(true);
    try {
      // Mock login for now
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('Home', { userId: '123' });
      }, 1500);
    } catch (error) {
      setLoading(false);
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* ECG Logo */}
      <Image 
        source={require('../../assets/images/ecg-logo.png')}
        // Note the additional ../ to go up two levels from src/screens/
        style={styles.logo}
        resizeMode="contain"
      />
      
      <Title style={styles.title}>Meter Reader App</Title>
      <TextInput
        label="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        label="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {loading ? (
        <ActivityIndicator animating={true} />
      ) : (
        <Button 
          mode="contained" 
          onPress={handleLogin}
          style={styles.button}
        >
          Login
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
  },
});

export default LoginScreen;