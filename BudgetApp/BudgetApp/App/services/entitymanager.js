define(['durandal/app', 'breeze/breeze.min'],
    function (app, breeze) {
        var serviceName = "breeze/Budget";
        var manager = new breeze.EntityManager(serviceName);
        manager.fetchMetadata();

        return {
            manager: manager
        }
    }
);