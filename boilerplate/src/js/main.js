window.onload = function () {
    if (document.readyState === "complete") {
        var btn = document.getElementById("btn");
        btn.onclick = function () {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else if (window.ActiveXObject) {// code for IE6, IE5
                xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    document.getElementById("hello").innerHTML += (xmlhttp.responseText + "<br/>" + xmlhttp.getAllResponseHeaders() + "<br/>");
                }
            };

            xmlhttp.open("GET", "test.txt", true);
            xmlhttp.send();

        };
    }
};

