import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SejarahScreen() {
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
            <Text style={styles.title}>Sejarah Batik</Text>
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
      <ScrollView style={styles.content}>
        <Image source={require('../../assets/images/Sejarah-batik.jpg')} style={styles.image} />
        <Text style={styles.heading}>Sejarah Batik</Text>
        <Text style={styles.paragraph}>
          Batik merupakan warisan budaya Indonesia yang telah ada sejak zaman kuno. Kata "batik" berasal dari bahasa Jawa, 
          yaitu "amba" yang berarti menulis dan "titik" yang berarti titik. Teknik membatik telah dikenal sejak berabad-abad lalu, 
          dengan bukti sejarah menunjukkan bahwa kain batik digunakan oleh kalangan kerajaan di Nusantara.
        </Text>
        <Text style={styles.paragraph}>
          Pada abad ke-17 hingga ke-19, batik berkembang pesat di Pulau Jawa, terutama di daerah seperti Yogyakarta, Surakarta, Pekalongan, dan Cirebon.
          Motif batik juga berkembang, mencerminkan status sosial, filosofi, dan kepercayaan masyarakat setempat.
        </Text>
        <Text style={styles.paragraph}>
          UNESCO mengakui batik sebagai Warisan Budaya Takbenda pada tahun 2009. Hingga kini, batik tidak hanya dikenal di Indonesia, 
          tetapi juga telah mendunia sebagai simbol seni dan budaya khas Nusantara.
        </Text>
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
