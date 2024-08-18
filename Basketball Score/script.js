function updateScore(group, result) {
    const scoreElement = document.getElementById(`${group}-score`);
    let currentScore = parseInt(scoreElement.textContent);
    currentScore += result;
    scoreElement.textContent = currentScore;
}
