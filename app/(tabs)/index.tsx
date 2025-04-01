import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground 
    source={require('../assets/dark.avif')}
    style={styles.container}
    >
      <View style={styles.overlay}>
        {/* Header Section */}
        <View style={styles.header}>
          <Ionicons name="chatbubbles-sharp" size={80} color="#fff" />
          <Text style={styles.title}>ConnectSphere</Text>
          <Text style={styles.subtitle}>Where Conversations Come Alive</Text>
        </View>

        {/* Features Section */}
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <MaterialIcons name="security" size={34} color="#fff" />
            <Text style={styles.featureText}>Secure Messaging</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="happy" size={34} color="#fff" />
            <Text style={styles.featureText}>Fun Emojis</Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="cloud" size={34} color="#fff" />
            <Text style={styles.featureText}>Cloud Sync</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.loginButton]}
            onPress={() => router.push('/screens/login')}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.signupButton]}
            onPress={() => router.push('/screens/chat')}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>Join millions of users worldwide</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
    fontFamily: 'Helvetica',
  },
  subtitle: {
    fontSize: 18,
    color: '#rgba(255,255,255,0.8)',
    textAlign: 'center',
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  featureItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  featureText: {
    color: 'white',
    marginTop: 10,
    fontSize: 14,
  },
  buttonsContainer: {
    marginHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  loginButton: {
    backgroundColor: '#4A90E2',
  },
  signupButton: {
    backgroundColor: '#00C851',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  footerText: {
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
});