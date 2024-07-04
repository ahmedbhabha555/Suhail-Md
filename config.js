const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʜᴍᴇᴅ ʙʜᴀʙʜᴀ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923256434114";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_36_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAwLFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgMjM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDY1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OCxcbiAgICAgICAgNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHeHp4Rk1HeWJyODBIa24rMHNKSDVIcTdJUUNlcE02N25HbmVwUHNZZ3p3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI1NjQzNDExNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjBENjkzRURENzY5QkQ1RkMxRDk1ODYyNzlFQTZEMUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDY0MTg5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjU2NDM0MTE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRjMyREYwRjJDOEEyRTM3MDhGNkU2NzdGRTc0OEI0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwNjQxOTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS0ZVZU1rUlFSY0d4SmhQRzVhR2std1wiLFxuICBcInBob25lSWRcIjogXCIyMWJjM2E5MC1kYjc1LTRhMGYtOTQzMi1kYjFmMzljYjcwZmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAxOTIsXG4gICAgICAxODQsXG4gICAgICAyMzIsXG4gICAgICAxNzksXG4gICAgICAxMDcsXG4gICAgICAxOTQsXG4gICAgICA3NixcbiAgICAgIDIyMyxcbiAgICAgIDMxLFxuICAgICAgNDcsXG4gICAgICAxMDYsXG4gICAgICAxOTUsXG4gICAgICAyMzAsXG4gICAgICAxOTgsXG4gICAgICAxMTYsXG4gICAgICAyMTIsXG4gICAgICAxNDcsXG4gICAgICAxNyxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDQzLFxuICAgICAgOTYsXG4gICAgICAxNTAsXG4gICAgICAxMTQsXG4gICAgICA1NyxcbiAgICAgIDE3OCxcbiAgICAgIDEsXG4gICAgICAxMjIsXG4gICAgICAyMjUsXG4gICAgICAxNTgsXG4gICAgICAyMjUsXG4gICAgICA2NyxcbiAgICAgIDI0NyxcbiAgICAgIDE4MixcbiAgICAgIDExNyxcbiAgICAgIDUwLFxuICAgICAgMTU1LFxuICAgICAgMzUsXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOU5SQzhCRVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI1NjQzNDExNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NDMwOTI3NzgxNDg4MzoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKYhuKeotin2K3ht5/ZgNmA2YDht6fZgNmA2YXNpdmA2YDYr+C/kOKZmu+4juKYhlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpeXVvWUVFTFN4bUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRWNuLzEwM0NnV1FCcDVUbVpydGxnMGwxZGZrMkRVdEtMQjFKWEpBNi9HND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCQ09sMWxVek1BTzNzQjJQQ09LbE1kUmp4OG9Ib29YdzIxbU1uWVBRWjVGeVVpMzlqOFNHQW9pZjNtdHlabmVlNDY2M1FGbWRQa3grNzlVamJQM2pCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJabEROUjJmVzZSVHRlSWhJWEZ3TEo5NmlabEJnWEZnbWRzR3hHbE1objRxWFIzZlpwYkhSUS95dWFpMW5sN1hETmxCNTJZYjcvWmVGcDdMbXBxd3ZDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNTY0MzQxMTQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwNjQxODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCOXlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUI5eS5qc29uIjogIntcImtleURhdGFcIjpcImNxMUFBQnZyZnlaNWM4VnB3YnNhSythdS85Sm1PdG80UXFIYkxXZWZncXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA4NzI4MTUyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDY0MTg2Mzg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʜᴍᴇᴅ』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴀʜᴍᴇᴅ",
  ownername:process.env.OWNER_NAME|| "ᴀʜᴍᴇᴅ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
