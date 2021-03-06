const SPAWNS = ['SpawnOne']
const TICK_INTERVAL = [20, 200, 1200];
const CRON = {
    zero: {
        ticks: 1180,
        jobs: ['module:function']
    },
    one: {
        ticks: 620,
        jobs: ['module:function']
    },
    two: {
        ticks: 1220,
        jobs: ['module:function']
    }
}
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var cityWorks = require('city.works');
var logger = require('logger');
var cron = require('cron.manager');
var thismem = require('this.mem');

module.exports.loop = function () {
    //
    // Game.memory.loggerStatus = false;
    // global.logger.queueMessage('main', 'MainLog ' + Game.time)
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // Main Ai Loop

    if(Memory.tickCount === undefined) {
        console.log('tickCount was undefined')
        global.thismem.flush(1)
        global.logger.queueMessage('main:loop', 'tickcount undefined and set');
        Memory.tickCount = Game.time + CRON.two.ticks;
    }
    if (Game.time === Memory.tickCount - CRON.zero.ticks){
      console.log('tick interval one minute fired');
      global.logger.queueMessage('main:loop', 'CRON Zero fired one minute');
      global.cron.zero(CRON.zero);
    }
    if (Game.time === Memory.tickCount - CRON.one.ticks){
      console.log('tick interval 30 minute fired');
      global.logger.queueMessage('main:loop', 'CRON One fired 30 min');
      global.cron.one(CRON.one);
    }
    if (Game.time === Memory.tickCount - CRON.two.ticks - 1){
      console.log('tick interval one hour fired');
      global.logger.queueMessage('main:loop', 'CRON Two fired 60 min');
      global.cron.two(CRON.two);
    }

    if (Memory.tickCount <= Game.time ){
      console.log('tick interval reset')
      global.logger.stale(1);
      global.thismem.flush(1);
      Memory.tickCount = undefined;
    }
    //
    //
    //
    //
    //
    //
    //
    // check for memory entries of died creeps by iterating over Memory.creeps
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            delete Memory.creeps[name];
        }
    }
    // cityWorks.sourceInfrastructure(Game.spawns[SPAWNS[0]])
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    if (Memory.Logger.running === true) console.log('Harvesters: ' + harvesters.length);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    // console.log('Upgraders: ' + upgraders.length);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    // console.log('builder: ' + builders.length);
    //
    //
    //
    var walls = [
	    [[19, 37], [19, 36], [19, 35], [19,34], [19, 33], [19,32]],
	    [[26, 29], [27, 29], [27, 29], [28, 29], [29, 29]]
	    ]
    // cityWorks.buildWall(Game.spawns[SPAWNS[0]], walls[1])
    //
    //
    //
    //

    if(harvesters.length < 2) {
        var newName = Game.spawns[SPAWNS[0]].createCreep([WORK,CARRY,MOVE], null, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
    if(upgraders.length < 1) {
        var newName = Game.spawns[SPAWNS[0]].createCreep([WORK,CARRY,MOVE], null, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }
    if(builders.length < 2) {
        var newName = Game.spawns[SPAWNS[0]].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], null, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
