'use strict';

angular.module('calHeatmap', [])
    .directive('calHeatmap', function() {
        function link(scope, el) {
            var config = scope.config;
            var element = el[0];
            var cal = new CalHeatMap();
            cal.init({
                itemSelector: element,
                domain: !config ? 'month' : config.domain ? config.domain : 'month',
                subDomain: !config ? 'day' : config.subDomain ? config.subDomain : 'day',
                subDomainTextFormat: !config ? '%d' : config.subDomainTextFormat ? config.subDomainTextFormat : '%d',
                data: !config ? '' : config.data ? config.data : '',
                start: !config ? new Date() : config.start ? config.start : new Date(),
                cellSize: !config ? 25 : config.cellSize ? config.cellSize : 25,
                range: !config ? 3 : config.range ? config.range : 3,
                domainGutter: !config ? 10 : config.domainGutter ? config.domainGutter : 10,
                legend: !config ? [2, 4, 6, 8, 10] : config.legend ? config.legend : [2, 4, 6, 8, 10],
                displayLegend: config.displayLegend || true,
                legendCellSize: config.legendCellSize || 10,
                legendCellPadding: config.legendCellPadding || 2,
                legendMargin: config.legendMargin || [10, 0, 0, 0],
                legendVerticalPosition: config.legendVerticalPosition || 'bottom',
                legendHorizontalPosition: config.legendHorizontalPosition || 'left',
                legendOrientation: config.legendOrientation || 'horizontal',
                legendColors: config.legendColors || null,
                itemName: !config ? 'item' : config.itemName ? config.itemName : 'item',
            });

            scope.$watch("config.displayLegend", function(newValue, oldValue) {
                if (newValue) {
                    cal.setLegend();
                } else {
                    cal.removeLegend();
                }
            }, true);

            scope.$watch("config.data", function(newValue, oldValue) {
                cal.update(newValue);
            })
        }

        return {
            template: '<div id="cal-heatmap" config="config"></div>',
            restrict: 'E',
            link: link,
            scope: {
                config: '='
            }
        };
    });
