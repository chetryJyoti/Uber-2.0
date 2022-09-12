import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: "12ab",
    title: "Get a ride",
    img: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "34cd",
    title: "Order Food",
    img: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

export default function NavOptions() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pt-5 bg-gray-200 m-2 w-35`}>
          <View>
            <Image
              style={{
                width: 120,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: item.img }}
            />
            <Text style={tw`mt-2 p-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon style={
                tw`p-2 bg-black rounded-full w-10 mt-2`
            } name="arrowright" type="antdesign" color="white"/>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
