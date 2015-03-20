define(['durandal/system', 'plugins/router', 'knockout','breeze/breeze.min'],
    function (system, router, ko, breeze) {

        var nextSNo = 4;
        function Budget(sNo, date, desc, src, credit, debit) {
            this.sNo = sNo;
            this.date = date;
            this.desc = desc;
            this.src = src;
            this.credit = credit;
            this.debit = debit;
        }

        var self = {
            router: router,
            funds: ko.observableArray([
                        new Budget(1, '01/10/2015', 'This is the first description', 'Axis Bank', 10000, 0),
                        new Budget(2, '30/11/2015', 'This is the second description', 'Canara Bank', 85111, 0),
                        new Budget(3, '19/08/2015', 'This is the third description', 'ICICI Bank', 0, 1024586)
            ]),
            activate: function () {
                router.map([
                    { route: '', title: 'Fund', moduleId: 'viewmodels/fund', nav: true, hash: "#fund" }
                ]).buildNavigationModel();

                return router.activate();
            }
        };

        self.addRow = function () {
            console.log(self.funds());
            self.funds.push(new Budget(nextSNo++));
        };

        self.removeItem = function (item) {
            self.funds.splice(self.funds.indexOf(item), 1);
        };

        return self;
    });