import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { referrals } from "@/data/my-referral";
import { icons } from "@/constants";
import StatusBadge, { StatusBadgeProps } from "@/components/StatusBadge";
import { formatInvitationDate } from "@/util/date";

const MyReferral = () => {
  const [form, setForm] = useState({
    name: "",
  });

  const submit = () => {};

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-4">
          <Text className="py-4">My Referrals</Text>

          <View className="justify-between items-center flex-row w-full">
            <FormField
              placeholder="Search by name"
              value={form.name}
              handleChangeText={(value: any) =>
                setForm({ ...form, name: value })
              }
              otherStyles="flex-1 mr-2"
            />
            <CustomButton
              title="Refresh"
              handlePress={submit}
              containerStyles="w-[90px]"
            />
          </View>

          <View className="mt-8 divide-y divide-solid divide-gray-300">
            {referrals.map((referral) => (
              <View className="flex items-center justify-between w-full flex-row py-2">
                <View className="flex items-center space-x-4 flex-row">
                  <Image
                    source={icons.profile}
                    className="w-8 h-8 rounded-full"
                    resizeMode="contain"
                  />
                  <View className="justify-between">
                    <Text className="text-base font-pmedium">
                      {referral.name}
                    </Text>
                    <Text className="text-xs text-gray-500">
                      {formatInvitationDate(referral.date)}
                    </Text>
                  </View>
                </View>
                <StatusBadge
                  title={referral.status}
                  type={referral.status as StatusBadgeProps["type"]}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyReferral;
