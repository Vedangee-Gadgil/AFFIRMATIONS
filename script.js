const cuteImage=document.querySelector("img")
const quoteElement=document.querySelector(".quote")
cuteImage.addEventListener("click",()=>{
    displayQuote()
});
displayQuote=()=>{
    const quoteList=["I am enough. I have enough.",
        "I am in the right place, at the right time, doing the right thing.",
        "I can do hard things.",
        "I allow myself to be more fully me.",
        "I believe in myself.",
        "I am grateful for another day of life.",
        "I am worthy of what I desire.",
        "I choose myself.",
        "I am resilient in the face of challenges.",
        "I am proud of myself and my achievements.",
        "I will accomplish everything I need to do today.",
        "I do my best, and my best is good enough.",
        "I prioritize my well-being.",
        "I overcome my fears by getting out of my comfort zone.",
        "I am love, and I am loved.",
        "Money comes frequently and easily to me.",
        "I trust my inner guidance and follow it.",
        "I accept my emotions and let them move through me.",
        "I take care of myself, mind, body, and spirit.",
        "I trust myself to make the right decisions.",
        "I give myself permission to take up space.",
        "I use my voice to speak up for myself and others.",
        "I trust that I’m heading in the right direction.",
        "I allow myself to make mistakes as they help me grow.",
        "I accept myself exactly as I am without judgment.",
        "I have everything I need to achieve my goals.",
        "I am constantly generating brilliant ideas.",
        "I am safe and supported.",
        "I love and accept myself.",
        "I am kind to myself and others."];
        const itemNo=quoteList.length
        randIdx=Math.floor(Math.random()*itemNo)
        quoteElement.innerText=quoteList[randIdx]
};
