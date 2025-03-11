import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter(); 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Sesuaikan route sesuai dengan struktur expo-router
  const menuItems = [
    { id: 1, title: 'Sejarah', route: '/Dropdown/Sejarah' },
    { id: 2, title: 'Karya', route: '/Dropdown/Karya' },
    { id: 3, title: 'Daerah', route: '/Dropdown/Daerah' },
    { id: 4, title: 'Tentang', route: '/Dropdown/Tentang' }
  ];

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleDropdown}>
          <Ionicons name="menu" size={28} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/batik-icon.png')} style={styles.logo} />
          <Text style={styles.title}>Batik History</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications" size={28} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
      
      {showDropdown && (
        <View style={styles.dropdown}>
          {menuItems.map(item => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.dropdownItem}
              onPress={() => {
                router.push(item.route); 
                setShowDropdown(false);
              }}
            >
              <Text style={styles.dropdownText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: { position: 'relative', zIndex: 10 },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#8C4843',
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 4,
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 40, height: 40, marginRight: 10 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  icon: { padding: 5 },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownText: { fontSize: 16, color: '#8C4843' },
});
