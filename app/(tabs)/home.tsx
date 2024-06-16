import { View, Text, ScrollView, Linking } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { CustomModal } from "@/components/Modal";

const Home = () => {
  const handleInviteViaWhatsApp = (message: string) => {
    Linking.openURL(`whatsapp://send?text=${message}&phone=09485803262`);
  };
  const handleInviteViber = () => {};

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full px-2">
          <View className="p-2 bg-gray-300 h-[130px] rounded-xl flex justify-center">
            <View className="mb-3">
              <Text className="font-psemibold">Available Money</Text>
              <Text className="text-secondary-100 text-2xl font-psemibold">
                P50,000.00
              </Text>
            </View>

            <View className="flex-row gap-2">
              <View className="space-y-1">
                <Text className="font-psemibold">Lifetime earnings </Text>
                <Text>P120,000.00</Text>
              </View>

              <View className="space-y-1">
                <Text className="font-psemibold">Lifetime withdraw </Text>
                <Text>P70,000.00</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-5">
            <Text className="text-white font-pregular">Phonebook(1224)</Text>
            <Text className="text-white font-pregular">See All</Text>
          </View>

          {/* Todo Other content */}
          <CustomModal
            message="open this link on your whats app"
            handlePress={handleInviteViaWhatsApp}
            type="whatsapp"
          />
          <CustomModal
            message="Open this link in your viber"
            handlePress={() => {}}
            type="viber"
          />
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
