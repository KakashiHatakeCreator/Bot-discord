const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const config = require("./config.json");
let prefix = config.prefix;
const keepAlive = require('./server.js'); 
const db = require('megadb')
const levels_db = new db.crearDB('niveles');
const prefixset = new db.crearDB('prefix')

const prefix_db = new db.crearDB('prefix')

const discord = require("discord.js")
const {MessageEmbed} = require("discord.js")
const zeeweconomy = require("zeew-eco");
new zeeweconomy.Options("mongodb+srv://KakashiHatake:KakashiHatakeNarutoUzumaki@cluster1.m8leq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"); 
const eco = new zeeweconomy.Economia();



const TicTacToe = require('discord-tictactoe');
const bot = new TicTacToe({
  clientId: '',
  token: '',
  language: 'es',
  command: '!ttt'
}); 
bot.connect().catch(() => console.error("Hubo un error..."));

client.on('ready', () => {

  console.log(`¡Lista para la acción!
¡Ya son: ${client.channels.cache.size} canales de texto y ${client.guilds.cache.size} servidores miaw!~`);

 var tabela = [
{ name: `!help | ! | ! | ! | v.3.5 `, type: 'PLAYING' },
{ name: `${client.guilds.cache.size} servidores  | v3.5 ♥`, type: 'PLAYING' }
];

function setStatus() {
var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
client.user.setActivity(altstatus)
}
setStatus("dnd")
setInterval(() => setStatus(), 100000)
})









