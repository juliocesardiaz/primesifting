var primeSifting = function(value) {
    if(value < 2) {
        return "No Primes.";
    }
    var primes = [2];
    var n = 3;

    while(n < value) {
        primes = primeCalc(n, primes);
        n++;
    }
    return primes;
}

var primeCalc = function(n, primes) {
    var number_passed = 0;
    var new_primes = primes;
    var index = 0;

    while(index <= primes.length) {
        if(n % primes[index] !== 0) {
            number_passed++;
            if((primes[index] === primes[primes.length - 1]) && (number_passed === primes.length)) {
                new_primes.push(n);
                return new_primes;
            }
        }
        index++;
    }
    return new_primes;
}

$(document).ready(function() {

    $("form#primesifting").submit(function(event) {
        var num = parseInt($("input#num").val());
        var result = primeSifting(num);


        $(".answer").text(result);
        $("#result").show();
        event.preventDefault();
    });
});
