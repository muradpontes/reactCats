import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, Switch } from 'react-native'
import Busca from './Busca' 

export default function App() {
  
  const [cep, setCEP] = useState('')
  const [address, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [district, setDistrict] = useState('')


  const keepCEP = (value) => {
    setCEP(value)
  }

  const buscar = async () => {
    let url = 'https://cep.awesomeapi.com.br/json/' + cep
    let result = await fetch(url)
    let dados = await result.json()
    setAdress(dados.address)
    setDistrict(dados.district)
    setCity(dados.city)
    setState(dados.state)
  }

  return (
    <View style={styles.container}>
    <Image source={ require('./assets/iconCat.png') } />
    <Text> </Text>
      <Text style={styles.titulo}> App de adoção via CEP</Text>
      <Text> </Text>
      <Image
        source={{
          uri: 'https://images-na.ssl-images-amazon.com/images/I/61CzZ1b1NhL.jpg',
        }}
        style={{ width: 200, height: 200, borderRadius: 200 / 2}}
      />
      <Text> </Text>
      <TextInput placeholder='digite o seu CEP' onChangeText={keepCEP} style={styles.input}/>
      <Text> </Text>
      <Button title='adotar' onPress={buscar} />
      <Text> </Text>


      <Text>Endereço: {address} </Text>
      <Text>Bairro: {district} </Text>
      <Text>Cidade: {city} </Text>
      <Text>Estado: {state} </Text>
   
      <Text> </Text>  
      
      <Switch />
      <Text>Puxe para reservar esse gatinho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98fb98',
    alignItems: 'center',
    justifyContent: 'center',

  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 150,
    backgroundColor: '#fff',
    height: 20,
    borderRadius: 20,
    textAlign: 'center',
  },
});
