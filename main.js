document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What is the main circuit board in a computer?",
            answer: "Motherboard",
            keyword: "T: Futuristic Cityscapes\nE:4iU14KAclCEVtNNQbW7ZumdthuBZqGdeGkqcqSSfADs=\nK: Proclub123"
        },
        {
            question: "Which device is used to input text into a computer?",
            answer: "Keyboard",
            keyword: "T: Fantasy Forests\nE: zDR2U51qv8bLTdQw9U7Neg==\nK: Proclub234"
        },
        {
            question: "What is the brain of the computer called?",
            answer: "CPU",
            keyword: "T: Historical Landmarks\nE: Pom5SY8P7bml5hZq1n/Z5KQVx1f6QOtsNHDOclvz3pQ=\nK: Proclub345"
        },
        {
            question: "What is the permanent memory called?",
            answer: "ROM",
            keyword: "T: Underwater Worlds\nE: 9b9bw8GTkkmv6mmAr1UQlP0abUOYDjeMslAi9Allg64=\nK: Proclub456"
        },
        {
            question: "What is a computer network’s unique address called?",
            answer: "IP",
            keyword: "T: Steampunk Adventures\nE: tYodN8l9TYpQrx127593i4zj6WvVLL4u5993bXSg3ZE=\nK: Proclub567"
        },
        {
            question: "What does ‘USB’ stand for?",
            answer: "Universal Serial Bus",
            keyword: "T: Space\nE: f9JD59wA6v8mqvwZ880MWA==\nK: Proclub678"
        },
        {
            question: "Which type of computer memory is used to store data temporarily?",
            answer: "RAM",
            keyword: "T: Sky Islands\nE: ijjyv3nl6B0Q/h47BGZj0A==\nK: Proclub789"
        },
        {
            question: "What is a set of instructions that a computer follows to perform a task?",
            answer: "Algorithm",
            keyword: "T: Urban Jungle\nE: acb283XY1JZPqI4NEipuYQ==\nK: Proclub891"
        },
        {
            question: "What is a wireless networking technology standard?",
            answer: "Wi-Fi",
            keyword: "T: Pirate Adventures\nE: ZTgeMx9h4AmrWKeGG3BUm/6ikbYS83/XX7GxreE5udE=\nK: Proclub910"
        },
        {
            question: "What is a graphical representation of data using symbols and charts?",
            answer: "Graph",
            keyword: "T: Dreamy Meadows\nE: Gv3AbHlxK2KZ9w8FRqacmQ==\nK: Proclub101"
        },
        {
            question: "What is a programming language known for its simplicity and readability?",
            answer: "Python",
            keyword: "T: Crystal Golems\nE: pW8QKR5Wkn18e0IifHzN9g==\nK: Proclub111"
        },
        {
            question: "What is a device used to display output from a computer?",
            answer: "Monitor",
            keyword: "T: Gladiator\nE: F/yRqp2jxSTvWhzgE+jD9g==\nK: Proclub112"
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

    function showQuestion(index) {
        currentQuestionIndex = index;
        attempts = 0;
        questionNumberElement.textContent = `Question ${index + 1}`;
        questionElement.textContent = questions[index].question;
        answerInput.value = '';
        answerInput.focus();
        keywordContainer.classList.add('hidden');
    }

    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
            keywordElement.textContent = questions[currentQuestionIndex].keyword;
            keywordContainer.classList.remove('hidden');
            if (attempts === 0) {
                // First attempt correct
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
                // Second attempt correct
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
            attempts = 0; // Reset attempts for the next question
        } else {
            attempts++;
            if (attempts >= maxAttempts) {
                // Funny alert with animation
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
                attempts = 0; // Reset attempts for the next question
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

    // Create navigation buttons
    questions.forEach((_, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.className = 'm-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out';
        button.addEventListener('click', () => showQuestion(index));
        navigationButtonsContainer.appendChild(button);
    });

    showQuestion(0);

    // Theme switch button
    const themeSwitchButton = document.getElementById('theme-switch');
    themeSwitchButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        themeSwitchButton.querySelector('i').classList.toggle('fa-moon');
        themeSwitchButton.querySelector('i').classList.toggle('fa-sun');
    });

    // Disable right-click and inspect
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    });
});
