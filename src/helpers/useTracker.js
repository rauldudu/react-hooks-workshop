import React from "react";
import saveActivity from "../api/saveActivity";

export default function useTracker(page) {
  React.useEffect(() => {
    saveActivity({ page: page, type: "enter", date: new Date() });

    return () => {
      saveActivity({ page: page, type: "exit", date: new Date() });
    };
  }, []);
}
