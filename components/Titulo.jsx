import {Text, View, StyleSheet} from "react-native";

export default function Titulo({texto}) {
    return (
        <View>
            <Text style={styles.titulo}> {texto} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        fontSize: 36,
        fontWeight: "bold",
        color: "pink"
    }
})