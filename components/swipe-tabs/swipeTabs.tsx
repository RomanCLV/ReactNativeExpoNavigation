import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Types pour les configurations d'écran
export interface SwipeTabScreen {
  component: React.ReactElement;
  title?: string;
  icon?: string;
}

export interface SwipeTabsProps {
  screens: SwipeTabScreen[];
  initialIndex?: number;
  showTabBar?: boolean;
  tabBarPosition?: 'top' | 'bottom';
  onIndexChange?: (index: number) => void;
}

export default function SwipeTabs({
  screens,
  initialIndex = 0,
  showTabBar = true,
  tabBarPosition = 'top',
  onIndexChange,
}: SwipeTabsProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const translateX = useSharedValue(-initialIndex * SCREEN_WIDTH);

  const handleIndexChange = (newIndex: number) => {
    setActiveIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      const newTranslateX = -activeIndex * SCREEN_WIDTH + e.translationX;
      const maxTranslate = 0;
      const minTranslate = -(screens.length - 1) * SCREEN_WIDTH;
      
      // Limiter le défilement avec un effet de résistance aux bords
      translateX.value = Math.max(
        minTranslate,
        Math.min(maxTranslate, newTranslateX)
      );
    })
    .onEnd((e) => {
      const threshold = SCREEN_WIDTH * 0.3;
      let newIndex = activeIndex;

      if (e.translationX < -threshold && activeIndex < screens.length - 1) {
        newIndex = activeIndex + 1;
      } else if (e.translationX > threshold && activeIndex > 0) {
        newIndex = activeIndex - 1;
      }

      translateX.value = withSpring(-newIndex * SCREEN_WIDTH, {
        damping: 20,
        stiffness: 90,
      });

      if (newIndex !== activeIndex) {
        scheduleOnRN(handleIndexChange, newIndex);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const goToIndex = (index: number) => {
    translateX.value = withSpring(-index * SCREEN_WIDTH, {
      damping: 20,
      stiffness: 90,
    });
    handleIndexChange(index);
  };

  return (
    <View style={styles.container}>
      {showTabBar && tabBarPosition === 'top' && (
        <TabBar
          screens={screens}
          activeIndex={activeIndex}
          onTabPress={goToIndex}
        />
      )}

      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.screensContainer, animatedStyle]}>
          {screens.map((screen, index) => (
            <View key={index} style={styles.screen}>
              {screen.component}
            </View>
          ))}
        </Animated.View>
      </GestureDetector>

      {showTabBar && tabBarPosition === 'bottom' && (
        <TabBar
          screens={screens}
          activeIndex={activeIndex}
          onTabPress={goToIndex}
        />
      )}
    </View>
  );
}

// Composant TabBar
interface TabBarProps {
  screens: SwipeTabScreen[];
  activeIndex: number;
  onTabPress: (index: number) => void;
}

function TabBar({ screens, activeIndex, onTabPress }: TabBarProps) {
  return (
    <View style={styles.tabBar}>
      {screens.map((screen, index) => (
        <Pressable
          key={index}
          style={styles.tab}
          onPress={() => onTabPress(index)}
        >
          {screen.icon && (
            <Text style={[
              styles.tabIcon,
              activeIndex === index && styles.tabIconActive
            ]}>
              {screen.icon}
            </Text>
          )}
          {screen.title && (
            <Text style={[
              styles.tabTitle,
              activeIndex === index && styles.tabTitleActive
            ]}>
              {screen.title}
            </Text>
          )}
          {activeIndex === index && (
            <View style={styles.activeIndicator} />
          )}
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screensContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  screen: {
    width: SCREEN_WIDTH,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    position: 'relative',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
    opacity: 0.6,
  },
  tabIconActive: {
    opacity: 1,
  },
  tabTitle: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  tabTitleActive: {
    color: '#000',
    fontWeight: '700',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    width: '60%',
    backgroundColor: '#000',
  },
});
