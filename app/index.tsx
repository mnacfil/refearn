import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center px-4">
          <Image
            source={images.homepage}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
        </View>
        <View className="mt-5">
          <Text className="text-3xl text-white font-bold text-center">
            Discover Endless Possibilities with{" "}
            <Text className="text-secondary-200">Refearn</Text>
          </Text>
        </View>
        <Text className="text-gray-100 mt-7 text-center text-sm font-pregular">
          Where creativity meets innovation: embark on a journey of limitless
          exploration with Refearn
        </Text>
        {/* Todo: add authentication */}
        <CustomButton
          title="Continue with Email"
          handlePress={() => router.push("/home")}
          containerStyles="w-full mt-7"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
