import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputWithLabel from "./InputWithLabel";
import { Heading } from "../components/Components";

export default function SignInScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Heading>Bem-vindo ao Woofstagram</Heading>
      <InputWithLabel label="E-mail" placeholder="seu@email.com" />
      <InputWithLabel label="Senha" placeholder="Sua senha" secureTextEntry />

      <Button
        title="Criar uma conta"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 20, justifyContent: "center" },
});
