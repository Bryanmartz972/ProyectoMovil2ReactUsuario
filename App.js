import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Login from './src/componentes/login';
import Registro from './src/componentes/registro';
import Menu from './src/componentes/menu'

export default function App() {
  const [usuario, setUsuario]= useState(null);
  return (
    <Menu></Menu>
  );
}
