var creepsRefresh = {
  run: function(creep){
      if(Game.spawns['StrikerCentral'].renewCreep(creep) == ERR_NOT_IN_RANGE) {
        creep.moveTo(Game.spawns['StrikerCentral']);
      } else {
        creep.transfer(Game.spawns['StrikerCentral'], RESOURCE_ENERGY);
        creep.memory.refresh = false;
      }
  },
  check: function(creep) {
    if(creep.ticksToLive < 100) {
      creep.memory.refresh = true;
    }
  }

}

module.exports = creepsRefresh;

