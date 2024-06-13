import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants";

type TabIconProps = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ color, focused, icon, name }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        className="w-6 h-6"
        tintColor={color}
        resizeMode="contain"
      />
      <Text
        className={`text-xs ${focused ? "font-psemibold" : "font-pregular"}`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.home}
              name="Home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="my-referral"
        options={{
          title: "My Referral",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.home}
              name="My Referral"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="market-place"
        options={{
          title: "Market Place",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.home}
              name="Market Place"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.home}
              name="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
