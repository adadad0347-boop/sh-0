const commonOptions = {
    delay: 300,
    duration: 999,
    easing: 'ease-in-out',
    distance: '230px',
    viewFactor: 0.0  
};

const ANIMATION_BOTTOM = [
    '.scrollReveal',
    '.scrollReveal-new-products',
    '.scrollReveal-products',
    '.scrollReveal-end',
    '.scrollReveal-end2',
    '.scrollReveal-crton',
];

ANIMATION_BOTTOM.forEach(element => {
    ScrollReveal().reveal(element, {
        ...commonOptions,
        origin: 'bottom'
    });
});

const ANIMATION_RIGTH = [
    '.scrollReveal-RIGTH',
];

ANIMATION_RIGTH.forEach(element => {
    ScrollReveal().reveal(element, {
        ...commonOptions,
        origin: 'right'
    });
});

const ANIMATION_LEFT = [
    '.scrollReveal-LEFT',
];
ANIMATION_LEFT.forEach(element => {
    ScrollReveal().reveal(element, {
        ...commonOptions,
        origin: 'left'
    });
});