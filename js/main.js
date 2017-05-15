$(function () {
    // Script that will be inserted into web page
    var disablerFunction = function () {
        setInterval(function () {
            window.alert = function alert(msg) {
                console.info("alert: " + msg);
            };
            window.onbeforeunload = null;
        }, 50);
    };

    // Making a string of the function
    var disablerCode = "(" + disablerFunction.toString() + ")();";

    // Creating a script DOM element and putting disablerFunction in it
    var disablerScriptElement = document.createElement('script');
    disablerScriptElement.textContent = disablerCode;

    // Inserting script into html element
    document.documentElement.appendChild(disablerScriptElement);

    // Removing script since it has executed already
    disablerScriptElement.parentNode.removeChild(disablerScriptElement);
});
