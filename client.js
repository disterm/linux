'use strict';
const Discord = require('discord.js');
const client = new Discord.Client; // lines 2 and 3 setup the discord.js client
const token = process.argv[2];
const moment = require('moment');
const colors = 'colors';
const emojic = require('emojic')
const emoji = require('node-emoji');

client.once('ready', () => {
console.log(emojic.whiteCheckMark, ' Connected!')
});

client.on('message', async message => {
  if (message.content == 'help') {
    message.channel.send('Welcome to TermCord!\n This bot is connected to the TermCord server via Token.\n More commands will be added in the future.')
  }
  const dateCreated = moment(message.createdAt)
  if (message.author.username == client.user.username) {
  } else {
    if (message.attachments.size > 0) {
      console.log('\n', `${message.author.tag}: ${emoji.emojify(message.content)} ( Sent at ${dateCreated.format("LTS")} )\n[${message.author.username} Sent a attachment]`);
    } else {
console.log('\n', `${message.author.tag}: ${emoji.emojify(message.content)} ( Sent at ${dateCreated.format("LTS")} )`);
    }
}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
 readline.resume();
readline.question('> ', msg => {
  message.channel.send(msg, { timeout: 1000 /*time unitl delete in milliseconds*/})
  readline.pause();
});

});

client.on('messageReactionAdd', async (reaction, user) => {
console.log(`${user.username} Reacted to a message by ${reaction.message.author.username}.[${message.content}]`)
});


client.login(token);
