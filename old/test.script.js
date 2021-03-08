var testScript = {
  walls: function() {
    console.log('test.script.walls: ');
  },
   findWalls: function(spawn) {
            var targets = spawn.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_WALL)
                    }
            });
            return targets.sort(function(a, b){
              return a.hits-b.hits;
            });
    },
   findRoads: function(spawn) {
            var targets = spawn.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_ROAD)
                    }
            });
            return targets.sort(function(a, b){
              return a.ticksToDecay-b.ticksToDecay
            });
    }
 }
module.exports = testScript;

