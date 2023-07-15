const pushBtn = document.getElementById("btn");

pushBtn.addEventListener("click", () => {
    setTimeout(() => {
    document.getElementById("text").innerText = "ボタンをクリックしました"
}, 2000)
});
