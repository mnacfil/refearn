import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import FormField from "./FormField";

const myLink = "https://github.com/mnacfil?tab=repositories";

type CustomModalProps = {
  value: string;
  phone: string;
  onChange: (e: any) => void;
  onChangeNumber: (e: any) => void;
  handlePress: () => void;
  otherStyles?: string;
  type: "viber" | "whatsapp";
  placeholder?: string;
};

export const CustomModal = ({
  value,
  type,
  phone,
  placeholder,
  handlePress,
  onChange,
  onChangeNumber,
}: CustomModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const bg = type === "viber" ? "bg-violet-500" : "bg-green-500";

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FormField
              title="Message or Link"
              value={value}
              handleChangeText={(e: string) => onChange(e)}
              otherStyles="my-7"
              keyBoardType="message"
              placeholder={placeholder}
            />

            <FormField
              title="Number"
              value={phone}
              handleChangeText={(e: string) => onChangeNumber(e)}
              otherStyles="my-7"
              keyBoardType="message"
              placeholder="1234567890..."
            />
            <View className="flex-row gap-2">
              <Pressable
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View className="bg-primary rounded-md min-w-[100px] text-center min-h-[40px] flex justify-center items-center h-min">
                  <Text className="font-pregular text-white uppercase text-base ">
                    close
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => handlePress()}>
                <View
                  className={`${bg} min-h-[40px] flex justify-center items-center min-w-[100px] rounded-md`}
                >
                  <Text className="font-pregular text-white uppercase text-base ">
                    Invite
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View className="min-h-[80px]">
        <Pressable
          className={`${bg} min-h-[40px] flex items-center justify-center rounded-md px-4 py-2`}
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white font-pregular">
            Invite via {type === "viber" ? "Viber" : "WhatsApp"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
