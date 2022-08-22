// Javascript file for my Golden Ratio 
// illustration/animation webart wepage.
// by Rami Al-Saadi 
// 2022


// n = 79;
const MyMath = {
    fibonacci: function (n) {
        if (n === 0 || n === 1) {
            return n;
        }
        if (n == 2)
            return 1;
        return +(this.fibonacci(n - 1) * (2 * Math.cos(Math.PI / 5))).toFixed(0);
    }
}
// const fibonacciArray = [];
// for (let i = 0; i < n; i++)
//     fibonacciArray.push(MyMath.fibonacci(i));
// console.log(fibonacciArray);

const fibonacciArray1 = [
    0, 1, 1,
    2, 3, 5,
    8, 13, 21,
    34, 55, 89,
    144, 233, 377,
    610, 987, 1597,
    2584, 4181, 6765,
    10946, 17711, 28657,
    46368, 75025, 121393,
    196418, 317811, 514229,
    832040, 1346269, 2178309,
    3524578, 5702887, 9227465,
    14930352, 24157817, 39088169,
    63245986, 102334155, 165580141,
    267914296, 433494437, 701408733,
    1134903170, 1836311903, 2971215073,
    4807526976, 7778742049, 12586269025,
    20365011074, 32951280099, 53316291173,
    86267571272, 139583862445, 225851433717,
    365435296162, 591286729879, 956722026041,
    1548008755920, 2504730781961, 4052739537881,
    6557470319842, 10610209857723, 17167680177565,
    27777890035288, 44945570212853, 72723460248141,
    117669030460994, 190392490709135, 308061521170129,
    498454011879264, 806515533049393, 1304969544928657,
    2111485077978050, 3416454622906707, 5527939700884757,
    8944394323791464];
const length = 79;
const max = 8944394323791464;

function main() {
    let size = f = 1;
    function divsAppend() {
        document.body.innerHTML = document.body.innerHTML.replace('<div class="circle c1"></div>', '<div class="circle"></div>'.repeat(length));
    }
    function addStyles() {
        for (i = 0; i < length; i++)
            circlesArray[i].style.width = circlesArray[i].style.height = (fibonacciArray1[i] * size / max).toFixed(5) + 'vmin';
    }
    divsAppend();
    const circlesArray = [].slice.call(document.querySelectorAll(".circle"));
    addStyles();
    console.log(circlesArray);
    let a = 1;
    { f++; size = MyMath.fibonacci(f); updateStyles() }
    setInterval(() => { f == 90 || f == 0 ? a *= -1 : 0; a == 1 ? f++ : f--; size = MyMath.fibonacci(f); updateStyles() }, 1000);
    function updateStyles() {
        //    console.log(f);
        for (i = 0; i < length; i++) {
            if ((fibonacciArray1[i] * size) < 5456077581079143000)
                circlesArray[i].style.width = circlesArray[i].style.height = (fibonacciArray1[i] * size / max).toFixed(5) + 'vmin';
            //            console.log(circlesArray[i].style.width);
            if (circlesArray[i].style.width.slice(0, -4) > 300 && a == 1) {
                if (circlesArray[i].style.display != 'none')
                    circlesArray[i].style.display = 'none';
            }
            else {
                if (circlesArray[i].style.display == 'none')
                    circlesArray[i].style.display = '';
            }
            if (circlesArray[i].style.width.slice(0, -4) > 100 && a == -1) {
                if (circlesArray[i].style.display != 'none')
                    circlesArray[i].style.display = 'none';
            }
            else {
                if (circlesArray[i].style.display == 'none')
                    circlesArray[i].style.display = '';
            }
        }
    }
    music = new Audio('https://assets.mixkit.co/music/download/mixkit-just-chill-16.mp3');
}
main();

// by Rami Al-Saadi 
// 2022