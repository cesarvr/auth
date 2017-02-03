(function() {

    function checkCordova() {
        if (typeof cordova !== 'undefined')
            document.addEventListener("deviceready", function() {
                initialize(true);
            }, false);
        else
            initialize(false);
    }

    function failiure(e) {
        console.log('fail->', e)
    }

    function success(o) {
        console.log('success', o)
    }

    function initialize(isRunning) {
        var user = document.getElementById('user');
        var password = document.getElementById('password');

        if (isRunning)
            auth({
                user: user,
                password: password
            });
        else
            console.log('cordova is not running, make sure you use cordova run android/ios');
    }

    checkCordova();
}());
