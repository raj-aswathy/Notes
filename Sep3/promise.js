function start() {
  console.log("Start");
}
function parallelEndPoint() {
  console.log("Hitting parallel responses");
  return Promise.all([hitEndPoint1(), hitEndPoint2(), hitEndPoint3()]);
}

async function hitEndPoint1() {
  return new Promise((resolve) => {
    console.log("Hitting End point 1");
    resolve();
  });
}
async function hitEndPoint2() {
  return new Promise((resolve) => {
    console.log("Hitting End point 2");
    resolve();
  });
}
async function hitEndPoint3() {
  return new Promise((resolve) => {
    console.log("Hitting End point 3");
    resolve();
  });
}
async function hitEndPoint4() {
  return new Promise((resolve) => {
    console.log("Hitting End point 4");
    resolve();
  });
}
async function hitEndPoint5() {
  return new Promise((resolve) => {
    console.log("Hitting End point 5");
    resolve();
  });
}
async function hitEndPoint6() {
  return new Promise((resolve) => {
    console.log("Hitting End point 6");
    resolve();
  });
}
async function hitEndPointSequential1() {
  await hitEndPoint1();
  await hitEndPoint2();
}
async function hitEndPointSequential2() {
  await hitEndPoint3();
  await hitEndPoint4();
}
async function hitEndPointSequential3() {
  await hitEndPoint5();
  await hitEndPoint6();
}

function mainTask() {
  console.log("Hitting sequential responses");
  return Promise.all([
    hitEndPointSequential1(),
    hitEndPointSequential2(),
    hitEndPointSequential3(),
  ]);
}

function finish() {
  console.log("Finish");
}

async function main() {
  try {
    start();
    await parallelEndPoint();
    console.log("step 2");
    await mainTask();
    finish();
  } catch (error) {
    console.error("Error", error);
  }
}

main();
