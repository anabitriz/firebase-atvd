import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default function Cotacoes() {
  const [dados, setDados] = useState([]);
  const [dataHora, setDataHora] = useState("");

  const buscarCotacoes = async () => {
    try {
      const response = await fetch("https://economia.awesomeapi.com.br/json/all");
      const json = await response.json();

      // transforma objeto em array
      const lista = Object.values(json);

      setDados(lista);
      setDataHora(new Date().toLocaleString());
    } catch (error) {
      console.log("Erro ao buscar cotações:", error);
    }
  };

  useEffect(() => {
    buscarCotacoes();
  }, []);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.titulo}>
          Conversor de Moedas <Text style={styles.pro}>Pro</Text>
        </Text>
      </View>

      {/* ATUALIZAÇÃO */}
      <View style={styles.cardAtualizacao}>
        <Text style={styles.tituloAtualizacao}>Cotação Atual</Text>
        <Text style={styles.textoAtualizacao}>
          Última atualização: {dataHora}
        </Text>
      </View>

      {/* LISTA */}
      <ScrollView>
        {dados.map((item) => {
          const valor = parseFloat(item.bid);
          const variacao = parseFloat(item.pctChange);
          const flag = item.code.substring(0, 2).toLowerCase();
          return (
            <View style={styles.card} key={item.code}>
              <View style={styles.linha}>
                <View style={styles.bandeiras}>
                  <Image
                   source={{ uri: `https://flagcdn.com/w80/${flag}.png` }}
                    style={styles.bandeira}
                  />
                  <Image
                    source={{ uri: "https://flagcdn.com/w80/br.png" }}
                    style={[styles.bandeira, styles.bandeiraDeCima]}
                  />
                </View>

                <View>
                  <Text style={styles.moeda}>
                    {item.code} / BRL
                  </Text>
                  <Text style={styles.subtitulo}>
                    {item.name}
                  </Text>
                </View>
              </View>

              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.valor}>
                  R$ {valor.toFixed(2)}
                </Text>

                <Text
                  style={[
                    styles.percentual,
                    { color: variacao >= 0 ? "#2ECC71" : "#E74C3C" },
                  ]}
                >
                  {variacao >= 0 ? "▲" : "▼"}{" "}
                  {Math.abs(variacao).toFixed(2)}%
                </Text>
              </View>
            </View>
          );
        })}

        <TouchableOpacity style={styles.botao} onPress={buscarCotacoes}>
          <Text style={styles.botaoTexto}>Atualizar Cotações</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
  },

  header: {
    backgroundColor: "#2F3E77",
    padding: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  titulo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  pro: {
    color: "#FFA94D",
  },

  cardAtualizacao: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
  },

  tituloAtualizacao: {
    fontWeight: "bold",
    fontSize: 16,
  },

  textoAtualizacao: {
    color: "#666",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
  },

  linha: {
    flexDirection: "row",
    alignItems: "center",
  },

  bandeiras: {
    flexDirection: "row",
    marginRight: 10,
  },

  bandeira: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  bandeiraDeCima: {
    marginLeft: -10,
    marginTop: 12,
  },

  moeda: {
    fontWeight: "bold",
    fontSize: 16,
  },

  subtitulo: {
    color: "#777",
    fontSize: 12,
  },

  valor: {
    fontSize: 18,
    fontWeight: "bold",
  },

  percentual: {
    fontSize: 12,
    marginTop: 2,
  },

  botao: {
    backgroundColor: "#3AAFA9",
    margin: 20,
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    elevation: 5,
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
