# Getting Started with Creating Decision Tree in Nodejs+TypeScript

## `Project Installation`
clone the repository as the working solution is available in main branch so checkout to main branch then run the following two commands

### `npm i`

### `npm run dev` 

Once you will run the above command you should be good to access app on the below url.\
Open [http://localhost:3000/execute-tree](http://localhost:3000/execute-tree) to view response in postman/browser

### `The solution evolve following senarios`
**Note: Type is fixed should be send as they are sendSMS,sendEmail, Condition with Loop **



## Get JavaScript expression input and Evaluate it.
use the below input for request
{
  "type": "Condition",
  "condition": "new Date().getFullYear() === 2024 && new Date().getMonth() === 10 && new Date().getDate() === 14",
  "trueAction": {
    "type": "sendSMS",
    "phoneNumber": "9993749113"
  },
  "falseAction": null
}

##For sending the email when condition is true
use the below input for request
{
  "type": "sendEmail",
  "sender": "richa@gmail.com",
  "receiver": "client@yaa.com"
}

##Accepts a subtree and an integer x representing the number of iterations.
{
  "type": "Loop",
  "iterations": 10,// no of times you want to execute the condition
  "subtree": {
    "type": "Condition", // Required must not be changed
    "condition": "Math.random() > 0.5",
    "trueAction": {
      "type": "sendSMS",
      "phoneNumber": "1234567890"
    },
    "falseAction": null
  }
}


**Note: NA**

