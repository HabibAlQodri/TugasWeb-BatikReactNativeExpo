import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  SafeAreaView,
  Linking
} from 'react-native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  
  const userData = {
    name: 'Habib Al Qodri',
    email: 'iamhabibalQodri@gmail.com',
    profileImage: require('../../assets/images/profille.jpg'),
    socialMedia: [
      { 
        id: 1, 
        platform: 'github', 
        username: 'HabibAlQodri', 
        url: 'https://github.com/HabibAlQodri',
        icon: 'github'
      },
      { 
        id: 2, 
        platform: 'instagram', 
        username: 'habibfong', 
        url: 'https://instagram.com/habibfong/',
        icon: 'instagram'
      },
      { 
        id: 3, 
        platform: 'youtube', 
        username: 'habibalqodri3112', 
        url: 'https://www.youtube.com/@habibalqodri3112',
        icon: 'youtube'
      }
    ]
  };

  const openURL = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Cannot open URL: " + url);
      }
    });
  };

  const openEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <Image source={userData.profileImage} style={styles.profileImage} />
          <Text style={styles.name}>{userData.name}</Text>
          
          {/* Email - clickable */}
          <TouchableOpacity 
            style={styles.emailContainer} 
            onPress={() => openEmail(userData.email)}
          >
            <Ionicons name="mail-outline" size={18} color="#666" />
            <Text style={styles.email}>{userData.email}</Text>
          </TouchableOpacity>

          {/* Social Media Links */}
          <View style={styles.socialLinks}>
            {userData.socialMedia.map(social => (
              <TouchableOpacity 
                key={social.id} 
                style={styles.socialIcon}
                onPress={() => openURL(social.url)}
              >
                <FontAwesome name={social.icon} size={28} color="#8C4843" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Account Info */}
        <View style={styles.accountInfo}>
          <Text style={styles.sectionTitle}>Account Information</Text>
          
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <Ionicons name="person-outline" size={20} color="#8C4843" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Full Name</Text>
              <Text style={styles.infoValue}>{userData.name}</Text>
            </View>
          </View>
          
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <Ionicons name="mail-outline" size={20} color="#8C4843" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{userData.email}</Text>
            </View>
          </View>
          
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <Ionicons name="globe-outline" size={20} color="#8C4843" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Website</Text>
              <TouchableOpacity onPress={() => openURL('https://habibalqodri.github.io/TugasWeb-PortoLogin/')}>
                <Text style={styles.linkText}>habibalqodri.github.io/TugasWeb-PortoLogin/</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Batik Pattern Background */}
        <View style={styles.patternContainer}>
          <Text style={styles.patternTitle}>Batik Enthusiast</Text>
          <Text style={styles.patternText}>
          Bersemangat dalam melestarikan warisan budaya Indonesia melalui seni batik.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E6D2B5', 
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    padding: 5,
  },
  editButton: {
    padding: 5,
  },
  profileInfo: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#fff',
    borderBottomWidth: 3,
    borderBottomColor: '#E6D2B5', 
    borderStyle: 'dotted',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#8C4843', 
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#59371C', 
    marginBottom: 8,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  socialIcon: {
    marginHorizontal: 12,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FCE9CE', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountInfo: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: '#8C4843',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#59371C', 
    borderBottomWidth: 1,
    borderBottomColor: '#E6D2B5',
    paddingBottom: 5,
  },
  infoItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F5EAD9', 
  },
  infoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FCE9CE', 
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  infoContent: {
    flex: 1,
    justifyContent: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: '#9A7B57', 
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#59371C', 
  },
  linkText: {
    fontSize: 16,
    color: '#8C4843', 
    textDecorationLine: 'underline',
  },
  patternContainer: {
    marginHorizontal: 10,
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#8C4843', 
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  patternTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FCE9CE', 
    marginBottom: 10,
  },
  patternText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FCE9CE', 
  },
});