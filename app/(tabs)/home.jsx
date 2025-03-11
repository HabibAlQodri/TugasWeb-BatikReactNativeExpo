import { View, Text } from 'react-native';
import React from 'react';
import Header from "../../component/Home/Header";
import Body from "../../component/Home/Body";

export default function home() {
  return (
    <View>
      <Header />
      <Body />
    </View>
  );
}