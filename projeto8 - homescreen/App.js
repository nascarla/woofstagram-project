import { SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen data={data} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Fundo leve para destacar os cartões
  },
});

// ---  DADOS DA "API" FAKE  ---
const data = {
  woofs: [
    {
      id: "woof-1",
      name: "Rex",
      avatar: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    },
    {
      id: "woof-2",
      name: "Ball-R",
      avatar: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
    },
    {
      id: "woof-3",
      name: "Happy",
      avatar: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
    },
    {
      id: "woof-4",
      name: "Fl",
      avatar: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
    },
  ],
  posts: [
    {
      id: "post-1",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9",
      title: "HAPPY WOOFS",
      description:
        "How to keep your Woof happy and healthy. We've asked some of the best experts in the field.",
    },
    {
      id: "post-2",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e",
      title: "WOOFS & FRIENDS",
      description:
        "Best friends are important for humans, but also for dogs. Socializing is key to a balanced pet.",
    },
    {
      id: "post-3",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
      title: "GOOD WOOFS",
      description:
        "When they behave right, they are not a danger to society. Training is a form of love.",
    },
  ],
};
