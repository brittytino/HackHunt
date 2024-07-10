document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What is the main circuit board in a computer?",
            answer: "Motherboard",
            keyword: "Proclub123"
        },
        {
            question: "Which device is used to input text into a computer?",
            answer: "Keyboard",
            keyword: "Proclub234"
        },
        {
            question: "What is the brain of the computer called?",
            answer: "CPU",
            keyword: "Proclub345"
        },
        {
            question: "What is the permanent memory called?",
            answer: "ROM",
            keyword: "Proclub456"
        },
        {
            question: "What is a computer network’s unique address called?",
            answer: "IP",
            keyword: "Proclub567"
        },
        {
            question: "What does ‘USB’ stand for?",
            answer: "Universal Serial Bus",
            keyword: "Proclub678"
        },
        {
            question: "Which type of computer memory is used to store data temporarily?",
            answer: "RAM",
            keyword: "Proclub789"
        },
        {
            question: "What is a set of instructions that a computer follows to perform a task?",
            answer: "Algorithm",
            keyword: "Proclub891"
        },
        {
            question: "What is a wireless networking technology standard?",
            answer: "Wi-Fi",
            keyword: "Proclub910"
        },
        {
            question: "What is a graphical representation of data using symbols and charts?",
            answer: "Graph",
            keyword: "Proclub101"
        },
        {
            question: "What is a programming language known for its simplicity and readability?",
            answer: "Python",
            keyword: "Proclub111"
        },
        {
            question: "What is a device used to display output from a computer?",
            answer: "Monitor",
            keyword: "Proclub112"
        }
    ];

    let currentQuestionIndex = 0;
    let attempts = 0;
    const maxAttempts = 3;
    const questionNumberElement = document.getElementById('question-number');
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    const submitButton = document.getElementById('submit-button');
    const keywordContainer = document.getElementById('keyword-container');
    const keywordElement = document.getElementById('keyword');
    const navigationButtonsContainer = document.getElementById('navigation-buttons');
    const copyButton = document.getElementById('copy-button');

    function showQuestion(index) {
        currentQuestionIndex = index;
        attempts = 0;
        questionNumberElement.textContent = `Question ${index + 1}`;
        questionElement.textContent = questions[index].question;
        answerInput.value = '';
        answerInput.focus();
        keywordContainer.classList.add('hidden');
        keywordContainer.classList.remove('animate__fadeInDown');
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
            keywordElement.textContent = questions[currentQuestionIndex].keyword;
            keywordContainer.classList.remove('hidden');
            keywordContainer.classList.add('animate__fadeInDown');
            if (attempts === 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Excellent!',
                    text: 'You nailed it on the first try!',
                    showClass: {
                        popup: 'animate__animated animate__heartBeat'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            } else if (attempts === 1) {
                Swal.fire({
                    icon: 'success',
                    title: 'Well Done!',
                    text: 'Got it on the second try!',
                    showClass: {
                        popup: 'animate__animated animate__bounceIn'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
                });
            }
            attempts = 0;
        } else {
            attempts++;
            if (attempts >= maxAttempts) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'That was your third attempt! The correct answer remains a secret for now. Try again with the same question!',
                    footer: '<a href="www.tinobritty.tech">Summa Inga thottu Paaren :)</a>',
                    showClass: {
                        popup: 'animate__animated animate__bounceIn'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__bounceOut'
                    }
                });
                attempts = 0;
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Try Again!',
                    text: `Incorrect answer. You have ${maxAttempts - attempts} attempt(s) left.`,
                    showClass: {
                        popup: 'animate__animated animate__shakeX'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
                });
            }
        }
    });

    questions.forEach((_, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.className = 'm-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out';
        button.addEventListener('click', () => showQuestion(index));
        navigationButtonsContainer.appendChild(button);
    });

    showQuestion(0);

    copyButton.addEventListener('click', () => {
        copyToClipboard(keywordElement.textContent);
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'Keyword has been copied to clipboard.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    });

    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    });
});
