﻿/// <reference path="../../services/realtime/hubService.js" />
(function () {
    'use strict';

    function clientsController($location, $rootScope, unitsService,
        reportsService, statsService, notificationService, authData, pusher, notificationsValidator) {
        $rootScope.title = 'Dashboard - ' + authData.userName + ' | Emergy';

        var vm = this;

        vm.units = [];
        vm.reports = [];
        vm.stats = [];

        function activate() {
            //unitsService.getUnits().then(function (units) { vm.units = units; }, function (error) { notificationService.pushError(error) });
            //reportsService.getReports().then(function (reports) { vm.reports = reports; }, function (error) { notificationService.pushError(error); });
            //statsService.getStats().then(function (stats) { vm.stats = stats; }, function (error) { notificationService.pushError(error); });
            $rootScope.$on('testSuccess', function (event, response) {
                if (notificationsValidator.isNotificationValid()) {
                    alert(response);
                    notificationsValidator.setLastCame(Date.now()); // grob
                }
            });
            $rootScope.$on('realTimeConnected', function () {
                pusher.testPush('working');
                setTimeout(function() {
                    pusher.testPush('working#2');
                }, 2000);
            });



            //emergyHub.connection.start().done(function() {
            //    emergyHub.sendNotification(1);
            //    emergyHub.sendNotification(11);
            //});

        }

        vm.loadReports = function () {
            reportsService.getReports().then(function (reports) { vm.reports = reports; }, function (error) { notificationService.pushError(error); });
        }

        vm.deleteReport = function (reportId) {
            var promise = reportsService.deleteReport(reportId);
            promise.then(function () {
                notificationService.pushSuccess("Report has been deleted!");
                vm.loadReports();
            }, function () {
                notificationService.pushError("Error has happened while deleting the report.");
            });
        }

        vm.changeStatus = function (reportId, newStatus) {
            var promise = reportsService.changeStatus(reportId, JSON.stringify(newStatus));
            promise.then(function () {
                notificationService.pushSuccess("Status changed to " + newStatus);
                vm.loadReports();
            }, function () {
                notificationService.pushError("Error has happened while changing the status.");
            });
        }

        activate();
    }

    app.controller('clientsController', clientsController);
    clientsController.$inject = ['$location', '$rootScope', 'unitsService', 'reportsService',
        'statsService', 'notificationService', 'authData', 'pusher', 'notificationsValidator'];
})();
