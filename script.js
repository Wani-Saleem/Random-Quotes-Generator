let jokes = [
    "🔬 Why don't scientists trust atoms? Because they make up everything!",
    "😯 I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "➖ Parallel lines have so much in common. It's a shame they'll never meet.",
    "💀 Why don't skeletons fight each other? They don't have the guts.",
    "☃️ What do you get when you cross a snowman with a vampire? Frostbite!",
    "📚 I'm reading a book on anti-gravity. It's impossible to put down!",
    "🚲 Why couldn't the bicycle stand up by itself? It was two-tired.",
    "🎹 I used to play piano by ear, but now I use my hands.",
    "🌾 Why did the scarecrow win an award? Because he was outstanding in his field!",
    "🔍 I'm trying to organize a hide and seek competition, but it's really hard to find good players.",
    "🍅 Why did the tomato turn red? Because it saw the salad dressing!",
    "🍝 What do you call fake spaghetti? An impasta!",
    "💀 Why don't skeletons fight each other? They don't have the guts!",
    "🥃 I'm on a whiskey diet. I've lost three days already.",
    "⛳ Why did the golfer bring two pairs of pants? In case he got a hole in one!",
];

document.getElementById("btn").addEventListener("click", function() {
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke").innerHTML = randomJoke;
});


