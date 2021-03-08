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
var cityWorks = require('city.works');
var logger = require('logger');
var cron = require('cron_manager');
var thismem = require('this.mem');
require('biosys_manager');
require('pop_manager');
require('poi_manager');

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
    var col = [];
    var fl = global.colony.list()
    fl.forEach((f) => {
        global.colony.pruneMemory(f);
        global.colony.censusMatch(f);
    })

    //
    //
    //
    //CRON initialization seqeunce Exececution
    if(Memory.tickCount === undefined) {
        console.log('tickCount was undefined')
        global.thismem.flush(1)
        global.logger.queueMessage('main:loop', 'tickcount undefined and set');
        Memory.tickCount = Game.time + CRON.two.ticks;
    }
    //
    //
    //
    //CRON.zero Exececution
    if (Game.time === Memory.tickCount - CRON.zero.ticks){
      console.log('tick interval one minute fired');
      global.logger.queueMessage('main:loop', 'CRON Zero fired one minute');
      global.cron.zero(CRON.zero);
    }
    //
    //
    //
    //CRON.one Exececution
    if (Game.time === Memory.tickCount - CRON.one.ticks){
      console.log('tick interval 30 minute fired');
      global.logger.queueMessage('main:loop', 'CRON One fired 30 min');
      global.cron.one(CRON.one);
    }
    //
    //
    //
    //CRON.two Exececution
    if (Game.time === Memory.tickCount - CRON.two.ticks - 1){
      console.log('tick interval one hour fired');
      global.logger.queueMessage('main:loop', 'CRON Two fired 60 min');
      global.cron.two(CRON.two);
    }
    //
    //
    //
    //CRON Cycle Suquence
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
    //Game Heart Beat sequence
    //
    // check for memory entries of died creeps by iterating over Memory.creeps
//    for (let name in Memory.creeps) {
//        // and checking if the creep is still alive
//        if (Game.creeps[name] == undefined) {
//            // if not, delete the memory entry
//            delete Memory.creeps[name];
//        }
//    }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        creep.heartBeat();
    }

}
