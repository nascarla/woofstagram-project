import { ScrollView, View } from "react-native";
import { Heading, WoofCard, WoofPost } from "../components/Components";

export default function HomeScreen({ data }) {
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
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
