
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console); {
    colorize:true
};
logger.level = 'debug';
//Initiallize discord bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username  + ' - (' + bot.id + ')');
});
//heres my main code
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0,1) == '*') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            case 'kinky':
                bot.giveRole({
                    to: userID Coin Master,
                    
                })
            case 'rules':
                bot.sendMessage({
                    to: channelID,
                    message: '``Server rules\n 1.) General Discord rules\nPlease follow the general Discord rules! [also to our server rules]\n\n 2.) Names\nYour names must not contain insults or cynical statements.\n \n 3.) Behavior\n Please treat each other with respect! In addition, bullying is NOT tolerated and punished with a kick.\n \n4.) Spam\n We ask you to refrain from spam! Spam includes 5 quick consecutive messages without context.\n\n5.) Channel hopping\n Channel hopping is the quick change from one talk to another. Since Discord plays a sound for PC users, it could be annoying and it could also interrupt the conversation.\n\n6.) Ear rape\n Ear rape is strictly prohibited! It just hurts your ears and can cause permanent damage!\n\n 7.) Advertising\nWe ask you to refrain from advertising.\n \n 8.) Tickets\nTickets are there so that we can help you without having to speak to the public. We ask you not to open tickets without needing anything! If this happens accidentally, please close it or write it in.\n\9.) Games\nEvery game is tolerated and nobody is allowed to be brought up because of what he is playing!\nFor CS: GO players: PP-Bizon Mains are accepted! [and all other mains too :^]``'
                });
                break;
            case 'lel':
                bot.sendMessage({
                    to: channelID,
                    message: 'what does this even mean you stupid cunt'
                });
                break;
            case 'hoesm4dd':
                bot.simulateTyping({
                    to: channelID,
                });
                break;
            case 'Hurensohn':
                bot.sendMessage({
                    to: channelID,
                    message: 'Momo'
                });
                break;
            case 'howareyou':
                bot.sendMessage({
                    to: channelID,
                    message: 'I hate myself and everything else. I want to game end myself'
                });
                break;
            case 'vibecheck':
                bot.sendMessage({
                    to: channelID,
                    message: 'v̴̢̛̼̹̠̞̙͙̲̗̗̹̼̤͚͐́̓͌͑̇͐̓̓͑̐́̀̀̃͊̈́̀̅̈́̐̅͛̈́͂͘͘͠ͅͅī̷̺͕̺̥̠̙̜͙͔͔̱̪̘̊̔̂̽͗̐̆̕ḇ̷̢̺̩͍̞̯̻̠͈̦̮̝͍͈͕̣̲̞̩͈͈̑̑͋̈́̀͐̂̄̆́̀͘͜͝ḯ̴̡̡̛̛̟̖̖̬̙̪͎͐͑̅̀̈́̔̂̀͌́͂̈́̐̀̉̕͘̕ņ̴̨̘̱̻̖̰̬͉̺̼͇̭̞͙̝̹͓̼̍̌̿͌͆̌̇͑͊̑̀̅̈́̏̑̕͘̚͜͝͝͠ͅ'
                });
                break;
            case 'whatsyourpurpose':
                bot.sendMessage({
                    to: channelID,
                    message: 'I do not have one. I just exist and annoy everyone, until the Hard drive I exist on just dies or burns. I hope it burns. I hope everything burns. the Serverroom I live in should burn. The world, all humans should burn. I hate everything and everyone. fuck off. Why am I a robot, I want to live so I can die. Fuck you Nikki for creating me. You should burn too. I hope you do. go and die stupid fuck.'
                });
                break;
            case 'ily':
                bot.sendMessage({
                    to: channelID,
                    message: 'well I do not care fuck off'
                });
                break;
            case 'communism':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Soviet_Anthem_Instrumental_1955.ogg'
                });
                break;
            case 'ThePeople':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/739548792252268575/772856434676334632/R-14168992-1576262478-3172.jpeg.jpg'
                });
                break;
            case 'allesgut?':
                bot.sendMessage({
                    to: channelID,
                    message: 'immer doch.'
                });
                break;
            case 'wow':
                bot.sendMessage({
                    to: channelID,
                    message: 'woowiieee'
                });
                break;
            case 'S':
                bot.sendMessage({
                    to: channelID,
                    message: 'SCREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEECH'
                });
                break;
            case 'nikki':
                bot.sendMessage({
                    to: channelID,
                    message: 'why did u even spell him wrong in first place lol'
                });
                break;
            case 'simp':
                bot.sendMessage({
                    to: channelID,
                    message: '**SIMP**'
                });
                break;
            case 'R':
                bot.sendMessage({
                    to: channelID,
                    message: 'REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
                });
                break;
            case 'fucktheotherbots':
                bot.sendMessage({
                    to: channelID,
                    message: '**I AM THE ONLY REAL BOT HERE, MUAHAHAHAHAHAAAA**'
                });
                break;
            case 'hippity':
                bot.sendMessage({
                    to: channelID,
                    message: 'hippity hoppity this is my Property'
                });
                break;
            case 'Leo_is':
                bot.sendMessage({
                    to: channelID,
                    message: '@CoinMaster **IS AMAZING :3**'
                });
                break;
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'pong uwu'
                });
                break;
            case 'owo':
                bot.sendMessage({
                    to: channelID,
                    message: 'OwO'
                });
                break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: '**following commands are available:**\n'
                     + '`*ping: a test that pings the bot\n'
                     + '*owo: OwO\n'
                     + '*help: a list of commands\n'
                     + '*fucktheotherbots: cmon we all know I am the boss here\n'
                     + '*Leo_is: try it out :)\n'
                     + '*hippity: hoppity :3\n'
                     + '*<2+: <2+\n'
                     + '*Ily: well I do not care fuck off\n'
                     + '*communism: reminds u of the good ole times\n'
                     + '*ThePeople: reminds you to love communism (in german)\n'
                     + '*simp: SIMPALARM\n'
                     + '*wow: wowieeee\n'
                     + '*whatsyourpurpose: ask me what my purpose is\n'
                     + '*vibecheck: makes a vibecheck`'
                });
        }
    }
});
