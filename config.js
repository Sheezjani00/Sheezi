const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923070110525'
global.devs = '923070110525';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'SHEEZI-CREATION' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'SHEEZ_JANI' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUp2dktFZHlpeENNcWs5KzR3SStyR1NDWWlBekpPYkhtSkl6US9SdC9rdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnBVVWhhYzhzcVo4WWZoOTliNFBnWGlhZE1FUGRWZ3ZTSituS0lUN2xIOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UFFuZFlLOWNMb1lPNFdSVVBITDJ1OHlBbW41c1F3V0NYZEFvcVJSMUZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOTlBEWXU5b2FjTHF3U09YUlp4YlBROEJza2J4WkVnOG9oUUdEUGx3b2xVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdPa1ZiM0tSdzNmSEc5MHo1bGJnOTZmUXlPK2lMUFl6UDhaU2dkQy9BSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJNNHZzQTNISldnc0lFUUswUXRUaEdvbjZmdWtpcnJXRjg4RWxwbnVxQjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUUrR2h0eFVoV0N2NHAwNm1Yb04rWVZOc3dBTFY5TjlJWm5nUG84N3QzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidktXNm9xOTAweVdXR0FjWTVJV3BXeC95bHdQSEZFd2RlMEs3NThMaytRWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhNNWdKQjdXczBkMDVsUUVEQms3aXFURG10VUFpUnlzODVUa2xwVFRVbnIxR2twQ3dXc1JCdzh6aytxVlZDZG04YURzK3EycWthVXhtaTV3cVdDVmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM5LCJhZHZTZWNyZXRLZXkiOiJLdGF5azJScm5uWmtwRE9SdlZHOU9JeTFHZ2QxUTUwOERYVE9OYnZtSXpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0QXo3QXJVTVM1T1J4R0Y0a0prazBRIiwicGhvbmVJZCI6Ijk5ZDFjMmUzLWNjMDItNDBkOC04MzI3LTAwZTA1YmI0NDFhYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyMnlVR0tmZkx4ZzcvR3l1MFZiYjQzYTB3Ymc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkJEUnJISDJzdzI3WkQ3dW5tMXJFSDlCeXI0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZGRDlINERFIiwibWUiOnsiaWQiOiI5MjMwNzAxMTA1MjU6MjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tMeWp1Z0VFTytTenJVR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVyWnZIUEgzQ0lnc1MwelBKci9wcnBTSXhhUVBiRzA5cWw5dk84enBFMUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitNWUNscU9VZE5BbGlxeS9GbTloNGhLUnRNTzViWk1QaE9FK2NGTFptbFNtalhNdG1XYzM3QkFHVC9Ic2Zjbk9aeEJtdHBSR1ZSZmp3QktTUWZ2MkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDT0ZPU0FVMVdmalFSaG5UNXBPYkwwZVBidXdrNW1hWHhzYlh2ajYzd2tuRmorMDU5V2VTTUVGRm0vZUNpeDMrOHoyVzF5cGQxcU85a1IxdG82K2xqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA3MDExMDUyNToyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWSzJieHp4OXdpSUxFdE16eWEvNmE2VWlNV2tEMnh0UGFwZmJ6dk02Uk5TIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMDQyMTcyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNveSJ9' false : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'SHEEZ_JANI' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'SHEEZI-CREATION ' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
