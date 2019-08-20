$(document).ready(function () {
    var $user = 0;
    var $textarea = $('textarea');

    $('#dot').on("click", function () {
        var w = $textarea.text();
        if (($user == 1) || (w == false)) {
        } else {
            $textarea.text(w + ".");
            $user = 1;
        };
    });

    $('button:not(#backspace,#clear,#equal,#para1,#dot)').on("click", function () {
        var text = $textarea.text();
        var d = $(this).text();
        var x = text.length - 1;
        var res = text.substring(x);

        if ($.isNumeric(d)) {
            $textarea.text(text + d);
        } else if ((res == " ") || (res == false)) {
        } else {
            $textarea.text(text + ' ' + d + ' ');
            $user = 0;
        };
    });

    $('#clear').on("click", function () {
        $("textarea").text('')
        $('p').text('by VPA')
        $user = 0;
    });

     $('#backspace').on('click', function () {
        var w = $textarea.text();
        var x = w.length - 1;
        var y = w.length - 3;
        var z = w.substring(x);
        if (z == false) {
            var res = w.substring(0, y);
            $textarea.text(res);
        } else {
            var res = w.substring(0, x);
            $textarea.text(res);
        }
    });

    document.getElementById("equal").addEventListener("click", function () {
        var w = document.getElementsByTagName('textarea')[0].textContent;
        document.getElementsByTagName('p')[0].innerHTML = eval(w);
        document.getElementsByTagName('textarea')[0].textContent = '';

    });
});