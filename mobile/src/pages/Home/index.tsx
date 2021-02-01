import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { RectButton } from "react-native-gesture-handler";

const Home: React.FC = () => {
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate("Points", {
      uf,
      city,
    });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        source={require("../../assets/UI-UX-vai.png")}
        style={styles.container}
        imageStyle={{
          width: 400,
          height: 500,
          opacity : 0.6
          
          
          
        }}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo-mobile.png")} />
          <View>
            <Text style={styles.title}>
             seus produtos bem vistos!!
            </Text>
            <Text style={styles.description}>
             Aqui você pode compatilhar seus produtos com outras pessoas.
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            value={uf}
            onChangeText={setUf}
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            placeholder="UF"
          />
          <TextInput
            style={styles.input}
            placeholder="cidade"
            value={city}
            autoCorrect={false}
            onChangeText={setCity}
            
          />
          <RectButton
            style={styles.button}
            onPress={() => handleNavigateToPoints()}
          >
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" color="#fff" size={24} />
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#000",
    fontSize: 34,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 5,
  },

  description: {
    color: "#000",
    fontSize: 20,
    marginTop: 16,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 460,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 25,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    
   
  },

  button: {
    backgroundColor: "#000",
    height: 60,
    flexDirection: "row",
    borderRadius: 25,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
   
    
    
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

export default Home;
