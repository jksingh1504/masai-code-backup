# WEB - Quiz Application

## Submission Instructions [Please note]

## Maximum Marks - 13

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work

```
✅ able to submit the app - 1 mark ( minimum score )
✅ On page load, should display the first question with 4 options and timer - 2 mark
✅ Able to answer the questions and score is getting updated in real-time - Part 1 - 2 mark
✅ Able to answer the questions and score is getting updated in real-time - Part 2 - 2 mark
✅ Showing correct scores after completing the quiz - 2 mark
✅ Timer is running for every second - Part 1 - 2 mark
✅ Timer is running for every second - Part 2 - 2 mark
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure


### You haven't taught Cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

<p style="color:red">We already provided some of the required HTML elements in the boilerplate. So please go through it once and don't create duplicate HTML elements.</p>


### Problem Statement:-

<div>
<img src="https://i.imgur.com/zm8k1eX.png" width="100%">
</div>

Your objective is to develop a timed quiz application that engages users with a series of multiple-choice questions. The application should not only keep track of their scores but also enforce a time limit of 60 seconds for each question. Users must answer each question within the allotted time, and if they fail to do so, the application should automatically advance to the next question.

It seems like you're working on a web-based quiz application and have provided an HTML structure along with some requirements for the functionality. Here's a rephrased summary of what you need to do in both the HTML and JavaScript files:

<div>
<img src="https://i.imgur.com/8IYEo0C.png" width="100%">
</div>

**index.html:**

1. There is an existing HTML structure with a `div` element having the class and id as `question`. This `div` should have the text content of the current question.



2. Another `div` with class and id `options` is provided. You should dynamically populate this `div` with the answer options for the current question.
  - Use the `button` to display each option.

3. There is a `span` element with the id `time-left`, by default the text content should be `60`. This value should decrease by 1 every second. When it reaches 0, it should automatically display the next question.

4. There is a `span` element with the id `current-score`, by default the text content should be `0`. When the user selects the correct answer, this score should increase by 1.

5. There is a `button` element with the id and class `next-button` with text content `Next`. Whenever the user clicks on this question he should be able to see the next question. (it should be used as a skip button). And if a user is in the last question and clicks on this `button` then he should see the final result as mentioned below.

***final result***

6. Once all quiz questions are completed, change the text content of the `div` with class and id as `question` to `Quiz completed!` and display the final score in the `span` with the id `current-score`. No other elements should exist on the DOM once the quiz is completed.

7. The `div` with id and class `timer` should not exist when the final result is shown. (Hint: Use `display:none`)

<div>
<img src="https://i.imgur.com/XQaWJsG.png" width="100%">
</div>

**index.js:**

1. You have been provided with an array called `quizData`, which contains all the questions, answer options, and correct answers.

2. Your task is to use this `quizData` array to render the questions on the webpage.

In essence, you need to create a dynamic quiz application that presents questions one by one, allows users to select answers, keeps track of time, updates the score, and displays the final score when the quiz is completed.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
