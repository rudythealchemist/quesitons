//USING SELCTORS INSIDE THE ELEMENT MEHTOD.
const questions = document.querySelectorAll('.question');//targets section class

// targets class specifically not the DOM.
questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    // console.log(question);
    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});


// TRAVERSING THE DOM METHOD

// selecing all the questins buttons, loop over them and ensure that the parent is the question secontion element.

// const btns = document.querySelectorAll('.question-btn');

// // even listener for all buttons using forEach method;
// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         // traverse dom to locate targeted parent element.
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;

//         question.classList.toggle('show-text');//targets css class
//     });
// });