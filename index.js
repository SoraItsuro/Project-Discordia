const { ShardingManager } = require('discord.js');
const os = require("os");
const config = require('./Config');

const manager = new ShardingManager('./bot.js', { token: config.token });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();