client.on('message', async message => { //Abrimos un evento message, esto es muy importante porque es donde estarán los comandos

let prefix;
  if (prefixset.tiene(message.guild.id)) {
    prefix = await prefixset.obtener(message.guild.id)
  } else {
    prefix = '!'
  }   

//////////////HANDLER//////////////

client.commands = new Discord.Collection();
const commandFlies = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for(const file of commandFlies){
  const command =require(`./comandos/${file}`);
  client.commands.set(command.name, command)
} //Con esto hacemos que el bot no responda a mensajes de otros bots lo cual evitará que entre en bucles
if(!message.content.startsWith(prefix)) return; //Aquí hacemos que si el mensaje no empieza con el prefix el bot no responda

let usuario = message.mentions.members.first() || message.member; //Definimos el usuario
const args = message.content.slice(prefix.length).trim().split(/ +/g); //Definimos los argumentos
const command = args.shift().toLowerCase(); //Definimos el comando

//Aquí irían los comandos que pondremos más adelante




if (command === 'say') {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.deletable) message.delete()
  if (args.join(" ").length < 1) return message.channel.send("Miaw debes decir un mensaje");
  let permisos = message.channel.permissionsFor(message.member);
  message.channel.send(args.join(" "), {
  disableMentions: permisos.has("MENTION_EVERYONE") ? "none" : "everyone"
  });
}


if (command === 'clear') {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if(message.deletable) message.delete()
   let cantidad = parseInt(args[0]);
  if(!cantidad) return message.channel.send("Debes decir una cantidad de mensajes correcta").then(msg => msg.delete({timeout: 3000}));
message.channel.bulkDelete(cantidad);
}

if(command === "help") {
  const help = new Discord.MessageEmbed()
        .setTitle('Comandos :')
        .setDescription(`El prefix por defecto es **!**. Para cambiar el prefix, use el comando **setprefix**.`)
        .setColor('RANDOM')
        .addField("")//segun su nesecidad ponen mas addfield//xd
        .setTimestamp()
        .setFooter(`• Bot creado | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
        if(message.deletable) message.delete()
message.author.send(help);
}







if(command === "ship") {
  let user = message.mentions.users.first() 
  if(!user) return message.channel.send(":x: || Debes mencionar a alguien-nya") || client.users.cache.get(args[0]) || message.author;
  const cero = `https://cdn.discordapp.com/attachments/791270423630315521/817739616408961024/Noembed.png`
  const diez = `https://cdn.discordapp.com/attachments/791270423630315521/817739571386515526/10.png`
  const veinticinco = `https://cdn.discordapp.com/attachments/791270423630315521/817739573181284372/25.png`
  const treinta = `https://cdn.discordapp.com/attachments/791270423630315521/817739574948003850/30.png`
  const cuarentayocho = `https://cdn.discordapp.com/attachments/791270423630315521/817739576729927690/48.png`
  const cincuenta = `https://cdn.discordapp.com/attachments/791270423630315521/817739578529021997/50.png`
  const sesentaysiete = `https://cdn.discordapp.com/attachments/791270423630315521/817739580060860444/67.png`
  const setentaydos = `https://cdn.discordapp.com/attachments/791270423630315521/817739581365551164/72.png`
  const ochentaycuatro = `https://cdn.discordapp.com/attachments/791270423630315521/817739583344345138/84.png`
  const noventaynueve = `https://cdn.discordapp.com/attachments/791270423630315521/817739585127317534/99.png`
  const cien = `https://cdn.discordapp.com/attachments/791270423630315521/817739587203104778/100.png`
  
  const lol = [cero, diez, veinticinco, treinta, cuarentayocho, cincuenta, sesentaysiete, setentaydos, ochentaycuatro, noventaynueve, cien]
  let amor = lol[Math.floor(Math.random() * lol.length)]
  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username} y ${user.username} son compatilbes un...`)
  .setImage(amor)
  .setTimestamp()
  .setThumbnail('https://media.discordapp.net/attachments/819889697844101130/830134997766635530/love.gif')
  .setFooter(`• Bot creado por ღ  Kakashi Hatake#6207 | Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
  message.channel.send(embed)
}



///////////INFO Y DEMÁS///////////



if(command === "invite") {
  const invite = new Discord.MessageEmbed()
        .setTitle('Server support')
        .setDescription('Esta es mi invitación  [click here](link xd )')
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail('https://fondosmil.com/fondo/4596.jpg')
        .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.author.send(invite);
}
if(command === "invite") {
let user = message.mentions.users.first()
  const uno = `:white_check_mark: || Ya te envié miaw invitación al privado-nya`
  const dos = `${message.author.username}, revisa tu MD  :p`
const final = [uno, dos]
  let finallol = final[Math.floor(Math.random() * final.length)]
  message.channel.send(finallol).then(msg => msg.delete({timeout: 3000}));
  message.delete(10000);
}
if(command === "support") {
let user = message.mentions.users.first()
  const uno = `:white_check_mark: || Ya te envié la invitación al privado `
  const dos = `${message.author.username}, revisa tu MD  ;3`
const final = [uno, dos]
  let finallol = final[Math.floor(Math.random() * final.length)]
  message.channel.send(finallol).then(msg => msg.delete({timeout: 3000}));
  message.delete(10000);
}
if(command === "support") {
  const support = new Discord.MessageEmbed()
        .setTitle('Server support')
        .setDescription(`Este es miaw servidor de support [click here](​aqui el link xd)
        
        ¡Únete y pruébame todo lo que quieras!`)
        .setColor('RANDOM')
        .setTimestamp()
        .setThumbnail('https://images-ext-1.discordapp.net/external/ZXUqPw7g0BVqD-hI7x-6DD3br0lLVQDkklYuxsNx_q0/https/cdn.discordapp.com/avatars/787735373304299581/163f7e5c8ae413578ce17fb3596bedc2.webp')
        .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

    message.author.send(support);
}

///////////COMANDOS REACCIÓN///////////



///////////COMANDOS ÚTILES///////////

if(command === "serverinfo") {
var server = message.guild;
  
const embed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.tag +'('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor("RANDOM")
        
message.channel.send(embed);
}
if(command === "MD") {
let mensaje = args.join(" ");
const uno = `:white_check_mark: || Ya te envié el mensaje al privado miaw`
  const dos = `${message.author.username}, revisa tu MD-nya`
const final = [uno, dos]
  let awa = final[Math.floor(Math.random() * final.length)]

if(!mensaje) return message.channel.send(`Escriba un mensaje para enviartelo al MD miaw`);
message.author.send(mensaje);
message.channel.send(awa);
message.delete(10000);
}



if(command === "avatar") {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  if(message.deletable) message.delete() 
  
let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed() 
    .setColor('RANDOM') 
    .setTitle(`Avatar de ${user.username}`) 
    .setImage(avatar) 
    .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed);
}



