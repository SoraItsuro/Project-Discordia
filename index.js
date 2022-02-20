const { ShardingManager } = require('discord.js');
const config = require('./Config');

const manager = new ShardingManager('./bot.js', { token: config.token });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();
