//Navigator
import AppNavigation from "./src/components/Navigator/AppNavigation";
//TailwindCSS
import "./global.css";
//Global State
import { Provider } from "react-redux";
import { store, persistedStore } from "./src/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
//Splash Screen
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function App() {
  //Splash Screen
  SplashScreen.preventAutoHideAsync();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000);
  }, []);
  //Main App
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}
