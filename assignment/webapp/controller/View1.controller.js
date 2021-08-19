sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("assignment.controller.View1", {
			onInit: function () {
                let gamesModel = new JSONModel();
                console.log("Hello world")
                gamesModel.loadData('model/game.json').then(
                () => {
                     console.log(gamesModel.getData());
                     this.getView().setModel( new JSONModel(gamesModel.getData()),"games");
                }, 
                (err) => {
                    console.log("Error occurued. " + err.toString());
                }
            );
			}
		});
	});
