let num = Math.floor (Math.random() * 50);

MoreThanZero = num + 1

console.log (MoreThanZero);

if (MoreThanZero % 15 == 0) {
    console.log ("3と5の倍数です")
}
else if (MoreThanZero % 5 == 0) {
    console.log ("5の倍数です");
}
else if (MoreThanZero % 3 == 0) {
    console.log ("3の倍数です")
}
else {
    console.log (MoreThanZero)
}