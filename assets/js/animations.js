function pathway() {
    anime({
        targets: '#star',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 4000,
        direction: 'alternate',
        loop: true
    });
}


function loader() {
    // anime({
    //     targets: '#rawr',
    //     strokeDashoffset: [anime.setDashoffset, 0],
    //     easing: 'easeInOutSine',
    //     duration: 5000,
    //     // delay: function(el, i) { return i * 250 },
    //     // delay: anime.stagger(250),
    //     direction: 'alternate',
    //     loop: false
    // });
    var path = anime.path("#roverpath");
    anime({
        targets: "#rover",
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        duration: 3000,
        loop: true,
        easing: 'linear'
    })
}



// function signature() {
//     let sig = document.querySelector(".signature");
//     let letters = sig.innerHTML.toString();
//     let len = letters.length;
//     let newSig = [];
//     for (let i=0; i<len; i++) {
//         newSig.push("<span class='letter'>" + letters[i] + "</span>");
//     }
//     sig.innerHTML = newSig.join("").toString();
    
//     anime.timeline({loop: true})
//   .add({
//     targets: '.signature .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     // translateZ: 50,
//     easing: "linear",
//     duration: 1000,
//     delay: anime.stagger(80)
//   }).add({
//     targets: '.signature',
//     opacity: 0,
//     // duration: 50,
//     easing: "linear",
//     delay: 1500
//   });
// }

function gantt() {
    anime({
        targets: '.gantt',
        translateX: function() {return anime.random(0,15)},
        easing: 'easeInOutQuad',
        duration: 1750,
        complete: gantt 
    })
}

function logos() {
    anime({
        targets: '.logos',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2500,
        // delay: function(el, i) { return i * 250 },
        delay: anime.stagger(250),
        direction: 'alternate',
        loop: true
    });
}