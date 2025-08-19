import {Button, Text, View, StyleSheet} from "react-native";
import {useState} from "react";
import Titulo from "./components/Titulo";

export default function App() {
  const [numero, setNumero] = useState(0);

  function alert() {
      alert("Você clicou no botão")
  }

  return (
      <View style={styles.container}>
        <Titulo texto={"SEJA BEM-VINDO!"} />
        {/* BTN */}
        <Button title={"Obrigada!"} onPress={alert} />
      </View>
      <View>
          <Text>Marilsa Gomas Santieri</Text>
          <Text>Esta é a minha página de exibição, sou uma nutricionista.</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  }
})
