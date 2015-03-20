define([],
    function() {

        var self = {
          extendMetadata: extendMetadata  
        };

        return self;

        function extendMetadata(metadataStore) {
            extendBudgetEntry(metadataStore);
        }


        function extendBudgetEntry(metadataStore) {
            var budgetEntryCtor = function () {
                this.sNo = ko.observable(breeze.core.getUuid());
            };

            metadataStore.registerEntityTypeCtor('BudgetEntry', budgetEntryCtor);
        }

        function ensureEntityType(obj, entityTypeName) {
            if (!obj.entityType || obj.entityType.shortName !== entityTypeName) {
                throw new Error('Object must be an entity of type ' + entityTypeName);
            }
        }
    });