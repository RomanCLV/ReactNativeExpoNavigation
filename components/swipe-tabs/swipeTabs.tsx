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
  component: React.ReactNode;
};

type Props = {
  screens: SwipeTabItem[];
  initialIndex?: number;
  showTabBar?: boolean;
  tabBarPosition?: "top" | "bottom";
  onIndexChange?: (index: number) => void;
};

export default function SwipeTabs({
  screens,
  initialIndex = 0,
  showTabBar = true,
  tabBarPosition = "top",
  onIndexChange,
}: Props) {
  const pagerRef = useRef<PagerView>(null);
  const [index, setIndex] = useState(initialIndex);

  const handleChange = (i: number) => {
    setIndex(i);
    pagerRef.current?.setPage(i);
    onIndexChange?.(i);
  };

  const renderIcon = (
    icon?: SwipeTabItem["icon"],
    active?: boolean
  ): React.ReactNode => {
    if (!icon) return null;

    // Support emoji string for now
    if (typeof icon === "string") {
      return (
        <Text style={{ fontSize: 18, marginBottom: 2, opacity: active ? 1 : 0.4 }}>
          {icon}
        </Text>
      );
    }

    // Future API: tabBarIcon({color,size})
    return icon({
      color: active ? "#000" : "#666",
      size: 22,
    });
  };

  const tabBar = (
    <View style={styles.tabBar}>
      {screens.map((tab, i) => {
        const active = i === index;
        return (
          <TouchableOpacity
            key={i}
            onPress={() => handleChange(i)}
            style={[styles.tab, active && styles.activeTab]}
          >
            {renderIcon(tab.icon, active)}
            {tab.title && (
              <Text style={[styles.tabText, active && styles.activeTabText]}>
                {tab.title}
              </Text>
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
    height: 50,
    flexDirection: "row",
    backgroundColor: "#eee",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 6,
    justifyContent: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  tabText: {
    fontSize: 12,
    color: "#444",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "600",
  },
});
