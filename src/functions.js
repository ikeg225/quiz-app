const lakers = [
    {
        name: "How Well Do You Know The Lakers?",
        length: 2
    },
    {
        num: 1,
        question: "What WNBA team did Kobe's father coach?",
        picture: "",
        options: ["Los Angeles Sparks", "Atlanta Dream", "Chicago Sky", "Washington Mystics"],
        answer: "Los Angeles Sparks",
        explanation: "Bryant was the head coach of the WNBA's Los Angeles Sparks from August 22, 2005, until April 4, 2007."
    },
    {
        num: 2,
        question: "What state was Kobe Bryant born in?",
        picture: "",
        options: ["Pennsylvania", "New York", "Georgia", "California"],
        answer: "Pennsylvania",
        explanation: "Kobe Bean Bryant was born on August 23, 1978, in Philadelphia, Pennsylvania."
    }
]

const lebron = [
    {
        name: "LeBron James Quiz",
        length: 3
    },
    {
        num: 1,
        question: "What Was LeBron's Nickname When He First Entered The NBA?",
        picture: "",
        options: ["The Chosen One", "King James", "The Akron Hammer", "Jammin' James"],
        answer: "The Chosen One",
        explanation: "LeBron was dubbed the nickname 'The Chosen One' on a Sports Illustrated cover on February 18, 2002 by Grant Wahl. The nickname stuck with him as he entered the NBA. <br><br>Grant Wahl later told Jesse Washington of The Undefeated back in 2017:<br>'I was worried, that we were going to ruin the kid's life by putting him on the cover. It's one thing to do a feature on somebody inside the mag. But when you put a young kid on the cover and proclaim him 'The Chosen One' - maybe 'ruin his life' is a little strong, but it took things to such a level that I felt like his life was not going to be the same after that. The pressure would get a lot higher."
    },
    {
        num: 2,
        question: "In What Grade Did LeBron First Dunk A Basketball?",
        picture: "",
        options: ["8th Grade", "9th Grade", "7th Grade", "6th Grade"],
        answer: "8th Grade",
        explanation: "LeBron's first dunk came against the teachers of Riedinger Middle School in Akron.<br><br> The way LeBron occultized 'the dunk' invited the question: When did he first dunk a basketball?<br><br>His response was as reflexive as it would've been had you asked him his birthday.<br><br>'Eighth grade,' he said.<br><br>'Do you remember the time?' <br><br>'Absolutely.'<br><br>After a pregnant pause, James asked, 'You want the story?'<br><br>James then looked at his watch, for effect as much as the time. He and Wade had spent 12 and a half minutes behind the microphone. With an 8:00 p.m. start in Miami, deadlines for most of the print reporters had long since expired.<br><br>'Ah, okay.' <br><br>There's a collective laughter from the room.<br><br>'It was a middle school game. It was teachers versus students, and I got a fast break on the teachers.'<br><br>Wade couldn't contain his laughter.<br><br>'This isn't funny. This is serious, man! I went to Riedinger Middle School in Akron, Ohio! I got a fast break and this was the first time I ever even tried it. I said, 'I'm going for it.' When you first start dunking, you go to the very -- '<br><br>James gestured with his hand, reaching out to an imaginary goal. Illustrating something as bio-mechanical as a dunk with words is difficult, so Wade jumped in.<br><br>'All the way to the corner,' Wade said.<br><br>'All the way to the corner! The side of the rim. That's, like, the easiest one to get when you first start dunking.'<br><br>After all the descriptive flourishes, LeBron's voice drops a level and his tone becomes more earnest. He seems surprised by how much sentimentality the story evokes for him. Wade has stopped chuckling.<br><br>'It was definitely ... It was an unbelievable moment for myself when I realized I could dunk.'<br><br>Did the teachers fail him?<br><br>'Nah, they knew better.'"
    },
    {
        num: 3,
        question: "How Many Times Has LeBron Won The NBA MVP?",
        picture: "",
        options: ["4 Times", "3 Times", "5 Times", "6 Times"],
        answer: "4 Times",
        explanation: "LeBron has 4 MVPs: 2008-09, 2009-10, 2011-12, and 2012-13."
    }
]

function getQuiz(name) {
    return eval(name)
}

export { getQuiz }