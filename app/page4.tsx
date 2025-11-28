import { View } from "react-native";

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
      <SwipeTabs
        screens={screens}
        showTabBar={false}
      />
    </View>
  );
}
