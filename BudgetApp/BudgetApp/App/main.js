require.config({
    baseUrl: '/App',
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions',
        'breeze': '../Scripts/breeze'
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);
define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'plugins/router'],
    function (app, viewLocator, system, router) {
        
        // Enable debug message to show in the console 
        system.debug(true);

        app.title = 'Dynamic Page App';

        // Specify which plugins to install und their configuation
        app.configurePlugins({
            router: true,
            dialog: true
        });

        app.start().then(function () {
            
            // When finding a viewmodel module, replace the viewmodel string 
            // with view to find it partner view.
            viewLocator.useConvention();

            //Show the app by setting the root view model for our application.
            app.setRoot('viewmodels/shell', 'entrance');
        });
    });