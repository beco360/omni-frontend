require("./setupGlobalTimers");
global.timers.addUserTimers(1);
global.timers.initTimerOnline(1);

setInterval(() => {
    console.log(global.timers.getUserTimes(1).userTimes.timeOnline.getTimeValues().toString());
}, 1000)