/* let promise = new Promise((resolve, reject) => {
  let data;
  setTimeout(() => {
    data = "LUCA DASIC";
    
    if (data) {
      resolve(data);
    } else {
      reject();
    }
  }, 2000);
})

promise.then(data => {
  console.log(data);
  let dataTwo = "ANA GAMBOA";
  return dataTwo;
}).then(data => {
  console.log(data);
}).catch(() => {
  console.log("ERROR ERROR");
})
 */
 
function clownTown() {
    return new Promise(resolve => {
           setTimeout(() => {
                   resolve('WIGGLES 👻');
           }, 2000)
   })
}

function lurking() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('lurking in the');
        }, 3000)
    })
}

function darkness() {
return new Promise(resolve => {
        setTimeout(() => {
                resolve('darkness 😈');
        }, 4000)
})
}

/*  async function message() {
const a = await clownTown();
            const b = await lurking();
            const c = await darkness();
            
            console.log(`${ a } ${ b } ${ c }`)
     
     const [a, b, c] = await Promise.all([clownTown(), lurking(), darkness()]);
    console.log(`${ a } ${ b } ${ c }`)
}

message()
*/
/*  const msg = async () => {
    const msg1 = await clownTown();
    const msg2 = await lurking();
    const msg3 = await darkness();
    
    console.log(`${ msg1 } ${ msg2 } ${ msg3 }`);
}

msg(); */


function yes_no() {
   return new Promise((resolve, reject) => {
           const val = Math.round(Math.random() * 1);
           
           val ? resolve('SUCCESS') : reject('FAIL');
   });
}

/* const msg = async () => {
const msg = await yes_no();
console.log(msg);
} */

/* const msg = async () => {
try {
       const msg = await yes_no();
       console.log(msg);
}catch(err) {
       console.log(err);
}
} */

const msg = async () => {
const msg = await yes_no();
console.log(msg);
}

msg().catch(x => console.log(x));


