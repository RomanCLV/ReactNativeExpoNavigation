import { View } from "react-native";

import PostsTab from "../components/swipe-tabs/postsTab";
import ShortsTab from "../components/swipe-tabs/shortsTab";
import RepostTab from "../components/swipe-tabs/repostTab";
import ProfileTab from "../components/swipe-tabs/profileTab";
import SwipeTabs, { SwipeTabItem } from "../components/swipe-tabs/swipeTabs";

import { Ionicons } from "@expo/vector-icons";

export default function Page1() {
  const screens: SwipeTabItem[] = [
  {
    component: <PostsTab />,
    icon: ({ color, size }: { color: string; size: number }) => (
      <Ionicons name="apps-outline" size={size} color={color} />
    ),
    iconSelected: ({ color, size }: { color: string; size: number }) => (
      <Ionicons name="apps" size={size} color={color} />
    ),
  },
  {
    component: <ShortsTab />,
    icon: ({ color, size }: { color: string; size: number }) => (
      <Ionicons name="bookmark-outline" size={size} color={color} />
      
    ),
    iconSelected: ({ color, size }: { color: string; size: number }) => (
      <Ionicons name="bookmark" size={size} color={color} />
    ),
  },
  {
    component: <RepostTab />,
    icon: ({ color, size }: { color: string; size: number }) => (
      <Ionicons name="arrow-undo-circle-outline" size={size} color={color} />
    ),
    iconSelected: ({ color, size }: { color: string; size: number }) => (
      <Ionicons name="arrow-undo-circle" size={size} color={color} />
    ),
    iconSize: 24
  },
  {
    component: <ProfileTab />,
    icon: ({ color, size }: { color: string; size: number }) => (
      <Ionicons name="bar-chart-outline" size={size} color={color} />
    ),
    iconSelected: ({ color, size }: { color: string; size: number }) => (
      <Ionicons name="bar-chart" size={size} color={color} />
    ),
  },
];

  return (
    <View style={{ flex: 1 }}>
      <SwipeTabs
        screens={screens}
        initialIndex={2}
        showTabBar={true}
        tabBarPosition="top"
        onIndexChange={(i) => console.log("Nouvel index:", i)}
      />
    </View>
  );
}
