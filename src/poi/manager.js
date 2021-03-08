Flag.prototype.role = function() {
    if (this.memory.role === undefined) this.memory.role = 'none'
    return this.memory.role;
}

Flag.prototype.setRole = function (role) {
    this.memory.role = role;
    return true;
}
