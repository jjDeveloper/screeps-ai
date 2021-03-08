// cityWorks.sourceInfrastructure(Game.spawns[SPAWNS[0]])
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

var cityWorks = {
  sourceInfrastructure: function( spawn ) {
    var sources = spawn.room.find(FIND_SOURCES);
    for(var s in sources) {
      var path = spawn.room.findPath(spawn.pos, sources[s].pos, { ignoreCreeps: true});
      for(p in path) {
        var x = path[p].x;
        var y = path[p].y;
        if(!spawn.room.createConstructionSite(x, y, STRUCTURE_ROAD)) {
          return;
        }
      }
    }
   var controller = spawn.room.controller;
      var cpath = spawn.room.findPath(spawn.pos, controller.pos, { ignoreCreeps: true});
      for(p in cpath) {
        var x = cpath[p].x;
        var y = cpath[p].y;
        if(!spawn.room.createConstructionSite(x, y, STRUCTURE_ROAD)) {
          return;
        }
      }
  },

  buildWall: function (spawn, coord) {
    var roomName = spawn.room.name
    coord.forEach((c) => {
      if (!spawn.room.createConstructionSite(c[0], c[1], STRUCTURE_WALL)) return
    })
    }
}
module.exports = cityWorks;

