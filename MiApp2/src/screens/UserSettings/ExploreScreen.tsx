import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const CATEGORIES = [
  { icon: "📚", title: "Cursos", subtitle: "12 activos" },
  { icon: "📰", title: "Noticias", subtitle: "5 nuevas" },
  { icon: "🎯", title: "Proyectos", subtitle: "3 en curso" },
  { icon: "⭐", title: "Favoritos", subtitle: "8 guardados" },
];

const FILTERS = ["Todos", "Cursos", "Noticias", "Proyectos"];

export default function ExploreScreen() {
  const { colors, theme } = useTheme();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scroll: {
      padding: 16,
    },
    searchBox: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.inputBackground,
      borderRadius: 12,
      paddingHorizontal: 14,
      paddingVertical: 10,
      marginBottom: 14,
      gap: 8,
    },
    searchIcon: {
      fontSize: 16,
    },
    searchInput: {
      flex: 1,
      fontSize: 14,
      color: colors.text,
    },
    filterRow: {
      flexDirection: "row",
      gap: 8,
      marginBottom: 16,
      flexWrap: "wrap",
    },
    filterChip: {
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: colors.inputBackground,
    },
    filterChipActive: {
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
    },
    filterChipText: {
      fontSize: 13,
      color: colors.textSecondary,
      fontWeight: "500",
    },
    filterChipTextActive: {
      color: "#fff",
    },
    sectionLabel: {
      fontSize: 15,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 12,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
    },
    categoryCard: {
      width: "47%",
      backgroundColor: colors.inputBackground,
      borderRadius: 14,
      padding: 14,
      gap: 6,
    },
    categoryIcon: {
      fontSize: 26,
      marginBottom: 4,
    },
    categoryTitle: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text,
    },
    categorySub: {
      fontSize: 12,
      color: colors.textSecondary,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Buscador */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar contenido..."
            placeholderTextColor={colors.textSecondary}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Filtros */}
        <View style={styles.filterRow}>
          {FILTERS.map((f) => (
            <TouchableOpacity
              key={f}
              style={[styles.filterChip, activeFilter === f && styles.filterChipActive]}
              onPress={() => setActiveFilter(f)}
            >
              <Text
                style={[
                  styles.filterChipText,
                  activeFilter === f && styles.filterChipTextActive,
                ]}
              >
                {f}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Categorías */}
        <Text style={styles.sectionLabel}>Categorías</Text>
        <View style={styles.grid}>
          {CATEGORIES.map((cat) => (
            <View key={cat.title} style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>{cat.icon}</Text>
              <Text style={styles.categoryTitle}>{cat.title}</Text>
              <Text style={styles.categorySub}>{cat.subtitle}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
