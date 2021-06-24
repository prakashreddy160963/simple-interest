function increment() {
    var x, y,sum;
    x = parseFloat(document.getElementById('firstnumber').value);
    y = parseFloat(document.getElementById('secondnumber').value);
    sum = x + y;
    document.getElementById('answer').value = sum;
}