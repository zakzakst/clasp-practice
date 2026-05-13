import { getUserMessage_ } from "@/services/user";
import { menuInit_ } from "./utils/menuInit";

// TODO: eslint時にエラーが出るので修正する
const hello = (): void => {
  const ui = SpreadsheetApp.getUi();
  const result = ui.alert("確認", "実行しますか？", ui.ButtonSet.YES_NO);
  if (result === ui.Button.YES) {
    const message = getUserMessage_("田中");
    ui.alert("完了しました", message + process.env.SHEET_ID, ui.ButtonSet.OK);
  }
};

const showDialog = (): void => {
  const html = HtmlService.createHtmlOutputFromFile("dialog")
    .setWidth(400)
    .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html, "ダイアログ");
};

const saveUser = (user: { name: string; age: number }): void => {
  const ui = SpreadsheetApp.getUi();
  ui.alert("完了しました", `${user.name}さん${user.age}歳`, ui.ButtonSet.OK);
};

const onOpen = (): void => {
  menuInit_([
    {
      label: "Hello",
      name: "hello",
    },
    {
      label: "Dialog",
      name: "showDialog",
    },
  ]);
};
