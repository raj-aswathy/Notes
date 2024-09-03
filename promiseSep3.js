function start() {
  console.log("Start");
}
function parallelendPoint() {
    console.log("Hitting parallel responses");
    return Promise.all([hitEndPoint1(),hitEndPoint2(),hitEndPoint3()]) 
    .then(response => {
        console.log(response);
        console.log("step 2");
        
    }) 
}

async function hitEndPoint1() {
    return new Promise ((resolve)=>{
        console.log("Hitting End point 1");
    })
}
async function hitEndPoint2() {
    return new Promise ((resolve)=>{
        console.log("Hitting End point 2");
    })
}
async function hitEndPoint3() {
    return new Promise ((resolve)=>{
        console.log("Hitting End point 3");
    })
}
async function hitEndPoint4() {
    return new Promise ((resolve)=>{
        console.log("Hitting End point 4");
    })
}
async function hitEndPoint5() {
    return new Promise ((resolve)=>{
        console.log("Hitting End point 5");
    })
}
async function hitEndPoint6() {
    return new Promise ((resolve)=>{
        console.log("Hitting End point 6");
    })
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
async function mainTask() {
    console.log("Hitting sequential responses");
    return Promise.all([hitEndPointSequential1(),hitEndPointSequential2(),hitEndPointSequential3()]) 
    .then(response => {
        console.log("Response",response);        
    }) 
}
function finish() {
  console.log("Finish");
}
async function main() {
    try{
        start();
        await parallelendPoint();
        await mainTask();
        finish();
    }catch(error){
        console.error("Error",error)
    }

}

main();
