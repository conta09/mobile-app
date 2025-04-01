import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const messages = [
  { id: 1, text: 'Hey there! 👋', sender: 'them', time: '09:30' },
  { id: 2, text: 'Hi! How are you?', sender: 'me', time: '09:31' },
  { id: 3, text: 'I\'m great! Want to grab coffee? ☕', sender: 'them', time: '09:32' },
];

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Chat Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <FontAwesome name="user-circle" size={36} color="#4A90E2" />
          <View style={styles.userText}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userStatus}>Online</Text>
          </View>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="call" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView 
        style={styles.chatContainer}
        contentContainerStyle={{ paddingVertical: 15 }}
      >
        <View style={styles.daySeparator}>
          <Text style={styles.dayText}>Today</Text>
        </View>

        {messages.map((message) => (
          <View 
            key={message.id}
            style={[
              styles.messageBubble,
              message.sender === 'me' ? styles.myMessage : styles.theirMessage
            ]}
          >
            <Text style={message.sender === 'me' ? styles.myText : styles.theirText}>
              {message.text}
            </Text>
            <Text style={styles.timeStamp}>{message.time}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Bar */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="happy" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="attach-file" size={24} color="#666" />
        </TouchableOpacity>
        
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#999"
        />
        
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 15,
  },
  userText: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  userStatus: {
    fontSize: 12,
    color: '#666',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  daySeparator: {
    alignSelf: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  dayText: {
    color: '#666',
    fontSize: 12,
  },
  messageBubble: {
    maxWidth: '80%',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
  },
  myMessage: {
    backgroundColor: '#4A90E2',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
  },
  theirMessage: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  myText: {
    color: 'white',
    fontSize: 16,
  },
  theirText: {
    color: '#333',
    fontSize: 16,
  },
  timeStamp: {
    fontSize: 10,
    color: '#999',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  iconButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 25,
    padding: 10,
  },
});