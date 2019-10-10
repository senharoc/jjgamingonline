const display_words_array = ['Senharoc', 'Vision', 'Senharoc', 'Practice', 'Senharoc', 'Learn', 'Senharoc','Encourage'];
let array_number = 0;
let text_current_letter_index = 0;
let current_word = '';
let current_letter = '';
let type_speed = 150;
let wait_after_typing = 3000;               // 3 seconds//

(function type() {
    type_speed = 150;                       //reset the typing speed
    if (array_number === display_words_array.length) {
        array_number = 0;
    }

    current_word = display_words_array[array_number];
    current_letter = current_word.slice(0, ++text_current_letter_index);
    document.querySelector('.typing').textContent = current_letter;
    if (current_letter.length === current_word.length) {
        type_speed = wait_after_typing;     //pause after typing word
        array_number++;
        text_current_letter_index = 0;
    }
    setTimeout(type, type_speed);
}());
