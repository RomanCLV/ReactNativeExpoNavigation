import { View, Text, Switch, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <ScrollView style={styles.container}>
      {/* Section Compte */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>COMPTE</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="person-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Modifier le profil</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="lock-closed-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Changer le mot de passe</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="card-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Moyens de paiement</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="location-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Adresses de livraison</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </View>
      </View>

      {/* Section Notifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>NOTIFICATIONS</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="notifications-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Notifications push</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: "#d1d5db", true: "#c084fc" }}
            thumbColor={notifications ? "#9333ea" : "#f3f4f6"}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="mail-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Newsletter</Text>
          </View>
          <Switch
            value={newsletter}
            onValueChange={setNewsletter}
            trackColor={{ false: "#d1d5db", true: "#c084fc" }}
            thumbColor={newsletter ? "#9333ea" : "#f3f4f6"}
          />
        </View>
      </View>

      {/* Section Préférences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PRÉFÉRENCES</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="moon-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Mode sombre</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#d1d5db", true: "#c084fc" }}
            thumbColor={darkMode ? "#9333ea" : "#f3f4f6"}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="language-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Langue</Text>
          </View>
          <View style={styles.settingRight}>
            <Text style={styles.settingValue}>Français</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </View>
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="globe-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Pays</Text>
          </View>
          <View style={styles.settingRight}>
            <Text style={styles.settingValue}>France</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </View>
        </View>
      </View>

      {/* Section Aide */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AIDE & SUPPORT</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="help-circle-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Centre d'aide</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="chatbubble-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Nous contacter</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="document-text-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Conditions d'utilisation</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="shield-checkmark-outline" size={22} color="#666" />
            <Text style={styles.settingLabel}>Confidentialité</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </View>
      </View>

      {/* Version */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  section: {
    backgroundColor: "#fff",
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#9ca3af",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f9fafb",
    letterSpacing: 1,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    color: "#374151",
  },
  settingRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  settingValue: {
    fontSize: 14,
    color: "#9ca3af",
  },
  versionContainer: {
    alignItems: "center",
    paddingVertical: 30,
  },
  versionText: {
    fontSize: 12,
    color: "#9ca3af",
  },
});