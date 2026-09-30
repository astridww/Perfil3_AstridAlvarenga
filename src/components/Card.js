import { View, Text, Image, StyleSheet } from "react-native";

export default function Card({ title, image, description }) {
 return (
<View style={styles.card}>
<Image source={{ uri: image }} style={styles.img} />
<Text style={styles.title}>{title}</Text>
<Text>{description}</Text>
</View>
 );
}

const styles = StyleSheet.create({
 card: {
   backgroundColor: "#fff",
   borderRadius: 12,
   padding: 12,
   margin: 8,
   elevation: 3,
 },
 img: { width: "100%", height: 200, borderRadius: 8 },
 title: { fontSize: 18, fontWeight: "bold", marginVertical: 6 },
});