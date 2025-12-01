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
    icon: "📸",
    activeTextStyle: { color: "pink" },
    indicatorStyle: { backgroundColor: "pink" },
  },
  {
    component: <ShortsTab />,
    title: "Shorts",
    icon: "🎬",
    activeTextStyle: { color: "#8eff8e" },
    indicatorStyle: { backgroundColor: "#8eff8e" },
  },
  {
    component: <RepostTab />,
    title: "Reposts",
    icon: "🔄",
    activeTextStyle: { color: "#CCCCFF" },
    indicatorStyle: { backgroundColor: "#CCCCFF" },
  },
  {
    component: <ProfileTab />,
    title: "Profile",
    icon: "👤",
    activeTextStyle: { color: "#FFE5AA" },
    indicatorStyle: { backgroundColor: "#FFE5AA" },
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
        textStyle={{opacity: 0.5}}
        activeTextStyle={{fontStyle: "italic", fontWeight: "900", opacity: 1}}
        tabBarStyle={{backgroundColor: "#fff"}}
        indicatorStyle={{marginBottom: 5}}
      />
    </View>
  );
}
