import React from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 1,
      }}/>

      <View style={{
        backgroundColor: "gold",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "tomato",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "red",
        flex: 1,
      }}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});