define(['durandal/system'],
    function (system) {
        var logger = {
            log: log,
            logError: logError
        };

        return logger;

        function log(message, data, source, showToast,timeout) {
            logIt(message, data, source, showToast, 'info', timeout);
        }

        function logError(message, data, source, showToast, timeout) {
            logIt(message, data, source, showToast, 'error', timeout);
        }

        function logIt(message, data, source, showToast, toastType, timeout) {
            //toastr.options.positionClass = 'toast-bottom-right';
            //toastr.options.extendedTimeOut = 0; 
            toastr.options.timeOut = timeout;
            //toastr.options.fadeOut = 250;
            //toastr.options.fadeIn = 250;

            source = source ? '[' + source + '] ' : '';
            if (data) {
                system.log(source, message, data);
            } else {
                system.log(source, message);
            }
            if (showToast) {
                if (toastType === 'error') {
                    toastr.error(message);
                } else {
                    toastr.info(message);
                }

            }

        }
    });