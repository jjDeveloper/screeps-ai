const SPAWNS = ['SpawnOne']
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var cityWorks = require('city.works');
var logger = require('logger');

// Game.memory.loggerStatus = false;



module.exports.loop = function () {
    cityWorks.sourceInfrastructure(Game.spawns[SPAWNS[0]])
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
