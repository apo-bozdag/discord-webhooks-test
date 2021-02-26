
const Discord = require('discord.js');
const config = require('./config.json');
const webhookClient = new Discord.WebhookClient(
  config.webhookID, config.webhookToken
);

const embed = new Discord.MessageEmbed()
  .setTitle('Test Blog bilmem ne')
  .setColor('#0099ff');

const embed2 = new Discord.MessageEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://www.radkod.com/")
  .addFields({ name: "This is a field title, it can hold 256 characters",
      value: "This is a field value, it can hold 1024 characters."})
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addFields({ name: "Inline Field", value: "They can also be inline.", inline: true })
  /*
   * Blank field, useful to create some space.
   */
  .addFields({ name: '\u200b', value: '\u200b' })
  .addFields({ name: "Inline Field 3", value: "You can have a maximum of 25 fields.", inline: true});


webhookClient.send('Webhook test', {
  username: 'RadKod Bot Test',
  avatarURL: 'https://raw.githubusercontent.com/selimdoyranli/material-form/master/img/logo.png',
  embeds: [embed,embed2],
});
