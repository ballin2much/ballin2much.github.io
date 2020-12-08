$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var scroll1 = $('.section1').position();
    var scroll2 = $('.section2').position();
    var scroll3 = $('.section3').position();
    var scroll4 = $('.section4').position();
    
    if (scroll >= scroll1.top && scroll <= scroll2.top) {
        $(".mainLink").addClass("color1");
    } else {
        $(".mainLink").removeClass("color1");
    }

    if (scroll >= scroll2.top && scroll <= scroll3.top) {
        $(".mainLink").addClass("color2");
    } else {
        $(".mainLink").removeClass("color2");
    }
    
    if (scroll >= scroll3.top) {
        $(".mainLink").addClass("color3");
    } else {
        $(".mainLink").removeClass("color3");
    }

    if (scroll >= scroll4.top) {
        $(".mainLink").addClass("color4");
    } else {
        $(".mainLink").removeClass("color4");
    }
})

window.onload = function() {
    getRandomQuote("HS"); 
    getRandomQuote("ITWILL"); 
    getRandomQuote("almost"); 
    getRandomQuote("muttley"); 
}

function getRandomQuote(x) {
    let y;
    if (x == "HS") {
        y = ["You don't know what it's like to be me<br>I would die for you, it's that deep<br>and you don't know what it's like to be me<br>It's so cold at night when I can't sleep<br>and you don't know what it's like to be me<br>it gets old when it's right there but I can't reach",
        "I ain't a walking, I'm a lying contradiction<br>Sliding on the friction<br>Riding with your missus, but I just want commitment<br>I just want her kisses, and a white picket<br>Her and my children<br>I ain't a walking, I'm a lying contradiction",
        "I don't get much sleep<br>I'm depressed, but it ain't that deep<br>I'm just looking for a place to rest my feet<br>I don't smile too much, but that's just my luck<br>I ain't stressed that death might come<br>"];
    } else if (x == "ITWILL") {
        y = ["Now my heart sags like my eyelids sink<br>You asking what did I mean<br>To be honest, not to deceive<br>Messing up more, trying to brush it off my sleeve<br>so I stuck it on a beat<br>I been like this since I was sucking on a teat",
            "Want the answers only time can tell<br>Waiting for this cancer in my mind to heal<br>Wonder where my grandmama is<br>and if she got her legs, or got some wings instead<br>and I'm still thinking of her death<br>still dreaming of her breath",
            "Not that anyone listens<br>This is just my therapy session<br>I got things wrong with me, I ain't scared to admit it<br>I see the harmony, it's all clear in my vision<br>Don't worry about me, self-hatred part of my instincts"]
    } else if (x == "almost") {
        y = ["Why are we here?<br>Why weren't you there?<br>Why should I care?<br>Why's my grandmama dead?<br>Why'd she have MS?<br>Why I feel this stress?<br>Why I don't feel blessed?<br>Why I shouldn't fear death",
        "I ain't almost a trap rapper, I'm almost a trash rapper<br>Most of my jokes almost had laughter<br>When I look at ya I lose my breath like I have asthma<br>A lot of questions I almost asked ya<br>Actually nevermind<br>I'll save em for a better time",
        "We all want everything nothing less<br>But lets just ride with it, vibe with it<br>Trust me I get it<br>I'm wicked, I'm twisted, I'm vicious<br>I said some awful things and I meant em"]
    } else if (x == "muttley") {
        y = ["You're a shadow, You're a ghoul<br>You're the chair in my room<br>You're the air I consume<br>You're the glare in my screen, you're the prophet of doom",
        "I just wanna rock a kangol, and breakdance with the crew<br>I just wanna fat chain with some fat ass jewels<br>I just wanna sell crack and gangbang with my dudes<br>I just wanna sip lean and OD<br>I just don't want anyone to know me<br>I just wanna do this rap thing without cold feet"
        ]
    }
    document.getElementById(x).innerHTML = y[Math.floor((Math.random() * y.length))];
}