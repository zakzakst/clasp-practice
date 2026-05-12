declare const global: any;

import { getUserMessage } from "@/services/user";

const hello = (): void => {
  const message = getUserMessage("田中");

  Logger.log(message);
};

(global as any).hello = hello;
