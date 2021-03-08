global.logger = {
  queueMessage: function(sender, message) {
      let mem = Memory.Logger.queue;
	  mem.unshift([sender, message])
      Memory.Logger.queue = mem;
  },
  clear: function() {
	  Memory.Logger.queue = [];
  },
  run: function() {
  let mem = Memory.Logger.queue;
	  mem.forEach((q) => {
		  console.log(`'${q[0]}': '${q[1]}'`);
	  })
  },
  logObject(ob) {
	  console.log(JSON.stringify(ob));
  },
  stale(n) {
        const sc = Memory.Logger.staleCount;
        Memory.Logger.staleCount =  sc + 1;
        console.log('logger: stale trigger')
        this.queueMessage('logger', 'Logger stale trigger')
    }
}
