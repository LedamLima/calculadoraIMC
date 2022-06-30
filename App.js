import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    peso:0,
    altura:0,
    imc: 0,    
    legenda:"Inderteminado",
    cor:'#ffeaa1',
  };
  CalcularIMC = () => {
      const  resultado = this.state.peso / (this.state.altura * this.state.altura);

    this.setState({
      imc: Math.ceil(resultado)
    });
    if (resultado < 18.5){
      this.setState({
        legenda: " Magreza",
        cor: '#e74c3c'
      });
    }else if ( resultado >=18.50 &&  resultado < 25){
      this.setState({
        legenda:"Normal",
        cor: '#2ecc71'
      });
    } else if ( resultado >= 25 && resultado <30){
      this.setState({
        legenda:"Sobrepeso",
        cor: '#f1c40f'
      });
       } else if (resultado >=30 && resultado < 40){
        this.setState({
          legenda:"Obesidade",
          cor: '#e67e22'
        });
      } else if ( resultado >=40){
        this.setState({
          legenda:"Obesidade Grave",
          cor: '#c0392b'
        });
      }
    } 
  

  render() { 
      return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>
        
        <View style={[styles.painel,{backgroundColor: this.state.cor}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput 
          style={styles.peso}
          label='peso'
          onChangeText={valor => {
            this.setState({peso: valor.replace(',', '.')});
          } }
          />
          <TextInput 
          style={styles.altura}
          label="altura"
          onChangeText={valor =>{
            this.setState({altura:valor.replace(',', '.')})
          }
          }
           />
          <Button style={styles.button} mode='conteined' onPress={this.CalcularIMC}>
            Calcular
          </Button>
        </View>
      </View>
    );
}
  }  



const styles = StyleSheet.create({
  app: {
    padding: 23,
    margin: 5,
  },
  painel:{
    borderRadius: 5,
    width: 150,
    textAlign: "center",
    alignSelf: 'center',
    marginVertical: 10,
    padding:8,
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  peso: {
    marginVertical: 10,
    marginHorizontal:80,
    backgroundColor:'#95a5a6',
    
  },
  altura: {
    marginVertical:10,
    backgroundColor:'#95a5a6',
    marginHorizontal:80,
  },
  button:{
    backgroundColor: '#1abc9c',
    marginVertical: 10,
    marginHorizontal: 80,
    borderRadius: 60,
  }


});