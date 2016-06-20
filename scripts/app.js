angular.module("WebApp", [])
.controller("chartCtrl", function($scope){
	$scope.chart= {
		  "numbers": [
		    {
		      "month": "January",
		      "money": 1000,
		      "like": 435,
		      "views":6372,
		      "share":398
		    },
		    {
		      "month": "February",
		      "money": 1500,
		      "like": 400,
		      "views":8273,
		      "share":937
		    },
		    {
		      "month": "March",
		      "money": 1200,
		      "like": 365,
		      "views":9283,
		      "share":493
		    },{
		      "month": "April",
		      "money": 1600,
		      "like": 288,
		      "views":8392,
		      "share":302
		    },
		    {
		      "month": "May",
		      "money": 1800,
		      "like": 326,
		      "views": 2384,
		      "share": 238
		    },
		    {
		      "month": "June",
		      "money": 1300,
		      "like": 389,
		      "views":3749,
		      "share": 293
		    },
		    {
		      "month": "July",
		      "money": 1100,
		      "like": 425,
		      "views":3927,
		      "share":492
		    },
		    {
		      "month": "August",
		      "money": 1300,
		      "like": 187,
		      "views":3398,
		      "share":376
		    },
		    {
		      "month": "September",
		      "money": 1800,
		      "like": 501,
		      "views":4587,
		      "share":283
		    },
		    {
		      "month": "October",
		      "money": 1200,
		      "like": 287,
		      "views":2937,
		      "share":283
		    },
		    {
		      "month": "November",
		      "money": 1500,
		      "like": 412,
		      "views":8378,
		      "share":763
		    },
		    {
		      "month": "December",
		      "money": 1800,
		      "like": 509,
		      "views":4893,
		      "share":238
		    },
		    {"month": "January",
		      "money": 1000,
		      "like": 435,
		      "views":6372,
		      "share":398
		    },
		    {
		      "month": "February",
		      "money": 1500,
		      "like": 400,
		      "views":8273,
		      "share":937
		    },
		    {
		      "month": "March",
		      "money": 1200,
		      "like": 365,
		      "views":9283,
		      "share":493
		    },{
		      "month": "April",
		      "money": 1600,
		      "like": 288,
		      "views":8392,
		      "share":302
		    },
		    {
		      "month": "May",
		      "money": 1800,
		      "like": 326,
		      "views": 2384,
		      "share": 238
		    },
		    {
		      "month": "June",
		      "money": 1300,
		      "like": 389,
		      "views":3749,
		      "share": 293
		    },
		    {
		      "month": "July",
		      "money": 1100,
		      "like": 425,
		      "views":3927,
		      "share":492
		    },
		    {
		      "month": "August",
		      "money": 1300,
		      "like": 187,
		      "views":3398,
		      "share":376
		    },
		    {
		      "month": "September",
		      "money": 1800,
		      "like": 501,
		      "views":4587,
		      "share":283
		    },
		    {
		      "month": "October",
		      "money": 1200,
		      "like": 287,
		      "views":2937,
		      "share":283
		    },
		    {
		      "month": "Novenber",
		      "money": 1500,
		      "like": 412,
		      "views":8378,
		      "share":763
		    },
		    {
		      "month": "December",
		      "money": 1800,
		      "like": 509,
		      "views":4893,
		      "share":238
		    }
		  ],
		  "obj": {
		    "number": 1.2345e-6,
		    "enabled": true
		  },
		  "message": "Strings have to be in double-quotes."
		};
})

.controller("userCtrl",function($scope){
		$scope.user = {
			"name": "Irina Bykova",
			"job": "Photographer",
			"team": "works with Slack team"
		}


});

