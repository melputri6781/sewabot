import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    if (!text) throw 'What do you want to create?'
    
let f = await (text)
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })
    let msg = encodeURIComponent(text)
    let res = await fetch(`https://aemt.me/bingimg?text=${msg}`)
    let data = await res.json()
    console.log(data)
    let buffer = data.result
    conn.sendFile(m.chat, buffer, 'image.png', `${text}`, m)
}

handler.help = ['bingimg <query>']
handler.tags = ['AI']
handler.command = /^bingimg$/i

export default handler