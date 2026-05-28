import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { i18n } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("mjsalinas@unitec.edu");
  const [password, setPassword] = useState("1234");
  const { login } = useAuth();
  const { colors } = useTheme();

  const handleLogin = () => {
    try {
      const allowed = login(email);
      if (allowed) {
        navigation.navigate("UserTabs");
      } else {
        console.log("no tiene acceso");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: "700",
      color: colors.primary,
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 32,
    },
    inputsWrapper: {
      width: "100%",
      gap: 4,
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

      <View style={styles.inputsWrapper}>
        <CustomInput
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={setEmail}
        />
        <CustomInput
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={setPassword}
        />
      </View>

      <CustomButton title={i18n.t("signIn")} onPress={handleLogin} />
    </View>
  );
}