///////////MENSAJES///////////

if(command === "hola") {
    message.channel.send("Hola, qué tal?");
}
if(command === "bien y tu") {
    message.channel.send("Perfectamente, gracias");
}
if(command === "denada") {
    message.channel.send("Eh... Gracias ;-;");
}
if(command === "tengo sueño") {
    message.channel.send(`En cuanto quieras te puedes ir, yo estaré aquí mañana`);
}
if(command === "buenas noches") {
    message.channel.send(`Buenas noches, duerme bien`);
}
if(command === "buenos días") {
    message.channel.send(`Buenas días, has dormido bien??`);
}
if(command === "cómo dormiste") {
    message.channel.send(`Ya sabes que yo no duermo... :c`);
}
if(command === "me voy") {
    message.channel.send(`Adiós, espero que vuelvas pronto!`);
}

///////////DIVERSIÓN///////////

if(command === "paja") {
    message.channel.send(`Se vino paja?? :0`);
}
if(command === "paja") {
    message.channel.send(`Jsjs`);
}
if(command === "furros") {
    message.channel.send(`Tú qué dirías?? Sí o no a los furros??
    
    _**pon np!sí furros o np!no furros según tu opinión**_`);
}
if(command === "sí furros") {
    message.channel.send(`Estoy de acuerdo jsjs`);
}
if(command === "no furros") {
    message.channel.send(`Me estás insultando ;-;`);
}
if(command === "tragar") {
    message.channel.send(`Tragar corridas de chico o de chica?! Pffff!! Puedes llegar a vomitar!!`);
}
if(command === "otro") {
    message.channel.send(`Ah... Que no te referías a eso... Je... _sonrisa incómoda_`);
}
if(command === "corrida") {
    message.channel.send(`Ves?, a que tengo razón?? uwu`);
}
if(command === "sí corrida") {
    message.channel.send(`Jsjs`);
}
if(command === "no corrida") {
    message.channel.send(`Ah, no estás de acuerdo?! Pues... Ya no me caes bien! U,n,U`);
}


///////////CHISTES///////////

 if(command === 'report') { //primero se crea el comando

    let reportado = message.mentions.members.first()//aqui se esta creando una variable
    let razon = args.slice(1).join(" ")//aqui se esta creando otra variable

    if(!reportado) return message.channel.send(`${message.author.tag} Menciona al usuario que vas a reportar`)//Uso de Mencion al usuario
    if(!razon) return message.channel.send(`${message.author.tag}  Menciona una Razon del reporte`)//uso de razon

          message.channel.send("Usuario Reportado Exitosamente").then(rm=> {
              setTimeout(() => {
               rm.react("ÃÂ¢ÃÂÃÂ")
       }, 0); 
      })
          let rcanal = client.channels.cache.get('846319116922912789');//la id sera donde enviara el mensaje del reporte

           let reporte = new Discord.MessageEmbed()//Mensaje Embed 
           .setTitle("Sistema de Reportes")
           .setThumbnail(message.author.displayAvatarURL())
           .addField("Reportante", message.author.tag)
           .addField("Reportado", reportado)
           .addField("Razon del Reporte", razon)
           .setColor("RANDOM")
           .setFooter("Bot Creado por Kakashi Hatake#6207 ")
           .setTimestamp()

           rcanal.send(reporte).then(r => {
           setTimeout(() => {
            r.react("ÃÂ¢ÃÂÃÂ")
    }, 0);
  });
}






if(command === "avatarpx"){



const Discord = require ("discord.js");
const marsnpm = require("marsnpm"); //instalamos marnsnpm y discord.js

 let userm = message.mentions.users.first() || message.author; //hacemos que el usuario pueda mencionar a alguien o no mencionar a nadie 

let avatar = userm.displayAvatarURL({dynamic: false, format: 'png', size: 2048}) //acá definimos avatar, donde pondremos que si el perfil es animado, que lo ponga como imagen normal, después ponemos que el perfil del usuario sea un archivo png y lo ajustamos a un tamaño de imagen de 2048

let imagen = await marsnpm.pixel(avatar); //definimos imagen donde utilizamos marsnpm para manipular el perfil del usuario y hacerlo pixeleado

let pixel = new Discord.MessageAttachment(imagen, "pixel.png") //acá hacemos un MessageAttachment

message.channel.send(pixel); 



}





