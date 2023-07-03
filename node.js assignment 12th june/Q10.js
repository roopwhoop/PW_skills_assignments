const { channel } = require("diagnostics_channel");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) =>{
    console.log(`Thanks for subscribing to ${channelName}`);
};
eventEmitter.addListener("subscribe", subscribeMessage);
eventEmitter.emit("subscribe", "Collage Wallah");
console.log(`The default maximum number of event listeners are: ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5);

console.log(`The updated maximum number of event listeners are: ${eventEmitter.getMaxListeners()}`);
