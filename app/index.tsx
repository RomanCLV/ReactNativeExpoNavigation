import { View } from "react-native";

import PostsTab from "../components/swipe-tabs/postsTab";
import ShortsTab from "../components/swipe-tabs/shortsTab";
import RepostTab from "../components/swipe-tabs/repostTab";
import ProfileTab from "../components/swipe-tabs/profileTab";
import SwipeTabs from "../components/swipe-tabs/swipeTabs";

export default function Page1() {

  return (
    <View style={{ flex: 1 }}>
      <SwipeTabs
        screens={[
          { name: "Posts", component: <PostsTab /> },
          { name: "Shorts", component: <ShortsTab /> },
          { name: "Repost", component: <RepostTab /> },
          { name: "Profile", component: <ProfileTab /> },
        ]}
      />
    </View>
  );
}
