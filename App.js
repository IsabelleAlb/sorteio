import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState('');
  const [lista, setLista] = useState([]); // ← Corrigido aqui

  function addNumero() {
    if (numero.trim() !== '') {
      setLista((listaAnterior) => [...listaAnterior, numero]);
      setNumero(''); // limpa o input
    }
  }

  function sortear(){

  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha seu número da sorte</Text>
      <TextInput
        style={styles.input}
        value={numero}
        onChangeText={(texto) => setNumero(texto)} // ← Corrigido aqui
        placeholder="Número"
        keyboardType="numeric"
      />
      <View style={styles.containerBtn}>
      <TouchableOpacity onPress={addNumero}>
        <Text style={styles.styleBtn}>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sortear}>
        <Text style={styles.styleBtn}>Sortear</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.lista}>
        {lista.map((obj, index) => (
          <View key={index}>
            <Text>{obj}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  titulo: {
    textAlign: 'center',
    marginTop: 180,
    fontSize: 18
  },
  input: {
    backgroundColor: '#ccc',
    borderRadius: 50,
    margin: 15,
    padding: 15
  },
  lista: {
    marginTop: 20
  },
  containerBtn: {
    flexDirection: "row",
    marginHorizontal: 40,
    justifyContent: "space-evenly",
    borderRadius: 8
  },

  styleBtn: {
    padding: 10,
    fontSize: 13,
    backgroundColor: "#0B5CFF",
    fontWeight: "bold",
    opacity: '75%',
    borderRadius: 20
  }

});
