import { View } from "react-native";

import SwipeTabs from "../components/swipe-tabs/swipeTabs";

import PostsTab from "../components/swipe-tabs/postsTab";
import ShortsTab from "../components/swipe-tabs/shortsTab";
import RepostTab from "../components/swipe-tabs/repostTab";
import ProfileTab from "../components/swipe-tabs/profileTab";

export default function Page1() {
  return (
    <View style={{flex: 1}}>
      <SwipeTabs
        screens={[
          <PostsTab />,
          <ShortsTab />,
          <RepostTab />,
          <ProfileTab />,
        ]}
      />
    </View>
  );
}
