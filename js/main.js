var btn = document.querySelector("button")
var h1 = document.querySelector("h1")
var par = document.getElementById("outher")

var qoutarry = [
    {
        quote: "“ You have to believe in yourself when no one else does.”",
        person: " Serena Williams",
    },
    {
        quote:"“work hard and work hard so that your son boasts that you are his father ”",
        person: "Ryad ALi"

    },
    {
        quote: "“ When you have a dream, you’ve got to grab it and never let go. ”",
        person: "Carol Burnett",
    },
    {
        quote: " Be yourself; everyone else is already taken",
        person: "Oscar Wilde",
    },
    {
        quote:
            "“ You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one ”",
        person: "John Lennon",
    },
    {
        quote:
            "Do not go where the path may lead, go instead where there is no path and leave a trail",
        person: " Ralph Waldo Emerson",
    },
    {
        quote:
            " It is during our darkest moments that we must focus to see the light.",
        person: "Aristotle",
    },
    {
        quote:
            "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the hear ",
        person: "Helen Keller",
    },
    {
        quote:
            "Don't worry when you are not recognized, but strive to be worthy of recognition ",
        person: "Abraham Lincoln",
    },
    {
        quote:
            "“ If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.” ",
        person: "Oprah Winfrey",
    },
    {
        quote: " Less is More ",
        person: "Yahia Abdellah ",
    },
];
var oldRandom
btn.addEventListener("click", function () {
    var random = Math.floor(Math.random() *qoutarry.length)
    while(oldRandom==random){
         random = Math.floor(Math.random() *qoutarry.length)
    }
oldRandom = random




    h1.innerText = `${qoutarry[random].quote}`
    outher.innerText = `${qoutarry[random].person}`
})