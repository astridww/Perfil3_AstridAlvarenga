import { View, StyleSheet } from "react-native";
import StudentCard from "../components/StudentCard";

export default function StudentScreen({ navigation }) {
  return (
<View style={styles.container}>
<StudentCard
        name="Astrid Alvarenga"
        carnet="20240476"
        section="1A y academica sección A-4"
        onPress={() => navigation.navigate("Api")}
      />
</View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#F3F0FF",
  },
});