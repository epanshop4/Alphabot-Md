const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://epannnotketchee.herokuapp.com/',
}

// Free apikey
global.APIKeys = {
	'https://epannnotketchee.herokuapp.com/': 'Alphabot',
}

// setting 
global.autoread = false // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "𝐕𝐮𝐳𝐦𝐦𝐁𝐨𝐭-𝐌𝐝" //namabot kalian
global.ownername= "𝐌𝐮𝐡𝐚𝐦𝐚𝐝 𝐄𝐩𝐚𝐧𝐧" //nama kalian
global.myweb ="https://epannnotketchee.herokuapp.com" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCxiEnR1d5w_HxmygDPsDnQg" //bebas asal jan hapus
global.github = "https://github.com/epanshop4" //bebas
global.email = "epanshop4@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "62882006377070" // nomor wa kalian
global.ownernomerr = "+62882006377070" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["62882006377070","62882006377070","62882006377070"] //ganti agar fitur owner bisa di gunakan
global.packname = '© 𝐌𝐮𝐡𝐚𝐦𝐚𝐝 𝐄𝐩𝐚𝐧' //sticker wm ubah
global.author = '𝐃𝐢𝐛𝐮𝐚𝐭 𝐨𝐥𝐞𝐡 𝐌𝐮𝐡𝐚𝐦𝐚𝐝 𝐄𝐩𝐚𝐧' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗𝐃𝐨𝐧𝐞, 𝐎𝐤𝐞 𝐁𝐚𝐧𝐡𝐡~',
    admin: '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐢𝐧𝐢 𝐡𝐚𝐧𝐲𝐚 𝐛𝐢𝐬𝐚 𝐝𝐢 𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐨𝐥𝐞𝐡 𝐚𝐝𝐦𝐢𝐧 𝐠𝐜',
    botAdmin: '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐢𝐧𝐢 𝐡𝐚𝐧𝐲𝐚 𝐛𝐢𝐬𝐚 𝐝𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐤𝐞𝐭𝐢𝐤𝐚 𝐛𝐨𝐭 𝐦𝐞𝐧𝐣𝐚𝐝𝐢 𝐚𝐝𝐦𝐢𝐧 !',
    owner: '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐢𝐧𝐢 𝐡𝐚𝐧𝐲𝐚 𝐛𝐢𝐬𝐚 𝐝𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐨𝐥𝐞𝐡 𝐨𝐰𝐧𝐞𝐫 𝐛𝐨𝐭 !',
    group: '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐢𝐧𝐢 𝐡𝐚𝐧𝐲𝐚 𝐛𝐢𝐬𝐚 𝐝𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐝𝐢 𝐠𝐫𝐨𝐮𝐩 !',
    private: '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐢𝐧𝐢 𝐡𝐚𝐧𝐲𝐚 𝐛𝐢𝐬𝐚 𝐝𝐢𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐝𝐢 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 !',
	bot: '𝐅𝐢𝐭𝐮𝐫 𝐤𝐡𝐮𝐬𝐮𝐬 𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐧𝐨𝐦𝐨𝐫 𝐛𝐨𝐭',
    errtoimg: '𝐌𝐚𝐚𝐟 𝐬𝐚𝐚𝐭 𝐢𝐧𝐢 𝐛𝐞𝐥𝐮𝐦 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐠𝐢𝐟 !',
    wait: '⏳ 𝐏𝐫𝐨𝐬𝐞𝐬 𝐝𝐮𝐥𝐮 𝐛𝐚𝐧𝐡',
	lockCmd: '𝐅𝐢𝐭𝐮𝐫 𝐭𝐢𝐝𝐚𝐤 𝐝𝐢 𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐨𝐥𝐞𝐡 𝐨𝐰𝐧𝐞𝐫 𝐛𝐨𝐭!',
	example1: '𝐖𝐞𝐥𝐜𝐨𝐦𝐞𝐞 @user Di Group @subject 𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐚𝐜𝐚 𝐑𝐮𝐥𝐞𝐬 𝐘𝐚 𝐊𝐚𝐤 @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
