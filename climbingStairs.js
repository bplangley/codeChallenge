 /**
  * Brandon Langley 
  * Carimus Code Challenge
  * 4.14.2021
  * Simple testing stub to demonstrate the climbingStairs function and
  * format the output
  */


 var steps=7; //Define the totalSteps in the given stair case
 var totalPaths=0;
 
 console.log('Given: ',steps);

 totalPaths=climbingStairs(steps);
 console.log('Output: ',totalPaths);

 /**
  * Recursive function to calulate the different paths which can be taken up a 
  * stair case of length n. Can take only either 1 or 2 steps at a time. 
  *
  * @param totalSteps the number of steps in the staircase ahead 
  * @return the total number of unique paths to the top of the stairs when 
  *  taking 1 or 2 steps at a time
  */

 function climbingStairs(totalSteps){
     if (totalSteps<=0){ //if there are 0 or fewer steps there is no further valid path
         return 0;
     }else if (totalSteps<=2){ 
         return totalSteps; //if steps<=2 the number of paths is equal to totalSteps 
     }
     else {
         return climbingStairs(totalSteps-1) + climbingStairs(totalSteps-2); 
     }
 }
