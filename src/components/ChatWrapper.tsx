// "use client";

// import React from "react";
// import { Message, useChat } from "ai/react";
// import Messages from "./Messages";

// const ChatWrapper = ({
//   sessionId,
//   initialMessages,
// }: {
//   sessionId: string;
//   initialMessages: Message[];
// }) => {
//   const { messages, handleInputChange, input, handleSubmit } = useChat({
//     api: "/api/chat-stream",
//     body: { sessionId },
//     initialMessages,
//   });

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handleSubmit();
//   };

//   return (
//     <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
//       <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
//         <Messages messages={messages}/>
//       </div>
//       <form onSubmit={onSubmit}>
//         <input
//           value={input}
//           onChange={handleInputChange}
//           type="text"
//           className="w-full p-2 text-white bg-zinc-700"
//         />
//         <button type="submit" >send</button>
//       </form>
//     </div>
//   );
// };

// export default ChatWrapper;






"use client";

import React from "react";
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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="relative min-h-screen bg-zinc-900 flex flex-col justify-between gap-2 p-4">
      <div className="flex-1 text-black bg-zinc-800 flex flex-col justify-between overflow-auto">
        <Messages messages={messages} />
      </div>
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  );
};

export default ChatWrapper;
