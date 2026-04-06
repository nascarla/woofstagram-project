import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// O componente aceita props para label, placeholder, valor e a função de mudança [cite: 9, 10, 11, 12, 13]
const InputWithLabel = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry} // Usado para esconder a senha [cite: 19]
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { fontWeight: "bold", marginBottom: 5 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5 },
});

export default InputWithLabel;
