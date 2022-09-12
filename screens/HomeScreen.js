import { StyleSheet,Image, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-6  mt-6`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            marginLeft:10
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
 
});
