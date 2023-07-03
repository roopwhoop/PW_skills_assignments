const { channel } = require("diagnostics_channel");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) =>{
    console.log(`Thanks for subscribing ${channelName}`);
};
eventEmitter.addListener("subscribe", subscribeMessage);

console.log("Calling event listener before removing the event.");
eventEmitter.emit("subscribe", "Collage Wallah");

console.log("Calling event listener after removing the event.");
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "Collage Wallah");