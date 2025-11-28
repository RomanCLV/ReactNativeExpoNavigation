import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SwipeTabs, { SwipeTabScreen } from "../components/swipe-tabs/swipeTabs";

import PostsTab from "../components/swipe-tabs/postsTab";
import ShortsTab from "../components/swipe-tabs/shortsTab";
import RepostTab from "../components/swipe-tabs/repostTab";
import ProfileTab from "../components/swipe-tabs/profileTab";

export default function Page3() {
  const insets = useSafeAreaInsets();
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
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{height: insets.top}} />
      <SwipeTabs
        screens={screens}
        initialIndex={0}
        showTabBar={true}
        tabBarPosition="top"
        onIndexChange={(index) => {
          console.log("Nouvel index actif:", index);
        }}
      />
    </View>
  );
}
