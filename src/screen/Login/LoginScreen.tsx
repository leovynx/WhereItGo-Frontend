import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';


import { styles } from './Login.styles';

interface LoginProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Minimal App</Text>

        <Text style={styles.subtitle}>
          Focused. Clean. Simple.
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#b8bcc3"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#b8bcc3"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;