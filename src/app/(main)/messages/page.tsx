import React from "react";

import { Message } from '@/components/messages/Message';

export default function MessagePage() {
  const messages = [
    {
      name: 'Han Solo',
      username: 'HanSolo',
      message: 'Primer mensaje',
      repliesCount: 13,
    },
    {
      name: 'Anakin Skywalker',
      username: 'anakin',
      message: 'Segundo mensaje',
      repliesCount: 13,
    },
  ];

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
      {messages.map((message, index) => (
          <Message key={index} message={message} />
          )
        )}
      </section>
    </main>
  )
}