if(command === "hp"){
 if(!args[0]) return message.channel.send("Indicame tu signo zodiacal").then(m => m.delete({timeout: 10000})) //si el usario no escribe una "option" establecida el bot responderá esto, ademas le inclui que el mensaje se borro pasado un tiempo.
  
    let Options = ["libra", "tauro", "cancér", "capricornio", "sagitario", "géminis", "piscis", "leo", "aries", "virgo", "escorpio", "acuario", "cancer", "geminis"]
    //Estas son las opciones que el usuario debe mencionar seguido del comando, y se pueden agragrar otras para personalizar el comando a tu gusto.
    
    if(!Options.includes(args[0].toLowerCase())) return message.channel.send("Ese no es un signo zodiacal!")// si no escribe una opcion establecida, envia esto, y añadimos el toLowerCase para que se detecten mayus y minus sin darnos error.

//Ahora establecemos algunas variables para despues componer nuestro embed de forma personalizada para cada usuario-
   
    let author = message.author.username; //Establecemos el autor para incluirlo despues en el embed
    let amor = Math.floor(Math.random() * 100)
    let dinero = Math.floor(Math.random() * 100)
    let salud = Math.floor(Math.random() * 100)
    let suerte = Math.floor(Math.random() * 100)//Se podría simplificar y establecer uno solo para sacar el número aleatorio, pero como no se mucho, me gusta verlo todo detallado para no fallar.
 
    const embed = new Discord.MessageEmbed()//abrimos el embed para diseñarlo
  .setTitle("Los astros determinan que el horóscopo de " + `${author}` + " es:")
  .setDescription("❤️ Amor: " + `${amor}` + "%, " + "🤑 Dinero: " + `${dinero}`+ "%, " + "⚕️ Salud: " +`${salud}`+ "%, " + "🍀 Suerte: " + `${suerte}`+ "% ", true) //podriamos añadir otras opciones de fortuna siguiendo la misma "linea emoji + opción + porcentaje"
  .setColor("RANDOM");
  message.channel.send(embed)//enviamos
  



}



////ECONOMIA(((())))






if(command === "work"){

let obtenido = await eco.trabajar(message.author.id, message.guild.id, 4000); // Aca definimos lo que obtenemos \\
let texto = [`Trabajaste en PlayBoy y grabaste una Pelicula Porn* y ganaste ${obtenido} por buenas fotos`, `Trabajaste de uber, te toco un famoso!, gracias a tu buen servicio te pago ${obtenido}`, `trabajaste en McDonald's haciendo dise�os y te pagaron ${obtenido}`, `has abierto un onlyfans, trabajaste 1 semana hasta que te lo cerraron y tu pago fue de ${obtenido}`] // Aca los textos randoms que pondran en el embed, si desean pueden agregar textos

 var rand = Math.floor(Math.random() * texto.length); // aqui elije entre uno de los textos randoms
 var randomtext = texto[rand];
const embed = new MessageEmbed()
.setAuthor("? | Trabajo")
.setDescription(randomtext)
.setColor("RANDOM")
.setFooter("Comando ejecutado por: "+message.author.tag)
message.channel.send(embed) // envia el embed
   




}




