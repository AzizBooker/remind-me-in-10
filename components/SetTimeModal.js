import React from "react";
import { useState } from "react";
import { View } from "react-native";
import NumberPlease from "react-native-number-please";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
export default function SetTimeModal() {
  const [modalVisible, setVisible] = useState(false);
  const hideModal=()=>setVisible(false)
  const showModal=()=>setVisible(true)
  return (
    <Provider>
      <Portal>
        <Modal dismissable={true} visible={false}>
          <Text>Example Modal</Text>
        </Modal>
      </Portal>
    </Provider>
  );
}
