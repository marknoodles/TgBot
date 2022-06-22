const TelegramApi = require("node-telegram-bot-api");
// импорт options - const {nameOption} = require(./options);
const token = "5588604046:AAHGRPTwY95CSJYyDKTd4d4V1XsCQaAdm3E";
const bot = new TelegramApi(token, { polling: true });

const start = () => {
  //команды на бота, которые появятся в менюшке бота
  bot.setMyCommands([
    { command: "/start", description: "Приветствие" },
    { command: "/info", description: "Приветствие" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      // использовать await на другие условия
      return bot.sendMessage(chatId, "Welcome to the candyshop");
    }

    if (text === "/info") {
      return bot.sendMessage(chatId, `ur name is ${msg.from.first_name} ${msg.from.last_name}`);
    }
    return bot.sendMessage(chatId, `не понел`);
  });
};
start();
