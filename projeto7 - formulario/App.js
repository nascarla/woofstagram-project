import React from "react";
import { ScrollView, Button, StyleSheet, Text, View } from "react-native";
import InputWithLabel from "./InputWithLabel.js";
import { Formik } from "formik";

export default function App() {
  return (
    <Formik
      initialValues={{
        email: "",
        senha: "",
        confirmarSenha: "",
        nomePet: "",
        aniversario: "",
        raca: "",
        brinquedo: "",
      }}
      // 2. Lógica de envio e validação de senha [cite: 38, 39]
      onSubmit={(values) => {
        if (values.senha !== values.confirmarSenha) {
          alert("As senhas não coincidem!");
        } else {
          console.log("Dados do Woofstagram:", values);
        }
      }}
    >
      {/* 3. Função de renderização com as ferramentas do Formik [cite: 33, 35] */}
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView style={styles.screen}>
          <Text style={styles.title}>Woofstagram 🐾</Text>

          <InputWithLabel
            label="E-mail"
            placeholder="exemplo@pet.com"
            value={values.email} // Usa o valor do Formik [cite: 37]
            onChangeText={handleChange("email")} // Função do Formik [cite: 37]
          />

          <InputWithLabel
            label="Senha"
            placeholder="******"
            secureTextEntry={true} // Esconde o valor digitado [cite: 18, 19]
            value={values.senha}
            onChangeText={handleChange("senha")}
          />

          <InputWithLabel
            label="Confirmar Senha"
            placeholder="******"
            secureTextEntry={true}
            value={values.confirmarSenha}
            onChangeText={handleChange("confirmarSenha")}
          />

          <InputWithLabel
            label="Nome do Pet"
            placeholder="Rex"
            value={values.nomePet}
            onChangeText={handleChange("nomePet")}
          />

          <InputWithLabel
            label="Aniversário"
            placeholder="DD/MM/AAAA"
            value={values.aniversario}
            onChangeText={handleChange("aniversario")}
          />

          <InputWithLabel
            label="Raça"
            placeholder="Ex: Poodle"
            value={values.raca}
            onChangeText={handleChange("raca")}
          />

          <InputWithLabel
            label="Brinquedo Favorito"
            placeholder="Ex: Bolinha"
            value={values.brinquedo}
            onChangeText={handleChange("brinquedo")}
          />

          <View style={{ marginBottom: 40 }}>
            <Button title="Cadastrar" onPress={handleSubmit} />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 20, marginTop: 40 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
});
