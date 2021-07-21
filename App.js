import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  const [valor, alteravalor] = useState();
  const [gorgeta, alteraGorteta] = useState();

  return (
    <Tela>
      <Titulo>Calculadora de Gorjetas</Titulo>
      <Input keyboardType="numeric" placeholder="Digite o valor da conta" value={valor} onChangeText={(valor)=>{alteravalor(valor)}}/>

      <BtnView>
        <BtnCalcular color="#269E8C" title="10%" onPress={()=>{alteraGorteta(parseFloat(0.1))}}/>
        <BtnCalcular color="#DEC03A" title="20%" onPress={()=>{alteraGorteta(parseFloat(0.2))}}/>
        <BtnCalcular color="#E09645" title="30%" onPress={()=>{alteraGorteta(parseFloat(0.3))}}/>
      </BtnView>
      
      <Resultado>
        <TituloResultado> Valor da conta</TituloResultado>
        <ItemResultado>R$: {valor}</ItemResultado>
        <TituloResultado> Valor da gorjeta</TituloResultado>
        <ItemResultado>R$: {parseFloat(valor * gorgeta).toFixed(2)}</ItemResultado>
        <TituloResultado> Valor Total</TituloResultado>
        <ItemResultado>R$: {parseFloat(valor * (1 + gorgeta)).toFixed(2)}</ItemResultado>
      </Resultado>
    </Tela>
  );
}

const Tela = styled.View`
    flex: 1;
    alignItems: center;
    backgroundColor: #fff;
    
  
  `;

  const BtnView = styled.View`
    width: 50%;
    margin-top: 20px;
    display: flex;
    flexDirection: row;
    justifyContent: space-around;
  `;


  const Resultado = styled.View`
    width: 100%;
    backgroundColor: #ccc;
    margin-top: 20px;
    align-items:center;

  `;

  const TituloResultado = styled.Text`
    font-size: 20px
    margin-top: 5px;
    
  `;

  const ItemResultado = styled.Text`
    font-size: 16px;
    margin-bottom: 5px;
  `;

  const BtnCalcular = styled.Button`
    margin-left: 10px
  `;

  const Titulo = styled.Text`
    margin-top: 40px;
    fontSize: 20px;

  `;

  const Input = styled.TextInput`
    width: 90%;
    height: 50px;
    backgroundColor: #ccc;
    margin-top: 10px;
    border-radius: 10px
    padding-left: 10px;
  `;


