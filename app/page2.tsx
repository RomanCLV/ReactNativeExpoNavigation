import { View } from "react-native";

import PostsTab from "../components/swipe-tabs/postsTab";
import ShortsTab from "../components/swipe-tabs/shortsTab";
import RepostTab from "../components/swipe-tabs/repostTab";
import ProfileTab from "../components/swipe-tabs/profileTab";
import SwipeTabs, { SwipeTabItem } from "../components/swipe-tabs/swipeTabs";

export default function Page2() {
  const screens: SwipeTabItem[] = [
  {
    component: <PostsTab />,
    title: "Posts",
    icon: "📸"
  },
  {
    component: <ShortsTab />,
    title: "Shorts",
    icon: "🎬",
  },
  {
    component: <RepostTab />,
    title: "Reposts",
    icon: "🔄",
  },
  {
    component: <ProfileTab />,
    title: "Profile",
    icon: "👤",
  },
];

  return (
    <View style={{ flex: 1 }}>
      <SwipeTabs
        screens={screens}
        initialIndex={2}
        showTabBar={true}
        showSelectedIndicator={true}
        tabBarPosition="top"
        onIndexChange={(i) => console.log("Nouvel index:", i)}
      />
    </View>
  );
}
