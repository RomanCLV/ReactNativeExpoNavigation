import { View } from "react-native";

import SwipeTabs, { SwipeTabScreen } from "../components/swipe-tabs/swipeTabs";
import PostsTab from "../components/swipe-tabs/postsTab";
import ShortsTab from "../components/swipe-tabs/shortsTab";
import RepostTab from "../components/swipe-tabs/repostTab";
import ProfileTab from "../components/swipe-tabs/profileTab";

export default function Page2() {
const screens: SwipeTabScreen[] = [
      {
        component: <PostsTab />,
        title: "Posts",
        icon: "📸",
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
      <View style={{flex: 1}}>
        <SwipeTabs
          screens={screens}
          initialIndex={2}
          showTabBar={true}
          tabBarPosition="bottom"
        />
      </View>
    );
}
