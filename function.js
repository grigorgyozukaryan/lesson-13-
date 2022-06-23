
console.log(sumSquare(64,31))

// Գումարի քառակուսի
function sumSquare (a, b){
  return (a * a) + 2 * a * b + (b * b)
};
//Խորանարդների գումարը
function sumOfCubes(a, b){
  return (a+b) * (a * a) - (a * b) +(b * b)
};

let result = sumOfCubes(3,9)
console.log(result)

const y = function(x,y){
   if (x>y){
    return x+y
   }else{
    return x-y
   }
}
console.log(y(1,3))


//Զանգվածի զույգ թվեր
const  arr = [4,9,45,64,31,10,8,"ARMENIA",7,2, "RUSSIA", "USA"]
function evenOddList(){
  for(i = 0; i<  arr.length; i++ ){
    if(typeof(arr[i]) === "number"){
     if( arr[i] % 2 === 0){
      console.log(arr[i])
     }
    }
  }
};
 console.log(evenOddList());



 function date (curentDate){

  const examination = new Date(curentDate)
  const examinationDate = examination.getDate()//Վերցնում ենք օրը;
  return examinationDate


 };

 function mig (compare){

  let x = new Date()
  let curentDate = x.getDate()
 
    if(curentDate === compare){
      return "Այսոր Քննության ենք Պատրաստվեք Քննության"
    }else if (compare === undefined){
      return `Տվյալները լրացված չեն`
    }
    else{
      return`Մյուս Քննությունը հուլիսի 23 ին է}`
    }
  
 };
 
 console.log(mig(date("June 23")))
 
 
  
 const arrowfunc = (a) => { if (typeof(a)=== "number") {return a * a} else {return "Թիվ Չե"} };

 console.log(arrowfunc(10))



 const arrowfunc1 = (a, b) => (a * a) - (2 * b * b) + (b * b)

 console.log(arrowfunc1( 4, 8))

 const arrowfunc2 = (a, b , c) =>  (a * a) + (b * b) + (c * c) + (2 * a * b) + (2 * b * c) + (2 * a * c )
 console.log(arrowfunc2(3,9,4))

