// const str = "hello world hello";

// const chars = {};

// const arr = str.split('');
// console.log(arr)

// for(let word of arr){
//   if(!chars[word]){
//     chars[word] = 1;
//   }else{
//     chars[word] ++;
//   }
// }

const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
       // Get the text content from the textarea
       const textArea = document.getElementById('text-field');
       const text = textArea.value;

       // Tokenize the text into words
       const words = text.match(/\b\w+\b/g);

       // Create an object to store word counts
       const wordCount = {};
     
       // Count the words
       if (words) {
           for (const word of words) {
           
               const lowercaseWord = word.toLowerCase(); // Convert to lowercase for case-insensitive counting
               if (wordCount[lowercaseWord]) {
                   wordCount[lowercaseWord]++;
               } else {
                   wordCount[lowercaseWord] = 1;
               }
           }
       }

       // Display the word counts
       const wordCountResult = document.getElementById('wordCountResult');
       wordCountResult.innerHTML = `<h3 class="total">Total Words:  ${words.length} </h3>`;
       for (const word in wordCount) {
           if (wordCount.hasOwnProperty(word)) {
               wordCountResult.innerHTML += `${word}: ${wordCount[word]}<br>`;
           }
       }
})