import { getUserMessage } from "@/services/user";

// TODO: eslint時にエラーが出るので修正する
const hello = (): void => {
  const message = getUserMessage("田中");
  Logger.log(message + process.env.SHEET_ID);
};
