module.exports = {
  btnOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: "", callback_data: "" }], 
        [{ text: "", callback_data: "" }]],
    }),
  },
};
// кнопки с взаимодействиями через тг бота