"use client";

import { useCallback } from "react";

import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";

export default function ChatApp() {

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <div className="mx-auto w-full h-full">
      <ChatKitPanel
        theme="light" 
        onWidgetAction={handleWidgetAction}
        onResponseEnd={handleResponseEnd}
        onThemeRequest={() => {}} 
      />
    </div>
  );
}