import { View, Text, StyleSheet, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      {/* En-tête personnalisé */}
      <View style={styles.header}>
        <Ionicons name="person-circle" size={60} color="#9333ea" />
        <Text style={styles.headerTitle}>Mon App</Text>
        <Text style={styles.headerSubtitle}>Navigation personnalisée</Text>
      </View>

      {/* Séparateur */}
      <View style={styles.separator} />

      {/* Section 1 */}
      <Text style={styles.sectionTitle}>PRINCIPAL</Text>
      
      <Pressable 
        style={[
          styles.drawerItem, 
          pathname === '/' && styles.drawerItemActive
        ]}
        onPress={() => router.push('/')}
      >
        <Ionicons 
          name="home-outline" 
          size={22} 
          color={pathname === '/' ? '#9333ea' : '#666'} 
        />
        <Text style={[
          styles.drawerLabel,
          pathname === '/' && styles.drawerLabelActive
        ]}>
          Page 1
        </Text>
      </Pressable>

      <Pressable 
        style={[
          styles.drawerItem, 
          pathname === '/page2' && styles.drawerItemActive
        ]}
        onPress={() => router.push('/page2')}
      >
        <Ionicons 
          name="settings-outline" 
          size={22} 
          color={pathname === '/page2' ? '#9333ea' : '#666'} 
        />
        <Text style={[
          styles.drawerLabel,
          pathname === '/page2' && styles.drawerLabelActive
        ]}>
          Page 2
        </Text>
      </Pressable>

      {/* Séparateur */}
      <View style={styles.separator} />

      {/* Section 2 */}
      <Text style={styles.sectionTitle}>AUTRES</Text>

      <Pressable 
        style={styles.drawerItem}
        onPress={() => router.push('/page3')}
      >
        <Ionicons name="documents-outline" size={22} color="#666" />
        <Text style={styles.drawerLabel}>Page 3</Text>
      </Pressable>

      <Pressable 
        style={styles.drawerItem}
        onPress={() => router.push('/page4')}
      >
        <Ionicons name="information-circle-outline" size={22} color="#666" />
        <Text style={styles.drawerLabel}>Page 4</Text>
      </Pressable>

      <Pressable 
        style={styles.drawerItem}
        onPress={() => router.push('/page5')}
      >
        <Text style={styles.drawerLabel}>Page 5</Text>
      </Pressable>

      {/* Séparateur */}
      <View style={styles.separator} />

      {/* Pied de page */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#111',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9ca3af',
    paddingHorizontal: 20,
    paddingVertical: 10,
    letterSpacing: 1,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 8,
    gap: 15,
  },
  drawerItemActive: {
    backgroundColor: '#ede9fe',
  },
  drawerLabel: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  drawerLabelActive: {
    color: '#9333ea',
    fontWeight: '700',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerText: {
    fontSize: 12,
    color: '#9ca3af',
  },
});