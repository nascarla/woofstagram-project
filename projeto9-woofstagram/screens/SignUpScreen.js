import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputWithLabel from "./InputWithLabel";

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <InputWithLabel label="Nome Completo" placeholder="Nome" />
      <InputWithLabel label="E-mail" placeholder="email@exemplo.com" />
      <InputWithLabel
        label="Senha"
        placeholder="Crie uma senha"
        secureTextEntry
      />

      <Button
        title="Finalizar Cadastro"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 20, justifyContent: "center" },
});
