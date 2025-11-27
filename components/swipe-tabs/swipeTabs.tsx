import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

type Props = {
  screens: React.ReactNode[];
};

export default function SwipeTabs({ screens }: Props) {
  const translateX = useSharedValue(0);
  const maxIndex = screens.length - 1;
  const pageWidth = width;

  let initialTranslateX = 0; // <- Déclaration nécessaire

  const panGesture = Gesture.Pan()
    .onStart(() => {
      initialTranslateX = translateX.value;
    })
    .onUpdate((event) => {
      translateX.value = initialTranslateX + event.translationX;
    })
    .onEnd(() => {
      const page = -translateX.value / pageWidth;
      let newIndex = Math.round(page);
      newIndex = Math.max(0, Math.min(newIndex, maxIndex));
      translateX.value = withSpring(-newIndex * pageWidth, {
        damping: 18,
        stiffness: 180,
      });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.container, { width: pageWidth * screens.length }, animatedStyle]}>
        {screens.map((screen, index) => (
          <View key={index} style={{ width: pageWidth, height: "100%" }}>
            {screen}
          </View>
        ))}
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
  },
});
