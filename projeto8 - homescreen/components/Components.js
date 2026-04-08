import { View, Text, Image, StyleSheet } from "react-native";

export const Avatar = ({ url }) => (
  <Image source={{ uri: url }} style={styles.avatar} />
);

export const Heading = ({ children }) => (
  <Text style={styles.heading}>{children}</Text>
);

export const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

export const WoofCard = ({ name, avatar }) => (
  <View style={styles.woofCard}>
    <Avatar url={avatar} />
    <View style={styles.titleContainer}>
      <Title>{name}</Title>
    </View>
  </View>
);

export const WoofPost = ({ image, title, description }) => (
  <View style={styles.woofPost}>
    <Image source={{ uri: image }} style={styles.postImage} />

    <View style={styles.postContent}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text numberOfLines={2} style={styles.postDescription}>
        {description}
      </Text>
    </View>
  </View>
);

// Estilos centralizados
const styles = StyleSheet.create({
  // Estilos do Passo 1
  avatar: { width: 64, height: 64, borderRadius: 32 },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#000",
  },
  title: { fontSize: 14, fontWeight: "600", textTransform: "uppercase" },

  // Estilos (WoofCard)
  woofCard: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    alignItems: "center",
    width: 110,
  },
  titleContainer: { marginTop: 8 },

  // Estilos (WoofPost)
  woofPost: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2, // Sombra básica para Android
  },
  postImage: { flex: 1, height: 100 },
  postContent: { flex: 2, padding: 12, justifyContent: "center" },
  postTitle: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  postDescription: { fontSize: 13, color: "#666" },
});
