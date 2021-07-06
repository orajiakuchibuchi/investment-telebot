const TeleBot = require('node-telegram-bot-api');
// const telebot = require('telebot');
// const TeleBot = require('telebot');
const TELEGRAM_BOT_TOKEN = '1788202772:AAH3Y8iMzDViy7FXCZKbapYlF-v1EeSEOpY';
const bot = new TeleBot(TELEGRAM_BOT_TOKEN, {polling: true});
let HAS_INTRO = false;
bot.on('message', (msg)=>{
    const chatId = msg.chat.id;
    replyMessage(chatId, msg.text);
    // bot.sendMessage(chatId, reply);
});
bot.onText(/\/menu/, (msg)=>{ 
    intro(msg);
});
bot.on('sticker', (msg) => {
    return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});
bot.onText(/\/stepVideo/, (msg)=>{
    bot.sendMessage(msg.chat.id, 'Please wait while i search for the video');
    return bot.sendVideo(msg.from.id, './assets/Screencast_30-06-2021_23_52_07.mp4');
})
bot.on('polling_error', (error) => {
    console.log(error);  // => 'EFATAL'
  });
bot.onText(/\/vn/, (msg)=>{
    return bot.sendVoice(msg.from.id, './assets/audio_2021-07-01_03-02-54.ogg', {caption: 'Here is your vn'});
})
bot.onText(/\/register/, (msg)=>{
    return bot.sendMessage(msg.chat.id, 'Visit: https://invest.topfinanceltd.com/auth/signup to login');
})
bot.onText(/\/login/, (msg)=>{
    return bot.sendMessage(msg.chat.id, 'Visit: https://invest.topfinanceltd.com/auth/signin to login');
})
bot.onText(/\/website/, (msg)=>{
    return bot.sendMessage(msg.chat.id, 'Visit: https://topfinanceltd.com to visit website');
})
function intro(msg){
    bot.sendMessage(msg.from.id, `Quick Menu:
    \n 1. Click/Enter /menu to view menu.
    \n 2. Click/Enter /website to get website link. 
    \n 3. Click/Enter /register to watch a video step on how to invest. 
    \n4. Click/Enter /login to get website link. 
    \n5. Click/Enter /stepVideo to watch a video step on how to invest. 
    \n6. Click/Enter /vn to receive a voice note.\n
    `, 
                                  { replyToMessage: msg.message_id });
    // bot.sendMessage(msg.from.id, 'Enter /video to get the video.', { replyToMessage: msg.message_id });
    // bot.sendMessage(msg.from.id, 'Also, less i forget, you can also send a sticker to get a surprise image to download for free', { replyToMessage: msg.message_id });
}
function replyMessage(chatId, message){
    if(message.toLowerCase().includes('Hello'.toLowerCase()) || 
        message.toLowerCase().includes('Hi'.toLowerCase()) ||
        message.toLowerCase().includes('Good day'.toLowerCase()) ||
        message.toLowerCase().includes('Hey'.toLowerCase())){
            let _selfLAstResponse = 'Good day, i am lawrence. How may i be of help?';
            let __timeout = 0;
            bot.sendMessage(chatId, _selfLAstResponse);
            _selfLAstResponse = `Less I forget, you can use the shortcut menu:
            \n 1. Click/Enter /menu to view menu.
            \n 2. Click/Enter /website to get website link. 
            \n 3. Click/Enter /register to watch a video step on how to invest. 
            \n4. Click/Enter /login to get website link. 
            \n5. Click/Enter /stepVideo to watch a video step on how to invest. 
            \n6. Click/Enter /vn to receive a voice note.\n
            `;
            __timeout = Math.floor(_selfLAstResponse.length /50) * 1000;
            bot.sendChatAction(chatId, 'typing').then(()=>{
                return new Promise(resolve => setTimeout(()=>{
                    bot.sendMessage(chatId, _selfLAstResponse, 
                        { replyToMessage: chatId });
                    bot.sendMessage(chatId, 'But just in case you have a different issue, we can continue the conversation');
                    console.log('Typing Done');
                }, __timeout));
            });
    }else if(message.toLowerCase().includes('How are you?'.toLowerCase())||
            message.toLowerCase().includes('How are you'.toLowerCase()) ||
            message.toLowerCase().includes(`How're you`.toLowerCase())||
            message.toLowerCase().includes(`Howre you`.toLowerCase())
            ) {
                if(HAS_INTRO){
                    bot.sendMessage(chatId, `I guess we've had this conversation before. We currently offer some interestin plans?`);
                    sendPlans(chatId);
                }else{
                    bot.sendMessage(chatId, `I am doing great today. How aout you?`);
                    bot.sendMessage(chatId, 'How are you doing today?');
                    HAS_INTRO = true;
                }
    }else if(message.toLowerCase().includes('What are your plans?'.toLowerCase())||
            message.toLowerCase().includes('your plans?'.toLowerCase()) ||
            message.toLowerCase().includes(`Can i know your plans?`.toLowerCase())||
            message.toLowerCase().includes(`Tell me your plans`.toLowerCase())) {
        sendPlans(chatId);
    }else{
        bot.sendMessage(chatId, 'What is your request?');
    }
    
}
function sendPlans(chatId){
    bot.sendMessage(chatId, `(1) STP PLAN (One Time)\n\tROI: 5% after 24 Hours
    \n\tMinimum $100\n\tDuration: 24 hours 
    \n(2) Standard Plan (4 days)\n\tROI: 6% daily\n\tDuration: 4 days\n\t$1000 minimum Invest  
    \n(3) Premium Plan\n\tROI: 11% after 65 Minutes\n\tDuration 65 minutes / an Hour\n\tMinimum $6000
    \n(4) Prime Plan\n\tMinimum $10000\n\tROI: 15% daily\n\tDuration: 30 days.
    `);
}