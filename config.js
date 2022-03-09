/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
	dapuhy: 'https://dapuhy.xyz',
        leys: 'http://leyscoders-api.herokuapp.com',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'exz123',
	'https://dapuhy.xyz': 'ekaa123',
        'http://leyscoders-api.herokuapp.com': 'dappakntlll',
}

// Other
global.owner = ['6289618777587','6289618777587','6289618777587','6281310665285','6281310665285']
global.packname = '\n\n\nミᵐʳÊ̬kนຊikaོ'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nNezuko-Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '[ ✓ ] Success',
    admin: '[ ! ] Fitur Khusus Admin Group',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: '[ ! ] Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: '[ ! ] Fitur Khusus Pengguna Nomor Bot',
    wait: '[ ⏳ ] Loading...',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
