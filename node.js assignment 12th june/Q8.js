const { channel } = require("diagnostics_channel");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) =>{
    console.log(`Thanks for subscribing ${channelName}`);
};
eventEmitter.addListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "Collage Wallah");
