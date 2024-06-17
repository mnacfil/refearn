import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { ComponentPropsWithRef, useState } from "react";
import { icons } from "@/constants";

interface FormFieldProps extends ComponentPropsWithRef<"input"> {
  value: string;
  title?: string;
  placeholder?: string;
  otherStyles?: string;
  keyBoardType?: string;
  handleChangeText: (e: any) => void;
}

const FormField = ({
  title,
  value,
  placeholder,
  otherStyles,
  keyBoardType,
  handleChangeText,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {title && (
        <Text className="text-base text-gray-500 font-pmedium">{title}</Text>
      )}
      <View className="border-2 border-black-100 w-full h-16 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row px-4">
        <TextInput
          value={value}
          className="flex-1 text-white text-base"
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
