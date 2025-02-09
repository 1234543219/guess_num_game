// 初始化变量
let score = -1000;
let correct = false;
let attempts = 0;
let randomNumber;

// 生成一个1 - 10之间的随机数
function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
}

// 检查猜测结果
function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);
    const resultMessage = document.getElementById('resultMessage');
    const scoreMessage = document.getElementById('scoreMessage');
    const generatedNumberMessage = document.getElementById('generatedNumberMessage');
    const attemptsMessage = document.getElementById('attemptsMessage');

    if (isNaN(guess) || guess < 1 || guess > 10) {
        resultMessage.textContent = '请输入1 - 10之间的数字';
        return;
    }

    if (attempts < 15) {
        if (guess === randomNumber) {
            correct = true;
            score += 1000;
            resultMessage.textContent = '猜对了！';
        } else {
            score += 10;
            resultMessage.textContent = '猜错了，再试一次。';
        }

        scoreMessage.textContent = `当前得分: ${score}`;
        generatedNumberMessage.textContent = `生成的数字是: ${randomNumber}`;
        attempts++;
        attemptsMessage.textContent = `已尝试次数: ${attempts}`;

        // 生成新的随机数
        generateRandomNumber();
    } else {
        resultMessage.textContent = '游戏结束，已达到最大尝试次数。';
    }

    // 清空输入框
    guessInput.value = '';
}

// 初始化游戏
function initGame() {
    generateRandomNumber();
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', checkGuess);
}

// 页面加载完成后初始化游戏
window.addEventListener('load', initGame);