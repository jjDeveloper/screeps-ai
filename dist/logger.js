var mem = Memory.Logger;
global.logger = {
  queueMessage: function(sender, message) {
	  mem.queue.unshift([sender, message])
  },
  clear: function() {
	  mem.queue = [];
  },
  run: function() {
	  mem.queue.forEach((q) => {
		  console.log(`'${q[0]}': '${q[1]}'`);
	  })
  },
  logObject(ob) {
	  console.log(JSON.stringify(ob));
  }
}
