import { CommonActions, NavigationProp, EventArg } from "@react-navigation/native";
import { router } from "expo-router";
import { StackActions } from "@react-navigation/native";

/**
 * Crée un listener pour un Tab qui reset la stack seulement si nécessaire.
 * @deprecated The method should not be used. Use createTabRootListener instead.
 * @param routeName Le nom de la route racine du tab ("(tabs)/home", "(tabs)/cart", etc.)
 */

export function createTabResetListener(routeName: string) {
  return ({ navigation }: { navigation: NavigationProp<any> }) => ({
    tabPress: (e: EventArg<"tabPress", true>) => {
      const state = navigation.getState();

      // Trouve la route correspondant au tab cible (routeName)
      const targetRoute = state.routes.find((r) => r.name === routeName);

      // Debug
      //console.log("Tab Pressed:", routeName);
      if (!targetRoute) {
        //console.log("Target route not found in navigation state. Let default behavior.");
        return; // sécurité : on laisse le comportement par défaut
      }

      const targetTabState = (targetRoute as any).state;

      //if (targetTabState) {
      //  console.log("Target Tab Stack Index:", targetTabState.index);
      //} else {
      //  console.log("Target Tab has no internal state (index 0).");
      //}

      // Si pas de stack (pas de navigation dans ce tab) ou déjà sur l'index 0 -> ne rien faire
      if (!targetTabState || targetTabState.index === 0) {
        //console.log("Return now (no reset).");
        return;
      }

      // On est dans une sous-page du tab cible -> on reset vers la racine
      //console.log("Reset target tab stack to root");
    
      /*
      Le problème avec CommonActions.reset() :
        - tu détruis toute la pile du tab actuel,
        - la navigation devient brutale,
        - l'animation par défaut des tabs est perdue.
      */

      e.preventDefault();
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: routeName }],
        })
      );
    },
  });
}

/**
 * Crée un listener pour un Tab qui navigue vers le root du tab
 * si ce n'est pas déjà l'écran actuel.
 * @param routeName Nom du tab racine, ex: "(tabs)/home"
 */
export function createTabRootListener(routeName: string) {
  return ({ navigation }: { navigation: NavigationProp<any> }) => ({
    tabPress: () => {
      const state = navigation.getState();
      if (state)
      {
        const currentRoute = state.routes[state.index];
        // Si on est déjà sur la route racine du tab, ne rien faire
        if (currentRoute?.name === routeName) {
            return;
        }
      }
      // Sinon, navigue vers la route racine
      navigation.navigate(routeName, { screen: 'index' } );
    },
  });
}
