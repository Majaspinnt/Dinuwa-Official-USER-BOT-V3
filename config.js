// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • FahriAdison
// • The.Sad.Boy01
// • Rlxfly
// • Rasel comel
// • ImYanXiao
// • Xtreshe (Beban)
// • Dll

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Karachi').format('HH')
    let wibm = moment.tz('Asia/Karachi').format('mm')
    let wibs = moment.tz('Asia/Karachi').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['💖', '💖', '💖', '💖', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// if you don't have it, type "-" or leave it alone so that there are credits :v
global.sig = '-' //Link Instagrammu
global.sgh = '-' //Link Githubmu
global.sgc = '-'
global.sdc = '-' //Fill it out using the Discord link, if there is one, just leave it
global.snh = '-' //Hmmm, This is up to you to fill in :v

/*============== PAYMENT ==============*/
global.pdana = '085736178354' //Nomor Danamu
global.ppulsa = '085736178354' //Nomor SimCard Yang Kamu Pake
global.psaweria = 'https://saweria.com/XiaoYan021' //Link Saweriamu Kalo Nggada Ketik - aja

/*============== NOMOR ==============*/
global.nomorbot = '4915213644174' //Nomor Bot
global.nomorown = '4915166237236' //Nomor Owner
global.namebot = 'Isolde MaArbeiten' //Nama Bot
global.nameown = 'Lenlen.' // Nama Owner


/*============== CHATGPT ==============*/
global.openAiapi = ''   // Paste your API key here from Openai website
//-----------------------> https://platform.openai.com/account/api-keys

/*============== STAFF ==============*/
global.owner = [
  ['4915166237236', 'Lenlen', true] //Replace your number with your name
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = ['4915166237236'] // Premium user is not here to add it, type .addprem @ user 10

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.lolkeysapi = ['BrunoSobrino']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkey = 'apikeymu'
global.xkey = 'APIKEYMU'
/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  violetics : 'https://violetics.pw',
  zenz: 'https://zenzapi.xyz',
  males : 'https://malesin.xyz',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEYMU',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Apikeymu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zenzapi.xyz': '01ABEB1E11',
  'https://violetics.pw': 'beta',
  'https://api-fgmods.ddns.net': 'fg-dylux'
}
// The word APIKEY is filled with your own apikey, by buying it on the website

/*============== WATERMARK ==============*/
global.wm = '「 ▁ ▂ ▃ ▅ ▆ ▇ █ Isolde MaDuschn █ ▇ ▆ ▅ ▃ ▂ ▁ 」' //Main Watermark
global.wm2 = '▁ ▂ ▃ ▅ ▆ ▇ █ Isolde MaDuschn █ ▇ ▆ ▅ ▃ ▂ ▁'
global.wm3 = 'Isolde MaDuschn'
global.footerTXT = `TinaBOT-V3 • `
global.botdate = `▁ ▂ ▃ ▅ ▆ ▇ █💖█ ▇ ▆ ▅ ▃ ▂ ▁ Date: ${week} ${date}`
global.bottime = `Time : ${wktuwib}`
global.titlebot = '▁ ▂ ▃ ▅ ▆ ▇ █TinaBOT-V3 •█ ▇ ▆ ▅ ▃ ▂ ▁'
global.author = global.wm
global.logo = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg'



/*============== LOGO ==============*/
global.thumb = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg' //Main Thumbnail
global.thumb2 = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg'
global.thumbbc = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumblvlup = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg'
global.hwaifu = ['https://i.ibb.co/T1DqdYz/thumbnail.jpg']

/*============== FlamingText ===========*/
global.flaaa = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='] 

/*============== TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```404 error```'
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+94 74 080 4536'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

global.thumbdoc = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '5644' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═IsoldeMaDuschn┅═━–〈' //top
global.dmenub = '┊💖' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––IsoldeMaDuschn––––––✦' //footer

// COMMAND MENU
global.dashmenu = '▁ ▂ ▃ ▅ ▆ ▇ █ *. Isolde MaDuschn .* █ ▇ ▆ ▅ ▃ ▂ ▁'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊.'                            //body
global.cmenuf = 'Isolde MaDuschn\n'                //footer
global.cmenua = '\n⌕ ▁▂▃▅▆▇█Dinuwa Official²⁰²³█▇▆▅▃▂▁ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '💖'    //hiasan Doang :v
global.hsquere = ['⛶','❏','💖']

/*============== STICKER WM ==============*/
global.stickpack = 'Isolde MaDuschn'
global.stickauth = `「 Isolde MaDuschn 」`
global.packname = 'Cʀᴇᴀᴛᴇᴅ Bʏ Isolde MaDuschn '
global.packname2 = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ Isolde MaDuschn '

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

//------ FUNCTION
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
