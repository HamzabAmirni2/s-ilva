const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/bd7de62f35507d6b4c2de.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sylivanusmomanyi@gmail.com"
global.location="Kisii,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363180849475037@g.us"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SilvaTechB/silva-md-bot";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va5mXGNLdQeXkib1M82X" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9c522f89834cfb510738d.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ" 


global.devs = "212624855939" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "212624855939";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212624855939";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9c522f89834cfb510738d.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,212624855939";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "212624855939, 212624855939";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://silvatech.vercel.app";


global.SESSION_ID = process.env.SESSION_ID ||  "{"noiseKey":{"private":{"type":"Buffer","data":"oCMZvt1O6dv7TY4TtP9boWiFl0i1+y9VNTAMHyFFJXI="},"public":{"type":"Buffer","data":"AHxuYnWZo++IrLp9UBj70s+sY0fxf2d1dtMvM4fRWhA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"CCeR/LIdtOf+CfS7HdbYk5PumF+mXJ5+w0LmPILLtGM="},"public":{"type":"Buffer","data":"kk6BC7G1wHlpl+VLXDUdgw7WjYDwgCGHQnZGk2RxSCg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"IHMMXqZ5MkLcN/9tRE+0mGBLA8kGn9Y1NaLocztG+Gk="},"public":{"type":"Buffer","data":"ttIcrn+Abo54EnRrkYxS+i4T4JJh6NmNuQpi1CsneBk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2Kp6kKAomcDnd/DCq2KN/Drm7ZFrUszadh9ZQeMyvlA="},"public":{"type":"Buffer","data":"pi9hp87SQVqmz4/DjzQlOw6XjHSV2r8mtFlheoCHvn0="}},"signature":{"type":"Buffer","data":"p76YUIBNXNa/EOXIts2rqLV5ko82D2Ja6c4b3zoPS+XvlVjSVRZ7+qQanX56NOd/USW8/IQtFk4IHdf+i+AAig=="},"keyId":1},"registrationId":191,"advSecretKey":"SbS3Berxu7r5RAVcyrHk5PpF3UvFZmpGZLQEwIgn0xc=","processedHistoryMessages":[{"key":{"remoteJid":"212708869993@s.whatsapp.net","fromMe":true,"id":"349BAE37ABFB5A4E88FEBBFDE06499CC"},"messageTimestamp":1721084344}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"E4cKlWOgSQWpNyHd3W7ZTw","phoneId":"d313b92e-8eda-4db1-864d-9d1cadd578b8","identityId":{"type":"Buffer","data":"9x+7GmSQ+4WVQXYIghwCP9T6sUM="},"registered":true,"backupToken":{"type":"Buffer","data":"GBWgfLHR3JQ1nDfKwKwLrLN0YIE="},"registration":{},"pairingCode":"7KYCX9QB","me":{"id":"212708869993:18@s.whatsapp.net","name":"bot Hamza  amirni","lid":"154949870690457:18@lid"},"account":{"details":"CKmY/GcQsdPWtAYYBCAAKAA=","accountSignatureKey":"ZdCuZ0uRp+oha0updAs57FpisM5vyZPiIDnuLi4x6C4=","accountSignature":"P0fuACdvmC038ZH0XbxYX5vufqigYiMcWAk1zOli+yBU+9mWZLZp/uazMuA4kC6geqF5CEUqXkcfNXeat1U4AA==","deviceSignature":"9W0OUvXxm0IZkaRcSF6nkZz1b0stRasIp3nhmMPlvhzm4FWhUePn8ht/5wMdn76MD4JfLnHzJYyBfOT8MloJig=="},"signalIdentities":[{"identifier":{"name":"212708869993:18@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWXQrmdLkafqIWtLqXQLOexaYrDOb8mT4iA57i4uMegu"}}],"platform":"smba","lastAccountSyncTimestamp":1721084340,"myAppStateKeyId":"AAAAAEoL"}"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "2.3.9",
  caption : global.caption || "『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』" , // ```『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』```", //*『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉』*\n tiktok.com/@silva.edits6"),
 
  author : process.env.PACK_AUTHER|| "silva",
  packname: process.env.PACK_NAME || "tech",
  botname : process.env.BOT_NAME  || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉",


  errorChat : process.env.ERROR_CHAT || "254743706010",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "DJwc34NaWmhXmDxEeh6YUEmm",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SILVA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
