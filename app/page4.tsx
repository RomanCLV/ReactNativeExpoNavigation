import { View } from "react-native";
import { Link } from "expo-router";

import SwipeTabs, { SwipeTabScreen } from "../components/swipe-tabs/swipeTabs";

import PostsTab from "../components/swipe-tabs/postsTab";
import ShortsTab from "../components/swipe-tabs/shortsTab";
import RepostTab from "../components/swipe-tabs/repostTab";
import ProfileTab from "../components/swipe-tabs/profileTab";

export default function Page4() {
  const screens: SwipeTabScreen[] = [
    { component: <PostsTab /> },
    { component: <ShortsTab /> },
    { component: <RepostTab /> },
    { component: <ProfileTab /> },
  ];
  return (
    <View style={{ flex: 1}}>
      <Link href="./" style={{ marginTop: 20, color: "blue", textDecorationLine: "underline" }}>
        Aller à Page 1 (index)
      </Link>
      <SwipeTabs
        screens={screens}
        showTabBar={false}
      />
    </View>
  );
}
