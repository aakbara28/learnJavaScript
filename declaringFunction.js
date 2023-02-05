function greeting(name, language) {
  if (language == "English") {
    return `Good morning ${name}!`;
  } else if (language == "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}
let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

/*
function greeting() {
  console.log("Good morning!");
}

greeting();
output:
Good Morning!
*/

/* 
Contoh Expression Function
const greeting = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greeting('Ron', 'English'));

output:
Good Morning Ron!
 */
