import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Karya() {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter(); 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Menu dropdown
  const menuItems = [
    { id: 0, title: 'Beranda', route: '/home' },
    { id: 1, title: 'Sejarah', route: '/Dropdown/Sejarah' },
    { id: 2, title: 'Karya', route: '/Dropdown/Karya' },
    { id: 3, title: 'Daerah', route: '/Dropdown/Daerah' },
    { id: 4, title: 'Tentang', route: '/Dropdown/Tentang' }
  ];

  // Data gambar Batik
  const data = [
    {
      id: '1',
      title: 'Batik Parang',
      description: 'Motif ini melambangkan kekuatan dan keberanian.',
      image: require('../../assets/images/Batik-parang.jpg'),
    },
    {
      id: '2',
      title: 'Batik Kawung',
      description: 'Motif klasik dengan bentuk bulatan seperti buah kawung.',
      image: require('../../assets/images/Batik-kawung.png'),
    },
    {
      id: '3',
      title: 'Batik Mega Mendung',
      description: 'Motif awan yang melambangkan ketenangan dan kebijaksanaan.',
      image: require('../../assets/images/Batik-megamendung.jpg'),
    },
    {
      id: '4',
      title: 'Batik Sidomukti',
      description: 'Motif ini sering digunakan dalam upacara adat dan pernikahan.',
      image: require('../../assets/images/Batik-sidomukti.webp'),
    },
    {
      id: '5',
      title: 'Batik Truntum',
      description: 'Melambangkan cinta kasih yang tulus dan abadi.',
      image: require('../../assets/images/Batik-truntum.avif'),
    },
    {
      id: '6',
      title: 'Batik Cuwiri',
      description: 'Biasanya digunakan dalam upacara adat Jawa sebagai simbol kebijaksanaan.',
      image: require('../../assets/images/Batik-cuwiri.jpg'),
    },
    {
      id: '7',
      title: 'Batik Tambal',
      description: 'Melambangkan harapan untuk perbaikan dan keberuntungan.',
      image: require('../../assets/images/Batik-tambal.jpg'),
    },
    {
      id: '8',
      title: 'Batik Sekar Jagad',
      description: 'Motif ini melambangkan keindahan dan keberagaman budaya.',
      image: require('../../assets/images/Batik-sekarjagad.avif'),
    },
    {
      id: '9',
      title: 'Batik Sogan',
      description: 'Sering digunakan oleh keluarga kerajaan di Yogyakarta dan Solo.',
      image: require('../../assets/images/Batik-sogan.jpg'),
    },
    {
      id: '10',
      title: 'Batik Gentongan',
      description: 'Motif khas Madura dengan warna cerah dan berani.',
      image: require('../../assets/images/Batik-gentongan.webp'),
    },
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
            <Text style={styles.titleHeader}>Karya Batik</Text>
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

      {/* Konten Utama */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.pageTitle}>Galeri Batik Nusantara</Text>

        {/* Galeri Batik (Menggunakan ScrollView Horizontal) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryContainer}>
          {data.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
        </ScrollView>
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
  content: { padding: 20, alignItems: 'center' },
  pageTitle: { fontSize: 22, fontWeight: 'bold', color: '#8C4843', marginBottom: 20 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 40, height: 40, marginRight: 10 },
  titleHeader: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
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
  galleryContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 10, 
    width: width * 0.7, 
  },
  image: { width: '100%', height: 200, borderRadius: 10, resizeMode: 'cover' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 10 },
  description: { fontSize: 16, color: '#555', textAlign: 'center', marginTop: 5 },
});
