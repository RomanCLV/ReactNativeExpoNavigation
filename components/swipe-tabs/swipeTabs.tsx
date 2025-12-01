import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import PagerView from "react-native-pager-view";

export type SwipeTabItem = {
  title?: string;
  icon?: string | ((props: { color: string; size: number }) => React.ReactNode);
  iconSelected?: string | ((props: { color: string; size: number }) => React.ReactNode);

  style?: ViewStyle;
  activeStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeTextStyle?: TextStyle;
  indicatorStyle?: ViewStyle;

  iconColor?: string;
  activeIconColor?: string;
  iconSize?: number;

  component: React.ReactNode;
};

type Props = {
  screens: SwipeTabItem[];
  initialIndex?: number;
  showTabBar?: boolean;
  tabBarPosition?: "top" | "bottom";
  showSelectedIndicator?: boolean;
  onIndexChange?: (index: number) => void;
  
  // Styles globaux
  tabBarStyle?: ViewStyle;
  tabStyle?: ViewStyle;
  indicatorStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeTextStyle?: TextStyle;

  iconColor?: string;
  activeIconColor?: string;
  iconSize?: number;
};

export default function SwipeTabs({
  screens,
  initialIndex = 0,
  showTabBar = true,
  tabBarPosition = "top",
  showSelectedIndicator = true,
  onIndexChange,
  tabBarStyle,
  tabStyle,
  indicatorStyle,
  textStyle,
  activeTextStyle,
  iconColor="#666",
  activeIconColor="#000",
  iconSize=22,
}: Props) {
  const pagerRef = useRef<PagerView>(null);
  const [index, setIndex] = useState(initialIndex);

  const handleChange = (i: number) => {
    setIndex(i);
    pagerRef.current?.setPage(i);
    onIndexChange?.(i);
  };

  const maxIconSize = Math.max(
    ...screens.map(s => s.iconSize ?? iconSize ?? 22),
  );
  const iconContainerHeight = maxIconSize + 2;

  const renderIcon = (screen: SwipeTabItem, active?: boolean): React.ReactNode => {
    const icon = active && screen.iconSelected ? screen.iconSelected : screen.icon;
    if (!icon) return null;

    // Couleur prioritaire : locale > globale > défaut
    const color = active
      ? screen.activeIconColor ?? activeIconColor ?? "#000"
      : screen.iconColor ?? iconColor ?? "#666";

    // Taille prioritaire : locale > globale > défaut
    const size = screen.iconSize ?? iconSize ?? 22;

    if (typeof icon === "string") {
      return (
        <Text style={{ fontSize: size, color, opacity: active ? 1 : 0.5 }}>
          {icon}
        </Text>
      );
    }

    return icon({ color, size });
  };

  const tabBar = (
    <View style={[styles.tabBar, tabBarStyle]}>
      {screens.map((tab, i) => {
        const active = i === index;
        const hasTitle = !!tab.title;
        const hasIcon = !!(tab.icon || tab.iconSelected);

        return (
          <TouchableOpacity
            key={i}
            onPress={() => handleChange(i)}
            style={[
              styles.tab,
              tabStyle,
              tab.style,
              active && tab.activeStyle,
            ]}
          >
            <View style={styles.tabContent}>
              {hasIcon && (
                <View style={[styles.iconContainer, { minHeight: iconContainerHeight }, hasTitle && styles.iconWithTitle]}>
                  {renderIcon(tab, active)}
                </View>
              )}
              {hasTitle && (
                <Text
                  style={[
                    styles.tabText,
                    textStyle,
                    tab.textStyle,
                    active && [
                      styles.activeTabText,
                      activeTextStyle,
                      tab.activeTextStyle,
                    ],
                  ]}
                >
                  {tab.title}
                </Text>
              )}
            </View>
            {active && showSelectedIndicator && (
              <View
                style={[
                  styles.activeIndicator,
                  indicatorStyle,
                  tab.indicatorStyle,
                ]}
              />
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
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
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
    gap: 4,
  },
  iconContainer: { 
    alignItems: "center",
    justifyContent: "center",
  },
  iconWithTitle: {
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
