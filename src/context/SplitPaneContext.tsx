import { createContext, useContext } from "react";

// Create the context
const SplitPaneContext = createContext<boolean | null>(null);

// Custom hook to check if Panel is inside SplitPane
export const useSplitPaneContext = () => {
  const context = useContext(SplitPaneContext);
  if (!context) {
    throw new Error(
      "Panel component must be used within a SplitPane component.",
    );
  }
  return context;
};

// Export the provider for wrapping in SplitPane
export const SplitPaneProvider = SplitPaneContext.Provider;
