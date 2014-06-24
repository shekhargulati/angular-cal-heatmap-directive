'use strict';
angular.module('calHeatmap', []).directive('calHeatmap', function () {
    function link(scope, el) {
        var config = scope.config || {};
        var element = el[0];
        var cal = new CalHeatMap();
        var defaults = {
            itemSelector: element,
            domain: 'month',
            subDomain: 'day',
            subDomainTextFormat: '%d',
            data: '',
            start: new Date(),
            cellSize: 25,
            range: 3,
            domainGutter: 10,
            legend: [2, 4, 6, 8, 10],
            itemName: 'item'
        };
        angular.extend(defaults, config);
        cal.init(defaults);
    }
    return {
        template: '<div class="cal-heatmap" config="config"></div>',
        restrict: 'E',
        link: link,
        scope: {
            config: '='
        }
    };
});
