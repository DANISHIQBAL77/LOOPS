


//LOOPS
      //To execute a piece of code again and again


      //for loop
      for(let i = 1; i <= 100; i++){
        console.log("coding");
      }

      //Calculate sum of 1 to n
    
      let sum = 0;
      let n =10;
      for (let i = 1; i <= n; i++) {
        sum = sum + i;
      }
      console.log("sum =" , sum);




      //while loop
      
      let i = 1;
      while (i <= 10){
        console.log("coding");
        i++;
      }
      
      //do while loop



      let j = 1;
      do {
        console.log("coding");
        j++;
      } while (j <= 10);
      
      //for in loop (for objects)
      
      let person = {name: "John", age: 30, city: "New York"};
      for (let key in person) {
        console.log(key + " : " + person[key]);
      }
      
      //for of loop (for arrays)
      
      let colors = ["red", "blue", "green"];
      for (let color of colors) {
        console.log(color);
      }
          
      //break statement
      
      for (let i = 0; i < 5; i++) {
        if (i === 3) {
          break;
        }
        console.log(i);
      }
      
      //continue statement



      //practice 


      //print all even numbers

      for (let num = 0; num <= 100; num++){
        if(num%2 === 0){
          console.log("num =" ,num);
        }
        else {

        }
      }


      //print all odd numbers

      for (let num = 0; num <= 100; num++){
        if(num%2 !== 0){
          console.log("num =" ,num);
        }
        else {

        }
      }


      //practice#2


      let gameNum = 25;

      let userNum = prompt("Guess the game number : ");
      

      while(userNum != gameNum){
        userNum = prompt("You entered wrong Number.Guess again : ");
      }
       console.log("congrats you guess correctly");
       

      //strings


      let str1 = "coding";
      let str2 = 'programming';

      //template literals
      let obj = {
        item: "pen",
        price: 10,
      }

      let price = `the cost of ${obj.item} is ${obj.price} rupees`;
      console.log(price);
      
      

      let mydata = {
        Name: "DANISH",
        age: 30,
        interest: "programing",
      }

      let output = `My name is ${mydata.Name}.My age is ${mydata.age} and I like ${mydata.interest}.`
      console.log(output);


       //string methods


       let str = "coding";

       
                    
