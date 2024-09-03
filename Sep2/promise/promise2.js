function start() {
  console.log("Start");
}

async function hitGoogle() {
  try {
    const response = await fetch("https://www.google.com");
    console.log("Google response status:", response.status);
  } catch (error) {
    console.error("Error hitting Google:", error.message);
  }
}

async function parallelEndPointHit() {
  const urls = [
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Missy",
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Spooky",
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Willow",
    "https://api.dicebear.com/9.x/adventurer/svg?seed=Pumpkin",
  ];

  const parallelPromises = urls.map(async (url) => {
    try {
      const response = await fetch(url);
      console.log(`Response from ${url}: ${response.status}`);
    } catch (error) {
      console.error(`Error hitting ${url}: ${error.message}`);
    }
  });

  await Promise.all(parallelPromises);
}

function finished() {
  console.log("Finished");
}

let timeoutId;

function timeout() {
  return new Promise((_, reject) => {
    console.log("calling setTimeout task");
    timeoutId = setTimeout(() => {
      console.log("Timeout: 10 seconds passed. executed the callback");
      reject(new Error("Timeout occurred"));
    }, 10000);
    console.log("setTimeout called. Running it in background.");
  });
}

async function mainTask() {
  await parallelEndPointHit();
  await hitGoogle();
  clearTimeout(timeoutId);
}

async function main() {
  start();
  try {
    await Promise.race([mainTask(), timeout()]);
    finished();
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

main();