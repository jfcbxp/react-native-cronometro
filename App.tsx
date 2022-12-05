import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [numero, setNumero] = useState<number>(0);
  const [timer, setTimer] = useState<NodeJS.Timer>();
  const [ativo, setAtivo] = useState<boolean>(false);
  const [ultimoTempo, setUltimoTempo] = useState<number>(0);

  const limpar = (): void => {
    clearInterval(timer);
    setAtivo(false);
    setUltimoTempo(numero);
    setNumero(0);
  };

  const iniciar = (): void => {
    setTimer(
      setInterval(() => {
        setNumero((numero) => numero + 0.1);
      }, 100)
    );
    setAtivo(true);
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/cronometro.png")} />
      <Text style={styles.timer}>{numero?.toFixed(1)}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar} disabled={ativo}>
          <Text style={styles.btnTexto}>Vai</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar} disabled={!ativo}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {ultimoTempo > 0 ? `Ultimo tempo:${ultimoTempo?.toFixed(1)}` : ""}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00aeef",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    marginTop: -160,
    color: "#FFF",
    fontSize: 65,
    fontWeight: "bold",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },
  areaUltima: {
    marginTop: 40,
  },
  textoCorrida: {
    fontSize: 25,
    fontStyle: "italic",
    color: "#FFF",
  },
});
