let frameDelay = 200;
const animFrames = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
const timeout = frameDelay * animFrames.length; // 800

const animLoopID = setInterval(() => {
  for (let i = 0; i < animFrames.length; i++) {
    setTimeout(() => {
      process.stdout.write(animFrames[i]);
    }, frameDelay * i);
  }
}, timeout);

setTimeout(() => {
  clearInterval(animLoopID);
  process.stdout.write('\n');
}, 2400);
