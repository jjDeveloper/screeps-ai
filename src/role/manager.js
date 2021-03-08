var roleHarvester = require('role_harvester');
var roleUpgrader = require('role_upgrader');
var roleBuilder = require('role_builder');
var roleRepairer = require('role_repairer');
var roleIdle = require('role_idle');

require('role_job_board')

global.roleManager = {
    /** @param {Creep} creep **/
    run: function(creep) {
      switch (creep.memory.role) {
          case 'harvester':
            roleHarvester.run(creep);
            break;
          case 'builder':
            roleBuilder.run(creep);
            break;
          case 'upgrader':
            roleUpgrader.run(creep);
            break;
          case 'repairer':
            roleRepairer.run(creep);
            break;
          case 'idle':
            roleIdle.run(creep);
            break;
	  }
	}

};
