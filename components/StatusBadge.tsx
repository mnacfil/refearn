import { View, Text } from "react-native";
import React from "react";

export type StatusBadgeProps = {
  type: "accepted" | "rejected" | "pending";
  title: string;
};

const bg = {
  accepted: "bg-green-500",
  rejected: "bg-red-500",
  pending: "bg-yellow-500",
};

const StatusBadge = ({ type, title }: StatusBadgeProps) => {
  return (
    <View
      className={`min-h-[46px] items-center justify-center min-w-[90px] rounded-xl ${bg[type]}`}
    >
      <Text className="capitalize text-sm font-pregular">{title}</Text>
    </View>
  );
};

export default StatusBadge;
