const userSchema = require("../models/userSchema")
module.exports.run = async (bot, oldS, newS)=>{ 
    let miembro = newS.guild.members.resolve(newS.id)
    let doc = await userSchema.findOne({userID: miembro.id}) 
    let antiguo = await userSchema.findOne({canalID: oldS.channelId})
    if(newS.channelId == "1000947102484009030" && doc) return moveYourAss(doc, newS, miembro)
    if(antiguo && newS.channelId !== antiguo.canalID && !oldS.channel.members.size) return eliminarCanal(antiguo, oldS)
    if(newS.channelId == "1000947102484009030") return crearCanal(miembro, newS)
} 
    async function crearCanal(miembroN, state) {
        let canal = state.guild.channels.resolve(state.channelId) 
        let canalCreado =  await state.guild.channels.create(`${miembroN.user.username}'s channel`,{
            type: "GUILD_VOICE",
            parent: canal.parentId,
            position: 0,
            permissionOverwrites: [{
                id: state.id,
                allow: ["CONNECT", "SPEAK", "VIEW_CHANNEL", "MANAGE_CHANNELS"]
            }]
        })
        await userSchema.updateOne({
            userID: miembroN.id,
             
        
        }, {
            canalID: canalCreado.id

        }, {upsert: true}) 
        return miembroN.edit({
            channel: canalCreado  
        })
} 

    async function eliminarCanal(datos, state){
        state.guild.channels.resolve(datos.canalID)?.delete()
        return await datos.deleteOne() 
    }
    
    function moveYourAss(datos, state, miembroN){
        let canal = state.guild.channels.resolve(datos.canalID)
        return miembroN.edit({
            channel: canal
        })   
        
    } 