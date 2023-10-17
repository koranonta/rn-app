import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { openURL, canOpenURL } from "expo-linking";
import { useState } from "react";

export default function App() {
  const [canOpenEmail, setCanOpenEmail] = useState(false);
  canOpenURL("mailto:chelsea@tripwiretech.com").then((canOpen) => {
    setCanOpenEmail(canOpen);
  });

  const [canOpenTelephone, setCanOpenTelephone] = useState(false);
  canOpenURL("tel:+15555555").then((canOpen) => setCanOpenTelephone(canOpen));

  return (
    <View style={styles.container}>
      <Button
        onPress={() => openURL("https://docs.expo.dev/guides/linking")}
        title="Linking Guide"
      />
      <Button
        onPress={() => openURL("mailto:chelsea@tripwiretech.com")}
        title="Email"
        disabled={!canOpenEmail}
      />
      <Button
        onPress={() => openURL("tel:+15555555")}
        title="Call Fake Number"
        disabled={!canOpenTelephone}
      />
      <Button
        onPress={() => openURL("sms:+15555555")}
        title="Text Fake Number"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
