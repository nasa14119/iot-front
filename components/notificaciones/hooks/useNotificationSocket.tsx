import { useChangeNotification } from "@components/notificaciones/store";
import { useEffect, useEffectEvent, useState } from "react";
import useWebSocket from "react-use-websocket";

export const useNotificationSocket = (url: string) => {
  const changeStore = useChangeNotification();
  type Parameter = Parameters<typeof changeStore>[0];
  const [isLoading, setLoading] = useState(true);
  const [newMessage, setMessage] = useState(false);
  const { lastJsonMessage } = useWebSocket(url, {
    onOpen: () => setLoading(false),
    onClose: () => console.log("WebSocket connection closed"),
    onMessage: () => setMessage(true),
    onError: (error) => console.error("WebSocket error:", error),
    shouldReconnect: () => true, // Optional: auto-reconnect on close
  });
  const update = useEffectEvent((json: Parameter) => {
    if (isLoading || !newMessage) return;
    changeStore(json);
    setMessage(false);
  });
  useEffect(() => {
    update(lastJsonMessage as Parameter);
  }, [lastJsonMessage]);
  return [isLoading];
};
