import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

export default function Body() {
  return (
    <ScrollView style={styles.container}>
      {/* Cover Image */}
      <Image
        source={require("../../assets/images/Batik-background.jpg")}
        style={styles.coverImage}
      />

      {/* Content Box */}
      <View style={styles.contentBox}>
        <Text style={styles.title}>Penjelasan</Text>
        <Text style={styles.text}>
          Batik adalah seni tekstil tradisional Indonesia yang memiliki pola dan
          makna mendalam. Setiap motif batik mencerminkan budaya, sejarah, dan
          nilai-nilai yang diwariskan dari generasi ke generasi.
        </Text>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.title}>Tentang Website</Text>
        <Text style={styles.text}>
          Website ini membahas sejarah dan perkembangan Batik dari masa ke masa
          dengan detail serta sumber terpercaya.
        </Text>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Batik Heritage. All Rights Reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    width: width,
    height: width * 0.6,
    resizeMode: "cover",
  },
  contentBox: {
    backgroundColor: "#fff",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
    textAlign: "justify",
  },
  footer: {
    backgroundColor: '#333',
    padding: 16,
    alignItems: 'center',
    marginTop: 50,
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
  },
});
