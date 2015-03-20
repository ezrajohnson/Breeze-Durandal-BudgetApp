define(['knockout', 'services/entitymanager', 'breeze/breeze.min'],
    function ( ko, entitymanager,breeze) {

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
            funds: ko.observableArray([
                        new Budget(1, '01/10/2015', 'This is the first description', 'Axis Bank', 10000, 0),
                        new Budget(2, '30/11/2015', 'This is the second description', 'Canara Bank', 85111, 0),
                        new Budget(3, '19/08/2015', 'This is the third description', 'ICICI Bank', 0, 1024586)
            ]),
            addRow : function () {
                console.log(self.funds());
                self.funds.push(new Budget(nextSNo++));
            },
            removeItem : function (item) {
                self.funds.splice(self.funds.indexOf(item), 1);
            },
            saveBudget: function () {
                entitymanager.manager.createEntity('BudgetEntry', {
                    TenantId: tenantId().tenant_id,
                    ComponentKey: templateArray[i]
                });

                entitymanager.manager.saveChanges()
                        .then(function () {
                        })
                .fail(function (err) {
                });
            },
            getBudgets : function() {
                var self = this;
                var query = breeze.EntityQuery.from("EntriesOfBudget");
                console.log("Getting EntriesOfBudget");
                entitymanager.manager.executeQuery(query)
                .then(function (data) {
                    console.log("Received data for Todos: ");
                    console.log(data.results);
                    self.funds.push(new Budget(1, '01/10/2015', 'This is the first description', 'Axis Bank', 10000, 0));

                    for (var i = 0; i < data.results.length; i++) {
                        console.log(data.results[i]);
                        self.funds.push(new Budget(data.results[i].SNo(), 
                            data.results[i].EntryDate(), data.results[i].Description(), 
                            data.results[i].Source(), data.results[i].Credit(),
                            data.results[i].Debit()));
                    }

                }).fail(function (error) {
                    console.log("Error: " + error);
                });
            },
            activate: function () {
                this.getBudgets();
            }
        };

        return self;
    });