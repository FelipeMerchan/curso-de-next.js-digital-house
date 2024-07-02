"use client";

import { MessageType } from "@/types/message.types";
import { Message } from "../messages/Message";
import { useState } from "react";

enum TabView {
  MESSAGES,
  REPLIES,
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
};

export const UserTabs = ({ messages, replies }: UserTabsProps) => {
  const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

  return (
    <>
      <div className="flex justify-evenly mb-4">
        <button
          className={`cursor-pointer border-b-2 ${tab === TabView.MESSAGES ? "border-blue-400" : ""}`}
          onClick={() => setTab(TabView.MESSAGES)}
        >
          Mensajes
        </button>
        <button
          className={`cursor-pointer border-b-2 ${tab === TabView.REPLIES ? "border-blue-400" : ""}`}
          onClick={() => setTab(TabView.REPLIES)}
        >
          Respuestas
        </button>
      </div>
      <div>
        {tab === TabView.MESSAGES &&
          messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        {tab === TabView.REPLIES &&
          replies.map((message, index) => (
            <Message key={index} message={message} />
          ))}
      </div>
    </>
  );
};
