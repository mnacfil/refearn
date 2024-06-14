import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const MarketPlace = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex w-full h-full items-center justify-center">
          <Text>Find in Market place</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarketPlace;
