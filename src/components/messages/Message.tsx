import React from "react";
import Link from "next/link";

import { MessageType } from "../../types/message.types";

type MessageProps = {
  message: MessageType;
};

export const Message = ({ message }: MessageProps) => {
  return (
    <div className="flex">
      <div className="rounded-full p-5 bg-gray-300 w-20 text-center mb-2">
        <p className="font-semibold text-md">AS</p>
      </div>
      <div className="flex flex-col ml-4 mt-2">
        <div className="flex">
          <h3>{message.name}</h3>
          <Link
            className="text-md ml-2 text-gray-600 cursor-pointer"
            href={`/users/${message.username}`}
          >
            @{message.username}
          </Link>
        </div>
        <p>{message.message}</p>
      </div>
    </div>
  );
};
