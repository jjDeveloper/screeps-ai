var popControl = {

  init: function() {
    if(Memory.requiredCreeps == undefined){
      var n = {
        "harvesters": 3,
        "builders": 1,
        "repairers": 2,
        "upgraders": 2
      };
      Memory.requiredCreeps = n;
    }
  },

  byRole: function(role) {
    creeps = _.filter(Game.creeps, (creep) => creep.memory.role == role);
    return creeps;
  },
  upgraders: function() {
    return this.byRole('upgrader');
  },
  harvesters: function(){
    return this.byRole('harvester');
  },
  builders: function(){
    return this.byRole('builder');
  },
  repairers: function(){
    return this.byRole('repairer');
  }
}
module.exports = popControl;

