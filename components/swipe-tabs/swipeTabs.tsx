import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import PagerView from "react-native-pager-view";

export type SwipeTabItem = {
  title?: string;
  icon?: string | ((props: { color: string; size: number }) => React.ReactNode);
  iconSelected?: string | ((props: { color: string; size: number }) => React.ReactNode);
  component: React.ReactNode;
};

type Props = {
  screens: SwipeTabItem[];
  initialIndex?: number;
  showTabBar?: boolean;
  tabBarPosition?: "top" | "bottom";
  showSelectedIndicator?: boolean;
  onIndexChange?: (index: number) => void;
};

export default function SwipeTabs({
  screens,
  initialIndex = 0,
  showTabBar = true,
  tabBarPosition = "top",
  showSelectedIndicator = true,
  onIndexChange,
}: Props) {
  const pagerRef = useRef<PagerView>(null);
  const [index, setIndex] = useState(initialIndex);

  const handleChange = (i: number) => {
    setIndex(i);
    pagerRef.current?.setPage(i);
    onIndexChange?.(i);
  };

//const renderIcon = (
//  screen: SwipeTabItem,
//  active?: boolean): React.ReactNode => 
//{
//  // Choisir l'icône appropriée selon l'état actif
//  const icon = active && screen.iconSelected ? screen.iconSelected : screen.icon;
//
//  if (!icon) 
//    return null;
//  
//  // Support emoji string
//  if (typeof icon === "string") {
//    return (
//      <Text style={{ fontSize: 18, marginVertical: 2, opacity: active ? 1 : 0.4, backgroundColor: "green" }}>
//        {icon}
//      </Text>
//    );
//  }
//  
//  // Function API: icon({color, size})
//  return (
//    <View style={{ marginVertical: 2, backgroundColor: "green" }}>
//      {icon({ color: active ? "#000" : "#666", size: 22 })}
//    </View>
//  );
//};

//  const tabBar = (
//    <View style={styles.tabBar}>
//      {screens.map((tab, i) => {
//        const active = i === index;
//        return (
//          <TouchableOpacity
//            key={i}
//            onPress={() => handleChange(i)}
//            style={[styles.tab]}
//          >
//            <View style={[styles.innerTab, !showSelectedIndicator && styles.marginH0]}>
//              {renderIcon(tab, active)}
//              {tab.title && (
//                <Text style={[styles.tabText, active && styles.activeTabText]}>
//                  {tab.title}
//                </Text>
//              )}
//              { active && showSelectedIndicator && (<View style={styles.activeIndicator} /> )}
//            </View>
//          </TouchableOpacity>
//        );
//      })}
//    </View>
//  );

const renderIcon = (
  screen: SwipeTabItem,
  active?: boolean
): React.ReactNode => {
  const icon = active && screen.iconSelected ? screen.iconSelected : screen.icon;

  if (!icon) return null;

  if (typeof icon === "string") {
    return (
      <Text style={[styles.iconText, !active && styles.iconInactive]}>
        {icon}
      </Text>
    );
  }

  return icon({ color: active ? "#000" : "#666", size: 22 });
};

const tabBar = (
  <View style={styles.tabBar}>
    {screens.map((tab, i) => {
      const active = i === index;
      const hasTitle = !!tab.title;
      const hasIcon = !!(tab.icon || tab.iconSelected);

      return (
        <TouchableOpacity
          key={i}
          onPress={() => handleChange(i)}
          style={styles.tab}
        >
          <View style={styles.tabContent}>
            {hasIcon && (
              <View style={[styles.iconContainer, hasTitle && styles.iconWithTitle]}>
                {renderIcon(tab, active)}
              </View>
            )}
            {hasTitle && (
              <Text style={[styles.tabText, active && styles.activeTabText]}>
                {tab.title}
              </Text>
            )}
          </View>
          {active && showSelectedIndicator && (
            <View style={styles.activeIndicator} />
          )}
        </TouchableOpacity>
      );
    })}
  </View>
);

  return (
    <View style={{ flex: 1 }}>
      {showTabBar && tabBarPosition === "top" && tabBar}
      <PagerView
        style={{ flex: 1 }}
        ref={pagerRef}
        initialPage={initialIndex}
        onPageSelected={(e) => {
          const pos = e.nativeEvent.position;
          setIndex(pos);
          onIndexChange?.(pos);
        }}
      >
        {screens.map((tab, i) => (
          <View key={i} style={{ flex: 1 }}>
            {tab.component}
          </View>
        ))}
      </PagerView>
      {showTabBar && tabBarPosition === "bottom" && tabBar}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
  },
  tab: {
    flex: 1,
    position: "relative",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  tabContent: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4, // Espacement entre icône et titre (nécessite RN 0.71+)
  },
  iconContainer: {
    // Pas de margin si pas de titre
  },
  iconWithTitle: {
    // Petit espacement seulement s'il y a un titre
    marginBottom: 2,
  },
  iconText: {
    fontSize: 20,
    opacity: 1,
  },
  iconInactive: {
    opacity: 0.5,
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: "20%",
    right: "20%",
    height: 2,
    backgroundColor: "#000",
  },
  tabText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "700",
  },
});