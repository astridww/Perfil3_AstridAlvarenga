import { View, Text, Pressable, StyleSheet, Image} from "react-native";

function Row({ label, value }) {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

export default function StudentCard({ name, carnet, section, onPress }) {
    return (
        <View style={styles.card}>
            <Image source={require('../../assets/images.jpg')} style={styles.avatar}/>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.divider} />
            <Row label="Carnet" value={carnet} />
            <Row label="Sección y grupo" value={section} />
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}
            >
                <Text style={styles.buttonText}>Ver API</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 24,
        padding: 24,
        alignItems: "center",
        elevation: 6,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#6C5CE7",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    },
    row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 6,
    },
    label: { color: "#888", fontSize: 15 },
    value: { color: "#2d2d2d", fontSize: 15, fontWeight: "600" },
    button: {
        marginTop: 20,
        backgroundColor: "#6C5CE7",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 999,
    },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});