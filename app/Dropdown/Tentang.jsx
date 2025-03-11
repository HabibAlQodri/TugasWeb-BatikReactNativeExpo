import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Tentang() {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter(); 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Menu dropdown untuk halaman Sejarah
  const menuItems = [
    { id: 0, title: 'Beranda', route: '/home' },
    { id: 1, title: 'Sejarah', route: '/Dropdown/Sejarah' },
    { id: 2, title: 'Karya', route: '/Dropdown/Karya' },
    { id: 3, title: 'Daerah', route: '/Dropdown/Daerah' },
    { id: 4, title: 'Tentang', route: '/Dropdown/Tentang' }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleDropdown}>
            <Ionicons name="menu" size={28} color="#fff" style={styles.icon} />
          </TouchableOpacity>

          {/* Logo dan Judul */}
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/images/batik-icon.png')} style={styles.logo} />
            <Text style={styles.title}>Tentang</Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="notifications" size={28} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
        
        {/* Dropdown Menu */}
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

      {/* Konten Sejarah */}
     <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Tentang Aplikasi Batik History</Text>

        {/* Deskripsi Sistem */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>Apa Itu Batik History?</Text>
          <Text style={styles.text}>
            Batik History adalah sebuah aplikasi yang bertujuan untuk memperkenalkan dan melestarikan budaya batik di Indonesia.
            Sistem ini menyediakan berbagai informasi mengenai sejarah batik, karya seni batik, daerah asal motif batik, serta 
            penjelasan tentang makna setiap motif yang ada.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Fitur Utama</Text>
          <Text style={styles.text}>
            1️⃣ **Sejarah Batik** - Menyediakan informasi lengkap tentang asal-usul dan perkembangan batik di Indonesia.{'\n'}
            2️⃣ **Karya Batik** - Galeri berbagai karya batik dari berbagai daerah dan seniman batik ternama.{'\n'}
            3️⃣ **Daerah Batik** - Menjelaskan motif khas batik dari berbagai daerah di Indonesia.{'\n'}
            4️⃣ **Tentang** - Memberikan informasi mengenai fungsi sistem ini dalam mengenalkan batik ke masyarakat luas.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Tujuan Aplikasi</Text>
          <Text style={styles.text}>
            📌 Meningkatkan kesadaran masyarakat terhadap budaya batik.{'\n'}
            📌 Melestarikan batik sebagai warisan budaya yang diakui UNESCO.{'\n'}
            📌 Mempermudah akses informasi bagi pelajar, peneliti, dan pecinta batik.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Dukungan & Pengembangan</Text>
          <Text style={styles.text}>
            Aplikasi ini terus dikembangkan agar dapat menyediakan informasi yang lebih lengkap dan akurat.
            Dukungan serta saran dari pengguna sangat kami harapkan untuk meningkatkan kualitas aplikasi ini.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerWrapper: { position: 'relative', zIndex: 10 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#8C4843',
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 4,
  },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#8C4843', marginBottom: 20, textAlign: 'center' },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  subtitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  text: { fontSize: 16, color: '#555', lineHeight: 22 },
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
  content: { padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#8C4843', marginBottom: 10 },
  paragraph: { fontSize: 16, lineHeight: 24, color: '#333', marginBottom: 10 },
});
