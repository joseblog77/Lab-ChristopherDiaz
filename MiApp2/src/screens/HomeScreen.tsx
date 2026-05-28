import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import { useAuth } from "../contexts/AuthContext";
import { i18n, useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ route, navigation }: Props) {
  const { user } = useAuth();
  const { changeLanguage, clearLanguage, language } = useLanguage();
  const { colors, theme } = useTheme();

  const handleLoadSettings = () => {
    navigation.navigate("UserTabs");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scroll: {
      padding: 20,
    },
    heroCard: {
      backgroundColor: colors.primary,
      borderRadius: 16,
      padding: 20,
      marginBottom: 20,
    },
    heroGreeting: {
      fontSize: 13,
      color: "rgba(255,255,255,0.7)",
      marginBottom: 4,
    },
    heroName: {
      fontSize: 22,
      fontWeight: "700",
      color: "#fff",
    },
    heroEmail: {
      fontSize: 12,
      color: "rgba(255,255,255,0.6)",
      marginTop: 4,
    },
    sectionLabel: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 10,
      marginTop: 4,
    },
    infoCard: {
      backgroundColor: colors.inputBackground,
      borderRadius: 12,
      padding: 14,
      marginBottom: 12,
    },
    infoLabel: {
      fontSize: 12,
      color: colors.textSecondary,
      marginBottom: 4,
    },
    infoValue: {
      fontSize: 15,
      fontWeight: "600",
      color: colors.text,
    },
    langRow: {
      flexDirection: "row",
      gap: 8,
      marginTop: 12,
      marginBottom: 16,
    },
    buttonRow: {
      gap: 10,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Hero */}
        <View style={styles.heroCard}>
          <Text style={styles.heroGreeting}>Bienvenido de vuelta</Text>
          <Text style={styles.heroName}>Hola, {user?.email?.split("@")[0]} 👋</Text>
          <Text style={styles.heroEmail}>{user?.email}</Text>
        </View>

        {/* Idioma */}
        <Text style={styles.sectionLabel}>Idioma</Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Idioma actual</Text>
          <Text style={styles.infoValue}>
            {language === "en" ? "English" : language === "es" ? "Español" : "Por defecto"}
          </Text>
        </View>

        <View style={styles.langRow}>
          <CustomButton title="EN" onPress={() => changeLanguage("en")} variant="secondary" />
          <CustomButton title="ES" onPress={() => changeLanguage("es")} variant="secondary" />
          <CustomButton title="Limpiar" onPress={clearLanguage} variant="tertiary" />
        </View>

        {/* Navegación */}
        <Text style={styles.sectionLabel}>Navegación</Text>
        <View style={styles.buttonRow}>
          <CustomButton
            title={i18n.t("goToSettings")}
            onPress={handleLoadSettings}
          />
        </View>
      </ScrollView>
    </View>
  );
}
