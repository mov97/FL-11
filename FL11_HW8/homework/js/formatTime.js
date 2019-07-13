function formatTime(UserTime) {
    let days = Math.floor(UserTime / (60 * 24));
    let hours = Math.floor(UserTime / (60)) % 24;
    let minutes = UserTime % 60;
    return `${days} days ${hours} hours ${minutes} minutes`;
}
console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));
