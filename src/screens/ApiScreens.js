import { FlatList, ActivityIndicator, Text } from "react-native";
import useFetchData from "../hooks/useFetchData";
import Card from "../components/Card";

export default function ApiScreen() {
    const { data, loading, error } = useFetchData(
        "https://rickandmortyapi.com/api/character"
    );

    if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

    if (error) return <Text>{error}</Text>;

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
                <Card
                    title={item.name}
                    image={item.image}
                    description={`${item.species} - ${item.status}`}
                />
            )}
        />
    );
}
