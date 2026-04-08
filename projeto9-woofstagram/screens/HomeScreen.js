import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Heading, WoofCard, WoofPost } from "../components/Components";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Heading>Trending Woofs</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.woofs.map((woof) => (
          <WoofCard key={woof.id} name={woof.name} avatar={woof.avatar} />
        ))}
      </ScrollView>

      <Heading>New Woof Posts</Heading>
      {data.posts.map((post) => (
        <WoofPost
          key={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
        />
      ))}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F5F5F5" },
});

// Dados movidos para cá para que a tela funcione sozinha na navegação
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
      description: "How to keep your Woof happy and healthy.",
    },
    {
      id: "post-2",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e",
      title: "WOOFS & FRIENDS",
      description: "Socializing is key to a balanced pet.",
    },
    {
      id: "post-3",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
      title: "GOOD WOOFS",
      description: "Training is a form of love.",
    },
  ],
};
