const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ageCheck = (age) => {
  if(!isNaN(age))
  {if (age > 23 || age < 18) {
    console.log("Sorry no scholarship for you :(");
    readline.close();
  } else {
    return true;
  }}
  else{
    console.log("wrong input try again")
    readline.close()
  }
};
const resCheck = (res) =>{
  let t = "YyNn"
  if(!t.includes(res))
  {
    console.log("You dont know how to type in answers. Why do you think you will get the scholarship? Start again")
    readline.close()
    process.exit(0)
  }

}
const residencyQuestions = [
  "Have you lived in California for the last two years (y/n) \n",
  "have you worked in California (part time or full time) at least for six months (y/n)\n",
  "have your parents lived in California for at least one year (y/n)\n",
  "have you volunteered for a public cause in California and can you show proof of it (y/n)\n",
];
readline.question("What is your age? \n", (age) => {
  if (ageCheck(age)) {
    readline.question(residencyQuestions[0], (res) => {
      resCheck(res)
      if (res == "y") {
        console.log("yay u qualify");
        readline.close();
      } else {
        readline.question(residencyQuestions[1], (res) => {
          resCheck(res)
          if (res == "y") {
            console.log("yay u qualify");
            readline.close();
          } else {
            readline.question(residencyQuestions[2], (res) => {
              resCheck(res)
              if (res == "y") {
                console.log("yay u qualify");
                readline.close();
              } else {
                readline.question(residencyQuestions[3], (res) => {
                  resCheck(res)
                  if (res == "y") {
                    console.log("yay u qualify");
                    readline.close();
                  } else {
                    readline.question(
                      "How much dough does your fam make (Enter a number)",
                      (res) => {
                        if (res < 5000) {
                          console.log(
                            "Your application might be granted by the dean. Forward it to him please."
                          );
                        } else {
                          console.log(
                            "My dear child no scholarship for you. PAY THE FULL AMOUNT bwahahahah"
                          );
                        }
                        readline.close();
                      }
                    );
                  }
                });
              }
            });
          }
        });
      }
    });
  } 
});
