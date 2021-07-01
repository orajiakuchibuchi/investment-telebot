const TeleBot = require('telebot');
const TELEGRAM_BOT_TOKEN = '1850780982:AAGFxe8iiynB8werIFX_qTYsPato6A2IFyA';
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);
// bot.on('text', (msg) => msg.reply.text(constructReply(msg)));
bot.on(['/menu'], (msg)=>{ 
    msg.reply.text(intro(msg));
});
bot.on('sticker', (msg) => {
    return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});
bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];        
    if(text.lenght < 1) { 
        return bot.sendMessage(msg.from.id, 'Say what?', { replyToMessage: msg.message_id });
    }
    return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id, notification: true });
});
bot.on(['/how-to-invest'], (msg)=>{
    return bot.sendVideo(msg.from.id, './assets/Screencast_30-06-2021_23_52_07.mp4', {caption: 'Here is your video'});
})
bot.on(['/vn'], (msg)=>{
    return bot.sendVoice(msg.from.id, './assets/audio_2021-07-01_03-02-54.ogg', {caption: 'Here is your vn'});
})
bot.on(['/register'], (msg)=>{
    return msg.reply.message('Visit: https://invest.topfinanceltd.com/auth/signup to login');
})
bot.on(['/login'], (msg)=>{
    return msg.reply.message('Visit: https://invest.topfinanceltd.com/auth/signin to login');
})
bot.on(['/website'], (msg)=>{
    return msg.reply.message('Visit: https://topfinanceltd.com to visit website');
})
bot.start();

function constructReply(message){
    if(message.toLowerCase() == 'Hi'.toLowerCase()){
        return 'Hello welcome Emmanuel';
    }
}
function intro(msg){
    bot.sendMessage(msg.from.id, `Welcome to Top Finance LTD. Some helpful Commands are\n
                                  1. Enter /menu to view menu\n
                                  2. Enter /website to get website link. \n
                                  3. Enter /register to watch a video step on how to invest. \n
                                  4. Enter /login to get website link. \n
                                  5. Enter /how-to-invest to watch a video step on how to invest. \n
                                  6. Enter /vn to receive a voice note. \n
                                  `, 
                                  { replyToMessage: msg.message_id });
    // bot.sendMessage(msg.from.id, 'Enter /video to get the video.', { replyToMessage: msg.message_id });
    // bot.sendMessage(msg.from.id, 'Also, less i forget, you can also send a sticker to get a surprise image to download for free', { replyToMessage: msg.message_id });
}