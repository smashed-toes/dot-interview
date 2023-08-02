"use client";

import { Provider } from "react-redux";
import { reduxStore, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {() => <>{children}</>}
      </PersistGate>
    </Provider>
  );
}
