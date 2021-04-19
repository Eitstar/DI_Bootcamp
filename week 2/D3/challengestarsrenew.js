let star = "* "​​
for (let i = 1; i <= 6; ++) {
    if (i % 2 == 0 || i == 1)
        console.log(star.repeat(i))
}