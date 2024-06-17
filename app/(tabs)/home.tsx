import { View, Text, ScrollView, Linking, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { CustomModal } from "@/components/Modal";

const Home = () => {
  const [form, setForm] = useState({
    whatsapp: "",
    viber: "",
    number: "",
  });

  const handleChangeOnWhatsApp = (e: string) => {
    setForm({ ...form, whatsapp: e });
  };

  const handleChangeOnViber = (e: string) => {
    setForm({ ...form, viber: e });
  };

  const handleChangeOnNumber = (e: string) => {
    setForm({ ...form, number: e });
  };

  const reset = () => {
    setForm({ whatsapp: "", viber: "", number: "" });
  };

  const handleInviteViaWhatsApp = () => {
    const encodedMessage = encodeURIComponent(form.whatsapp);
    const url = form.number
      ? `whatsapp://send?phone=${form.number}&text=${encodedMessage}`
      : `whatsapp://send?text=${encodedMessage}`;

    console.log("Attempting to open URL:", url); // Debugging step

    Linking.openURL(url).catch((err) => {
      console.error("An error occurred", err);
      Alert.alert("An error occurred", "Please ensure WhatsApp is installed.");
    });
    reset();
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
            value={form.whatsapp}
            onChange={handleChangeOnWhatsApp}
            phone={form.number}
            onChangeNumber={handleChangeOnNumber}
            handlePress={handleInviteViaWhatsApp}
            type="whatsapp"
            placeholder="Invite link here or message..."
          />
          <CustomModal
            value={form.viber}
            onChange={handleChangeOnViber}
            phone={form.number}
            onChangeNumber={handleChangeOnNumber}
            handlePress={() => {}}
            type="viber"
            placeholder="Invite link here or message..."
          />
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
