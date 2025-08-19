import {Text, View, StyleSheet} from "react-native";

export default function Btn({titulo}) {
    return (
        <View>
            <Button title={titulo} onPress={acao} color={"blue"} />
        </View>
    )
}