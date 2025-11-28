import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import PagerView from "react-native-pager-view";

export type SwipeTabItem = {
  name?: string;
  icon?: React.ReactNode;
  component: React.ReactNode;
};

type Props = {
  screens: SwipeTabItem[];
  initialIndex?: number;
  showTabBar?: boolean;
};

export default function SwipeTabs({
  screens,
  initialIndex = 0,
  showTabBar = true,
}: Props) {
  const [index, setIndex] = useState(initialIndex);
  const pagerRef = useRef<PagerView>(null);

  const goToPage = (i: number) => {
    setIndex(i);
    pagerRef.current?.setPage(i);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* TabBar */}
      {showTabBar && (
        <View style={styles.tabBar}>
          {screens.map((tab, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => goToPage(i)}
              style={[styles.tab, index === i && styles.activeTab]}
            >
              {tab.icon}
              {tab.name && <Text>{tab.name}</Text>}
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Swipe pages */}
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={initialIndex}
        onPageSelected={(e) => setIndex(e.nativeEvent.position)}
      >
        {screens.map((tab, i) => (
          <View key={i} style={{ flex: 1 }}>
            {tab.component}
          </View>
        ))}
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "#eee",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
});
