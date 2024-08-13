"use client";

import React, { useEffect, useState } from "react";
import { Message, useChat } from "ai/react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const { messages, handleInputChange, input, handleSubmit, setInput } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
    initialMessages,
  });

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6">
      <div className="flex-1 bg-zinc-800 shadow-lg rounded-lg overflow-hidden mb-4">
        <div className="p-4 h-full flex flex-col justify-between overflow-auto">
          <Messages messages={messages} />
        </div>
      </div>
      <div className="bg-gray-700 rounded-lg shadow-lg p-4">
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setInput={setInput}
        />
      </div>
    </div>
  );
};

export default ChatWrapper;
