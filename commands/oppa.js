module.exports = {
    name: 'oppa',
    description: "Mari",
    execute(message, args){

        if(message.member.roles.cache.has('940353123812257833')){
            message.channel.send('Tan perfecta como solo ella podria serlo ♥');
        }else{
            message.channel.send('You cannot use these command...');
            message.member.roles.add('940353123812257833').catch(console.error);
        }
    }
}