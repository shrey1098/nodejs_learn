const os = require('os')

// info about user
const user = os.userInfo()
console.log(user);

// system up time in secs
console.log('System up time: '+os.uptime/3600);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)