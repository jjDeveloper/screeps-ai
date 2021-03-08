class Colony extends Flag {
    construct(flag, name) {
        if (flag.memory.role === undefined) flag.memory.role = 'colony';
        if (flag.memory.colony === undefined || flag.memory.colony !== name) flag.memory.colony = name;
        if (flag.memory.population === undefined) flag.memory.population = [];
        console.log(`Colony ${name} has be initialized`)
        if (!flag.memory.phase) this.init()
    }
    static init() {
        if (this.room.controller === undefined) return undefined
        if (this.memory.roomController === undefined) {
            this.memory.roomController = this.room.controller.id;
        }
        if (this.memory.cronTasks === undefined) this.memory.cronTasks = [];
        if (this.memory.censusTemplate === undefined) this.memory.censusTemplate = { h: 0, u: 0, b: 0, r: 0 }
        if (this.memory.hives === undefined) this.memory.hives = [];
        this.memory.phase = 'new';

    }
    populationMeter() {
        return undefined;
    }
    get population() {
        var pop = _.filter(Game.creeps, (creep) => creep.memory.colony == this.memory.colony);
        return pop;
    }
}
