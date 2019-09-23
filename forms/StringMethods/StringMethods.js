/*

What separates the talented individual from the successful one is a lot of hard work.

Question: Name and explain the two types of computer bugs/errors. 
Hint: both of the types start with "s". 
Question: There are many ways to debug a program. Describe three ways. 
Question: In your own words, define/describe each of the following debugging terms.
step
break
watch
Complete ONE of the following using this project:  LargerFriend. 
For each error you find, write a comment above the line briefly describing the error and your fix. Then fix the error. 
When you are done, the program must run without error. 
**Note: when you remove the  at the top, leave the top  line blank so the line numbers in the program don't change. 
Don't forget to also remove the bottom .

Resave the project under the name Fixit7LargerYourname. Delete the 'friend' form. Then debug the program on the form named larger using the Chrome debugger. 
In the debugger, watch the variables ' firstNum  and 'secondNum' as you run the debugger and take a screenshot showing its value in the Watch window when the program is on line 2 and line 6. 
Paste the image on your Word doc. 

OR

100 Extra XP  Resave the project under the name Fixit7FriendsYourname. Delete the 'larger' form. Then debug the program on the form named friends using the Chrome debugger. In the debugger, watch the variables ' firstFriend ',  'bestFriend', and 'friendNames' as you run the debugger and take a screenshot showing its value in the Watch window when the program is on line13. Paste the image on your Word doc.
Hand In: Submit one Word doc and the two project files for each person to one of your accounts. Make sure both of your names are on the top of the Word doc. 

*/


//Create a variable named quoteString and put this string in it: 
var quoteString = ('Failure is simply the opportunity to begin again this time more intelligently.');
console.log(quoteString);

//Using a string method, change the text in quoteString to all upper case and save it in a new variable named upperCaseString.
upperCaseString = quoteString.toUpperCase();
console.log('Upper case string is: ' + upperCaseString);

//Create a new variable named authorString and put this text in it. 
var authorString = ('-Henry Ford');
console.log(authorString);

//Then use a string method to put the authorString value on the end of the quoteString value, saving the new string in a variable named completeString. 
completeString = quoteString.concat(' '+authorString);
console.log('Added - Henry Ford to end of quote: ' + completeString);

//Now create a new string named secondQuote and put this string in it: 
var secondQuote = ('Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King');
console.log(secondQuote);

//Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString.
lowerCaseString = secondQuote.toLowerCase();
console.log('Lower case string is: ' + lowerCaseString);

//Find the character at the 3rd position of secondQuote.
console.log('Character in quote at location 3: ' + secondQuote.slice(3,4));

//Create a new variable named findString. Using a string method, remove this part of the secondQuote string and put it in findString variable:
secondQuote = secondQuote.replace('What separates the talented individual from the successful one is a lot of hard work.', '');
findString = ('What separates the talented individual from the successful one is a lot of hard work.');
console.log('Find string: ' + findString);
console.log('Updated Second Quote: ' + secondQuote);