if(command === "bal") {


  let user = message.mentions.users.first() || message.author; // Definimos user como una mencion o el autor del mensaje
      let dinero = await eco.ver(user.id, message.guild.id) // Aqui definimos "Dinero" Para obtener la cantidad del dinero
      if(!dinero){ // Si NO tiene dinero hara lo siguiente:
      const embed = new MessageEmbed() // Crea el Embed
      .setAuthor("? | No tienes dinero en el banco") // Lo tipico, un "Titulo" / "Autor"
      .setDescription("Tienes que trabajar no seas perezoso!!") // La descripcion
      .setColor("RED") // El color
      message.channel.send(embed) // Y aqui lo envia al embed
      } else { // Y si Tiene dinero hace lo siguiente:
        const embed2 = new MessageEmbed() // Crea embed2
        .setAuthor("? | Tu dinero actual es de:") // El titulo para que diga "Tu dinero actual es de:" 
        .setDescription(`${dinero}`) // La descripcion, que utiliza "dinero" definido anteriormente
        .setColor("GREEN") // Elegimos el color "Verde / GREEN"
        message.channel.send(embed2) // Envia el mensaje
      }
    

}







    

















///////////ORIENTACIONES/GÉNEROS///////////

///////////KICKS, BANS Y DEMÁS///////////



if(command === "fondos") {
  const uno =   `https://media.discordapp.net/attachments/791270423630315521/817312471836131328/AA4.png?width=903&height=564`
  const dos = `https://media.discordapp.net/attachments/791270423630315521/817312463749251122/A.png?width=903&height=564`
  const tres = `https://media.discordapp.net/attachments/791270423630315521/817312461359284234/AA2.png?width=1002&height=563`
  const cuatro = `https://media.discordapp.net/attachments/791270423630315521/817312452005068860/EE1.png?width=800&height=564`
  const cinco = `https://media.discordapp.net/attachments/791270423630315521/817312459928109106/EE2.png?width=1002&height=564`
  const seis = `https://media.discordapp.net/attachments/791270423630315521/817312445890428938/BB1.png?width=1002&height=564`
  const siete = `https://media.discordapp.net/attachments/791270423630315521/817312405616328714/DD1.jpg?width=903&height=564`
  const ocho = `https://media.discordapp.net/attachments/791270423630315521/817312402873122816/DD6.jpg?width=1002&height=564`
  const nueve = `https://media.discordapp.net/attachments/791270423630315521/817312401870946304/EE.jpg?width=705&height=564`
  const diez = `https://media.discordapp.net/attachments/791270423630315521/817312400826826802/CC2.jpg?width=1002&height=564`
  const once = `https://media.discordapp.net/attachments/791270423630315521/817312400536764416/DD2.jpg?width=1002&height=564`
  const doce = `https://media.discordapp.net/attachments/791270423630315521/817312398221508638/DD4.jpg?width=1074&height=564`
  const trece = `https://media.discordapp.net/attachments/791270423630315521/817312395990532127/CC6.jpg?width=801&height=564`
  const catorce = `https://media.discordapp.net/attachments/791270423630315521/817312395323113472/CC4.jpg?width=1002&height=564`
  const quince = `https://media.discordapp.net/attachments/791270423630315521/817312391414415360/A3.png?width=941&height=564`
  const dieciseis = `https://media.discordapp.net/attachments/791270423630315521/817312383034327100/A4.png?width=1002&height=564`
  const diecisiete = `https://media.discordapp.net/attachments/791270423630315521/817312371290800128/BB5.jpg`
  const dieciocho = `https://media.discordapp.net/attachments/791270423630315521/817312368928227350/BB2.jpg`
  const diecinueve = `https://media.discordapp.net/attachments/791270423630315521/817312367561277480/AA6.jpg?width=1002&height=564`
  const veinte = `https://media.discordapp.net/attachments/791270423630315521/817312362490626079/AA3.jpg?width=1002&height=564`
  const ventiuno = `https://media.discordapp.net/attachments/791270423630315521/817312354424848394/AA4.jpg?width=1002&height=564`
  
  const a = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, dieciseis, diecisiete, dieciocho, diecinueve, veinte, ventiuno]
  let fon = a[Math.floor(Math.random() * a.length)]
const embed = new Discord.MessageEmbed()
        .setTitle('Fondos:')
        .setDescription("Para móvil o pc:")
        .setImage(fon)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`• Pedido por ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
message.channel.send(embed);
}

/////////////handler

let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
  cmd.execute(client, message, args)
}







 }); //Cerramos el evento


  



client.login(config.token);
