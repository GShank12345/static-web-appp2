import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}>
      <Text style={styles.text}>About Sreen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text:
  {color: "blue"}
})
