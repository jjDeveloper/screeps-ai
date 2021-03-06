var mem = Memory.Cron;
global.cron = {
    zero(zeroVars) {
      console.log('cron:zero', 'Cron Zero Fired');
      global.logger.queueMessage('cron', 'Cron Zero Fired');
      global.cronSheet.run()
    },
    one(oneVars) {
      console.log('cron:one', 'Cron One Fired');
      global.logger.queueMessage('cron', 'Cron One Fired');
      global.cronSheet.run()
    },
    two(twoVars) {
      console.log('cron:two', 'Cron Two Fired');
      global.logger.queueMessage('cron', 'Cron Two Fired');
      global.cronSheet.run()
    }
},
global.cronSheet = {
    run: function() {
      console.log('cronsheet fired');
      global.logger.queueMessage('cronSheet', 'Cron Sheet Fired')
    }
}
