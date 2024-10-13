const os = require('os');
console.log(os.version);

const uptime = os.uptime();
console.log(uptime / 3600);