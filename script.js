
/*

function  calculateVAT(price){
    if (price < 0 || typeof price !== 'number'){
        return "Invalid";
    }
    const vat = price * 7.5 / 100 ;
    return vat;

}

const at = calculateVAT(1500)
console.log(at);

*/

/*
function  validContact(contact) {
  if(typeof contact !== 'string'){
   return "Invalid";
  };
  let contactNum =true;
  if(contact.length !== 11 || 
    !contact.startsWith('01') || 
    contact.includes(' ')){
    contactNum =false;
    
  }
  
  return contactNum;
}
const validNum = validContact(true)
console.log(validNum)

*/
/*
function  willSuccess( marks ) {
  if(!Array.isArray(marks)){
   return "Invalid";
  }
  const passExam=[]
  const failExam=[]
  for (let mark of marks){
    if(mark >= 50){
      passExam.push(mark)  
    }
    if(mark <50){
      failExam.push(mark)
    }
  }
  if(passExam.length > failExam.length){
    return true;
  }
  else{
    return false;
  }
  
}
const ready = willSuccess([ 90 ,  99 , 87 , 48 , 34 , 49 ])
console.log(ready)

*/
/*
function  validProposal( person1 , person2 ) {
  if(typeof person1 !== 'object' || typeof person2 !== 'object'){
    return "Invalid";
  }
  ageDifference =Math.abs(person1.age - person2.age) 
  if(person1.gender !== person2.gender && !(ageDifference > 7)){
    return true
  }
  else{
    return false;
  }
}
const biyaHobe = validProposal ({ name: "shuvo", gender: "male", age: 20 },
  { name: "joy", gender: "male", age: 25 } 
 )
  console.log(biyaHobe);
  */

  function calculateSleepTime( times ){
    let result = {};
    let sumSecond = 0;
    for(let time of times){
      sumSecond +=time
    }
    if(sumSecond <=3600){
      result.hour = Math.floor(sumSecond / 3600)
      result.minute = Math.floor(sumSecond/ 60);
      result.second= sumSecond % 60;
    }
    else{
      result.hour = Math.floor(sumSecond / 3600);
      const remainder =sumSecond - 3600;
      result.minute = Math.floor(remainder / 60);
      result.second= remainder % 60;
    }
    return result;
  }
  const final = calculateSleepTime([1000, 499, 519, 300])
  console.log(final)


  