const front_card = document.getElementById('zoomed_card_front');
const back_card = document.getElementById('zoomed_card_back');
let itsTurnig = false;

document.addEventListener('mousemove', (event) => {
    if (itsTurnig) return;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (event.clientX - centerX) / centerX;
    const offsetY = (event.clientY - centerY) / centerY;
    const rotateX = offsetY * -25;
    const rotateY = offsetX * 25;
    const translateX = offsetX * 20;
    const translateY = offsetY * 20;

    front_card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`;
});


document.getElementById('turnBTN').addEventListener('click', () => {
    itsTurnig = true;
    if (back_card.style.display === 'none') {
        front_card.style.transition = `transform 0.5s ease-in`;
        front_card.style.transform = `perspective(600px) rotateX(0deg) rotateY(90deg) translateX(0px) translateY(0px)`;
        back_card.style.transition = `transform 0.5s ease-in`;
        back_card.style.transform = `perspective(600px) rotateX(0deg) rotateY(90deg) translateX(0px) translateY(0px)`;
        setTimeout(() => {
            front_card.style.display = 'none';
            back_card.style.display = 'flex';
            setTimeout(() => {
                back_card.style.transform = `perspective(600px) rotateX(0deg) rotateY(180deg) translateX(0px) translateY(0px)`;
                itsTurnig = false;
                setTimeout(() => {
                    front_card.style.transition = `transform 0.1s ease`;
                    back_card.style.transition = `transform 0.1s ease`;
                }, 25)
            }, 25);
        }, 500);
    }
    else {
        front_card.style.transition = `transform 0.5s ease-in`;
        front_card.style.transform = `perspective(600px) rotateX(0deg) rotateY(-90deg) translateX(0px) translateY(0px)`;
        back_card.style.transition = `transform 0.5s ease-in`;
        back_card.style.transform = `perspective(600px) rotateX(0deg) rotateY(270deg) translateX(0px) translateY(0px)`;
        setTimeout(() => {
            front_card.style.display = 'flex';
            back_card.style.display = 'none';
            setTimeout(() => {
                front_card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)`;
                itsTurnig = false;
                setTimeout(() => {
                    front_card.style.transition = `transform 0.1s ease`;
                    back_card.style.transition = `transform 0.1s ease`;
                }, 25)
            }, 25);
        }, 500);
    }

});