//
//
//  {
//    id: 0,
//    priority: 0,
//    role: '',
//    target: '',
//    action: '',
//    repieat: 'I'
//  }
//
//
//
//
//
//
global.jobBoard = {
    createPost(obj, flag) {
        if (flag.memory.jobBoard === undefined) { flag.memory.jobBoard = [] }
        var jobs = flag.memory.jobBoard;
        jobs.push(obj)
    },
    jobs(flag) {
        return flag.memory.jobBoard
    }
}
