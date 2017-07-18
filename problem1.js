function multiples3and5(max) {
    var sum=0;
    var total = [];
    for (var x = 0; x < max; x++) {
        if (x % 3 ===0 || x % 5 ===0 ) {
            total.push(x);
            sum += total[total.length - 1];          
        }

    }
    return sum;
}
