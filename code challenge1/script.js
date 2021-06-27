/*Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both versions)

3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.*/

let markMass;
let johnMass;
let markHeight; 
let johnHeight;
let markBMI; 
let johnBMI;
markMass = 78;
johnMass = 92;
markHeight = 1.69;
johnHeight = 1.95;

markBMI = (markMass/(markHeight*markHeight));
johnBMI = (johnMass/(johnHeight*johnHeight));

console.log(markBMI , johnBMI);

//let markBiggerBMI = markBMI > johnBMI;
//if(markBMI > johnBMI){
 // console.log(mark BMI is highter than john);
//}
//else{
 // console.log(john BMI is highter than john);

//}
if(markBMI>johnBMI){
  console.log(markbig);
}
else{
  console.log(johnbig);
}