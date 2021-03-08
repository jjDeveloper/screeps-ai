
var director = {
  init:  function() {
    if(Memory.init == undefined) {
      this.popControl = require('pop.control');
    }
  }
}
module.exports = director;

