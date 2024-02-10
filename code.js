function fib(n) {
    var array = [];

    if (n == 2) {
        array.unshift(1);
        array.unshift(1);
        array.unshift(0);
        return array;
    }
    else if (n == 1) {
        array.unshift(1);
        array.unshift(0);
        return array;
    }
    else if (n == 0) {
        array.unshift(0);
        return array;
    }

    var counter = n;
    for (let i = 0; i <= counter; i++) {
        if (n < 2)  {
            break; 
        }
        else {
            array.unshift(recursion(n-1) + recursion(n-2));
            n--;
        }
    }
    
    array.unshift(1);
    array.unshift(0);
    return array
}

function recursion(n) {
    if (n < 2)  {
        if (n == 1)
            return 1;
        if (n == 0)
            return 0;
    }
        
    else 
        return recursion(n-1) + recursion(n-2);   
}
