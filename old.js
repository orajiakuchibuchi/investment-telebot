// bot.on('text', (msg) => msg.reply.text(constructReply(msg)));
// bot.on(['/menu'], (msg)=>{ 
//     msg.reply.text(intro(msg));
// });
// bot.on('sticker', (msg) => {
//     return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
// });
// bot.on(/^\/say (.+)$/, (msg, props) => {
//     const text = props.match[1];        
//     if(text.lenght < 1) { 
//         return bot.sendMessage(msg.from.id, 'Say what?', { replyToMessage: msg.message_id });
//     }
//     return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id, notification: true });
// });
// bot.on(['/stepVideo'], (msg)=>{
//     msg.reply.text('Please wait while i search for the video');
//     return bot.sendVideo(msg.from.id, './assets/Screencast_30-06-2021_23_52_07.mp4', {caption: 'Here is your video'});
// })
// bot.on(['/vn'], (msg)=>{
//     return bot.sendVoice(msg.from.id, './assets/audio_2021-07-01_03-02-54.ogg', {caption: 'Here is your vn'});
// })
// bot.on(['/group'], (msg)=>{
//     return bot.reply.text(bot.getChatMembersCount(msg.from.id));
// })
// bot.on(['/register'], (msg)=>{
//     return msg.reply.text('Visit: https://invest.topfinanceltd.com/auth/signup to login');
// })
// bot.on(['/login'], (msg)=>{
//     return msg.reply.text('Visit: https://invest.topfinanceltd.com/auth/signin to login');
// })
// bot.on(['/website'], (msg)=>{
//     return msg.reply.text('Visit: https://topfinanceltd.com to visit website');
// })

// bot.start();

// function constructReply(message){
//     if(message.toLowerCase() == 'Hi'.toLowerCase()){
//         return 'Hello welcome Emmanuel';
//     }
// }
function intro(msg){
    bot.sendMessage(msg.from.id, `Welcome to Top Finance LTD. Some helpful Commands are \n 1. Enter /menu to view menu.\n 2. Enter /website to get website link. \n 3. Enter /register to watch a video step on how to invest. \n4. Enter /login to get website link. \n5. Enter /stepVideo to watch a video step on how to invest. \n6. Enter /vn to receive a voice note. \n7. Enter /group to create new group\n
                                  `, 
                                  { replyToMessage: msg.message_id });
    // bot.sendMessage(msg.from.id, 'Enter /video to get the video.', { replyToMessage: msg.message_id });
    // bot.sendMessage(msg.from.id, 'Also, less i forget, you can also send a sticker to get a surprise image to download for free', { replyToMessage: msg.message_id });
}