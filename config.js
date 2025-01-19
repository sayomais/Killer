module.exports = {
    numberOfRegisterInOneTime: 6, // no of registration want to make in one command.
    domains: ["saybarry.com", "barryop.com"], // names of domain for the emails. 
    oneTimeMailGen: 10 * 100000,
    telegramBotToken: "7500695376:AAE67UrkRlrwYuID4gqBt6Xz9lpTTjVQWpc", // bot token of telegram bot. Create a bot using https://t.me/BotFather then generate the token of the bot.
    adminNamesForTelegramBot: ["Barry_op","SayJohny"], // name of the admin/developer who's name will be displayed when any unknown user use the command of the bot in telegram.
    authorisedUserForTelegramBot: ["Barry_op","SayJohny"] // username or id of the user who can use the bot.
};