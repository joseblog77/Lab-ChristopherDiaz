import { View, Text, Switch, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { useAuth } from "../../contexts/AuthContext";
import { navigationRef } from "../../navigation/NavigationService";

export default function SettingsScreen() {
  const { colors, theme, toggleTheme } = useTheme();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    if (navigationRef.isReady()) {
      navigationRef.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scroll: {
      padding: 16,
    },
    sectionLabel: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.textSecondary,
      letterSpacing: 0.8,
      textTransform: "uppercase",
      marginTop: 16,
      marginBottom: 8,
      marginLeft: 4,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: colors.inputBackground,
      borderRadius: 12,
      paddingHorizontal: 14,
      paddingVertical: 14,
      marginBottom: 6,
    },
    rowLeft: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    rowIcon: {
      fontSize: 20,
      width: 28,
      textAlign: "center",
    },
    rowLabel: {
      fontSize: 15,
      fontWeight: "500",
      color: colors.text,
    },
    rowLabelDanger: {
      fontSize: 15,
      fontWeight: "500",
      color: "#e74c3c",
    },
    rowValue: {
      fontSize: 13,
      color: colors.textSecondary,
    },
    divider: {
      height: 1,
      backgroundColor: colors.inputBackground,
      marginVertical: 4,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Apariencia */}
        <Text style={styles.sectionLabel}>Apariencia</Text>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.rowIcon}>🌙</Text>
            <Text style={styles.rowLabel}>Modo oscuro</Text>
          </View>
          <Switch
            value={theme === "dark"}
            onValueChange={toggleTheme}
            trackColor={{ false: "#ccc", true: colors.secondary }}
            thumbColor={theme === "dark" ? colors.primary : "#fff"}
          />
        </View>

        {/* Idioma */}
        <Text style={styles.sectionLabel}>Idioma</Text>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.rowIcon}>🌐</Text>
            <Text style={styles.rowLabel}>Idioma de la app</Text>
          </View>
          <Text style={styles.rowValue}>Español ▶</Text>
        </View>

        {/* Notificaciones */}
        <Text style={styles.sectionLabel}>Notificaciones</Text>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.rowIcon}>🔔</Text>
            <Text style={styles.rowLabel}>Notificaciones</Text>
          </View>
          <Switch
            value={true}
            trackColor={{ false: "#ccc", true: colors.secondary }}
            thumbColor="#fff"
          />
        </View>

        {/* Cuenta */}
        <Text style={styles.sectionLabel}>Cuenta</Text>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.rowIcon}>👤</Text>
            <Text style={styles.rowLabel}>Perfil</Text>
          </View>
          <Text style={styles.rowValue}>▶</Text>
        </View>

        <TouchableOpacity style={styles.row} onPress={handleLogout}>
          <View style={styles.rowLeft}>
            <Text style={styles.rowIcon}>🚪</Text>
            <Text style={styles.rowLabelDanger}>Cerrar sesión</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}
