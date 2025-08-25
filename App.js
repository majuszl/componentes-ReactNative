import {Button, Text, View, StyleSheet} from "react-native";
import {useState} from "react";
import Titulo from "./components/Titulo";

export default function App() {
  const [numero, setNumero] = useState(0);

  function alerta() {
      alert("Você clicou no botão")
  }

  return (
      <View style={styles.container}>
          <Titulo texto={"SEJA BEM-VINDO!"} />
          {/* BTN */}
          <Button title={"Obrigada!"} onPress={alerta} />
          <View>
              <View style={styles.container}>
                  <Image source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos%2Fnutricionista-desenho&psig=AOvVaw0U9Tybp5K8ejyl_Edg_8aa&ust=1756210032432000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjL_6z2pY8DFQAAAAAdAAAAABAE' }}/>
              </View>
              <Text>Marilsa Gomes Santieri</Text>
              <Text>Esta é a minha página de exibição, sou uma nutricionista.</Text>
          </View>
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
