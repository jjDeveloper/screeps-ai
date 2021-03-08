require('role_manager');

Creep.prototype.refresh = function() {
    if ( Memory.Logger.level.includes('CREEP') === true) {
      console.log(this.id + 'Creep refresh trigger');
      global.logger.queueMessage('Creep:refresh', 'ID: ' + this.id);

    }
    if (this.memory.spawnId === undefined) {
      this.setSpawn(Game.spawns['SpawnOne'].id)
    }
    if (this.ticksToLive < 100) {
        this.say('refresh');
        if (Game.getObjectById(this.memory.spawnId).renewCreep(this) === ERR_NOT_IN_RANGE) {
            this.moveTo(Game.getObjectById(this.memory.spawnId));
        } else {
            this.transfer(Game.getObjectById(this.memory.spawnId), RESOURCE_ENERGY);
            }
            if (this.tickToLive < 20) Game.getObjectById[this.spawnId].recycleCreep(this);
    } else {
        return false
    }
}

Creep.prototype.setSpawn = function(spId) {
    this.memory.spawnId = spId;
}

Creep.prototype.heartBeat = function () {
    if (this.refresh() === false) this.executeRole();
}

Creep.prototype.executeRole = function () {
    if (this.memory.role === undefined) this.memory.role = 'none';
    if (this.memory.role !== 'none') {
      global.roleManager.run(this)
    } else {
        this.moveTo(Game.spawns[this.memory.spawnId])
    }
}

Creep.prototype.setColony = function(flag) {
    if (flag.memory.creeps === undefined) flag.memory.creeps = []
    this.memory.colony = flag.name;
    flag.memory.creeps.push(this.name);
}

Creep.prototype.colony = function() {
    if (this.memory.colony === undefined) {
      this.memory.colony = 'none';
    }
    return this.memory.colony;
}

Creep.prototype.actionQueue = function() {
    if (this.memory.actionQueue = undefined) this.memory.actionQueue = [];
    return this.memory.actionQueue;
}

Creep.prototype.processAction = function(action) {
    switch (action.name) {
        case 'move':
            if (this.pos !== target){
              this.moveTo(action.target);
              return false;
            } else {
              this.memory.action = 'idle'
              return true;
            }
          break;
        case 'work':
          global.roleManager.run(this)
          break;
        case 'idle':
            this.say('\0/')
    }
}

Creep.prototype.actionAssignment = function(action, target) {
    if (this.memory.actionAssignment === undefined) {
        this.memory.actionAssignment = {
            name: 'none',
            target: {}
        }
    } else {
        this.memory.actionAssignment.name = action;
        this.memory.actionAssignment.target = target;
    }
}
