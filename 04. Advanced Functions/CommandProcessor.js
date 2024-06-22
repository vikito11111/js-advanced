var proc = (function () {
    var text = '';

    function append(str) {
        text += str;
    }

    function removeStart(n) {
        text = text.substring(n);
    }

    function removeEnd(n) {
        text = text.substring(0, text.length - n);
    }

    function print() {
        console.log(text);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
})();

proc.print();
proc.append('Marko');
proc.removeStart(2);
proc.print();