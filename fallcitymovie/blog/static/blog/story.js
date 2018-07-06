// storypage text

let t = 0;
let txt = 'Feeling like life has taken everything from him, recently-paroled thief\n' +
    '            Jon Price is forced to return to his small, rainy hometown of Fall City, Washington where he gets a job at\n' +
    '            the post office for the holidays. At home he meets Olivia, a struggling single mother, who shows Jon true\n' +
    '            kindness. Jon unexpectedly begins to find joy as he grows closer to Olivia and begins filling the role of a\n' +
    '            father for her daughter, Adiel. Working to change, Jon begins responding to children\'s letters to Santa.\n' +
    '            But Jon\'s new life crumbles when his past is revealed, he is fired from work and his Santa letters get locked\n' +
    '            away. Even worse, Jon intercepts a letter from Olivia and discovers her Christmas wish is to have her ex\n' +
    '            come home. Suddenly, with everything taken from him again, Jon has to decide how much he\'s willing to\n' +
    '            sacrifice to give Olivia what she wants or if he will fight to take back the happy life he finally found.';
let speed = 30;

function textType() {
    if (t < txt.length) {
        document.getElementById("storyText").innerHTML += txt.charAt(t);
        t++;
        setTimeout(textType, speed);
    }
}
textType();