#Cal Heatmap AngularJS Directive#

This is an AngularJS directive for cal-heatmap http://kamisama.github.io/cal-heatmap/

##How to use it##

Use bower to install the library
```
$ bower install angular-cal-heatmap-directive
```

Create an index.html as shown below.
```
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF8">
	<title>Angular Cal Heatmap directive</title>
	<link rel="stylesheet" type="text/css" href="bower_components/cal-heatmap/cal-heatmap.css">
</head>
<body ng-app="myapp">

<cal-heatmap></cal-heatmap>

<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/d3/d3.js"></script>
<script type="text/javascript" src="bower_components/cal-heatmap/cal-heatmap.js"></script>
<script type="text/javascript" src="bower_components/angular-cal-heatmap-directive/app/scripts/calHeatmap.js"></script>
<script type="text/javascript" src="app.js"></script>
</body>

</html>
```

The app.js is the application Angualar app. Add the dependency to the calHeatmap directive in the app.js as shown below.
```
angular.module('myapp',['calHeatmap']);
```
This will generate a default Cal Heatmap as shown below.
![](http://whyjava.files.wordpress.com/2014/03/cal-heatmap-default.png)

To add your own configuration, you can use config attribute as shown below.

```
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF8">
	<title>Angular Cal Heatmap directive</title>
	<link rel="stylesheet" type="text/css" href="bower_components/cal-heatmap/cal-heatmap.css">
</head>
<body ng-app="myapp">

<cal-heatmap config="{domain:'year',range:1,cellSize:15}"></cal-heatmap>

<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/d3/d3.js"></script>
<script type="text/javascript" src="bower_components/cal-heatmap/cal-heatmap.js"></script>
<script type="text/javascript" src="bower_components/angular-cal-heatmap-directive/app/scripts/calHeatmap.js"></script>
<script type="text/javascript" src="app.js"></script>
</body>

</html>
```

This will produce the heatmap as shown below.
![](http://whyjava.files.wordpress.com/2014/03/cal-heatmap-configuration.png)

This directive supports most of the options supported by cal-heatmap library http://kamisama.github.io/cal-heatmap/#options

