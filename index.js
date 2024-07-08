const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('7UP اهلا بك في سيستم')
});

app.listen(3000, () => {
  console.log('7up GO GO ');
});

const Discord = require("discord.js");
const ms = require("ms");
const data = require("st.db");
const axios = require("axios");
const { QuickDB } = require('quick.db');
const DB = new QuickDB()
const client = new Discord.Client ({
  intents: 3276799
});

const { MessageActionRow , MessageButton } = require('discord.js');

const { DiscordModal,ModalBuilder,ModalField } = require ('discord-modal');
DiscordModal(client)

// تعديل 
const prefix = "-"; // البريفكس الي بدكياه  

require('events').EventEmitter.defaultMaxListeners = 9999999; // لا تلعب بالكود هذا

// تعديل 
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag} Online`);
client.user.setActivity(`here`, {type:"PLAYING"}) // حط الحالة الي بدكياه
client.user.setStatus("online"); // هنا لو عايز تغير تعيين الحاله مثال
});

// ================================================================================
// PLAYING   1
// LISTENING 2
// WATCHING  3
// COMPETING 4
// ================================================================================
// online    1
// idle      2
// dnd       3
// offline   4
// ================================================================================

process.on("uncaughtException" , error => {
return;
})

process.on("unhandledRejection" , error => {
return;
})

process.on("rejectionHandled", error => {
return;
});

// تنزل الاكواد الي تريدها هنا
// يلزم يكون اصدار 13 اهم شي عشان يشتغلو 
// سطر 73 نزل فيه اول 
 



// كود يحول اي رسالة في الروم الى ايمبد
const embed_channels = ["1259295681160675481"];  //تقدر تضيف اكثر من روم
let e_line = https://media.discordapp.net/attachments/1132976423943028798/1161021250345386015/Line1.png?width=1440&height=93; //رابط الخط
client.on("messageCreate", async (message) => {
  if (message.author.bot || message.channel.type === "DM") return; //fxdark1.
  if (embed_channels.includes(message.channel.id)) {
    let embed = new EmbedBuilder() //fxdark1.
      .setAuthor({
        name: ${message.author.username},
        iconURL: ${message.author.displayAvatarURL({ dynamic: true })},
      }) //fxdark1.
      .setThumbnail(${message.author.displayAvatarURL({ dynamic: true })})
      .setDescription(${message.content}) //fxdark1.
      .setColor('Random')
      .setTimestamp(); //fxdark1.
    message.delete().then(async () => {
      await message.channel.send({ embeds: [embed] })
      await message.channel.send({files : [e_line]})
    });
  }
});


client.login(process.env.token).catch((error) => {
console.warn("\033[31m Token Invalid")
})