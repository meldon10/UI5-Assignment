sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
    new ComponentContainer({
        name: "assignment",
        settings: {
            id: "assignmentApp"
        },
        async: true
    }).placeAt('content');
});