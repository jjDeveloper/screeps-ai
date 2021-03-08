const SPAWNS = ['SpawnOne']
var ColSize = {h: 2, u: 2, b: 2, r: 2}
global.colony = {
    list: function() {
        return _.filter(Game.flags, (flag) => flag.memory.role === 'colony');
    },
    init(flag) {
      if (flag.memory.creeps === undefined) flag.memory.creeps = [];
      //console.log('Colony Class Constructor');
    },
    pruneMemory(flag) {
        var cr = _.filter(Memory.creeps, (creep) => creep.colony === flag.name)
        for (let name in cr) {
            if (Game.creeps[name] !== undefined) {
                delete Memory.creeps[name];
            }
        }
    },
    censusMatch(flag) {
        if (flag.memory.census === undefined ) flag.memory.census = ColSize;
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        if (Memory.Logger.running === true) console.log('Harvesters: ' + harvesters.length);
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        // console.log('Upgraders: ' + upgraders.length);
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

        if(harvesters.length < flag.memory.census.h) {
            var newName = Game.spawns[SPAWNS[0]].createCreep([WORK,CARRY,MOVE], null, {role: 'harvester', colony: flag.name});
            if (Memory.loggerStatus === true) console.log('Spawning new harvester: ' + newName);
        }
        if(upgraders.length < flag.memory.census.u) {
            var newName = Game.spawns[SPAWNS[0]].createCreep([WORK,CARRY,MOVE], null, {role: 'upgrader', colony: flag.name});
            if (Memory.loggerStatus === true) console.log('Spawning new upgrader: ' + newName);
        }
        if(builders.length < flag.memory.census.b) {
            var newName = Game.spawns[SPAWNS[0]].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], null, {role: 'builder', colony: flag.name});
            if (Memory.loggerStatus === true) console.log('Spawning new builder: ' + newName);
        }
        if(repairers.length < flag.memory.census.r) {
            var newName = Game.spawns[SPAWNS[0]].createCreep([WORK,CARRY,CARRY,MOVE,MOVE], null, {role: 'repairer', colony: flag.name});
            if (Memory.loggerStatus === true) console.log('Spawning new repairer: ' + newName);
        }
    },
    create(flag, name) {
      var col = new Colony(flag, name)
    }
};
