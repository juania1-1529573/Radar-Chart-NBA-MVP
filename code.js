      /* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

			//////////////////////////////////////////////////////////////
			//////////////////////// Set-Up //////////////////////////////
			//////////////////////////////////////////////////////////////

			var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

			//////////////////////////////////////////////////////////////
			////////////////////////// Data //////////////////////////////
      //////////////////////////////////////////////////////////////

      var data2 =[
        {"PTS":32,"3P%":0.391,"FG%":0.503,"Steals":1.3,"BLK":0.7,"ASSISTS":5.5,"REBOUNDS":7.4},//Kevin Durant(2013-14)
        {"PTS":23.8,"3P%":0.443,"FG%":0.487,"Steals":2,"BLK":0.2,"ASSISTS":7.7,"REBOUNDS":4.3},//Stephen Curry(2014-15)
        {"PTS":30.1,"3P%":0.454,"FG%":0.504,"Steals":2.1,"BLK":0.2,"ASSISTS":6.7,"REBOUNDS":5.4},//Stephen Curry(2015-16)
        {"PTS":31.6,"3P%":0.343,"FG%":0.425,"Steals":1.6,"BLK":0.4,"ASSISTS":10.4,"REBOUNDS":10.7},//Russell Westbrook(2016-17)
        {"PTS":27.7,"3P%":0.256,"FG%":0.578,"Steals":1.3,"BLK":1.5,"ASSISTS":5.9,"REBOUNDS":12.5},//Giannis Antetokounmpo(2018-19)
        {"PTS":30.4,"3P%":0.367,"FG%":0.449,"Steals":1.8,"BLK":0.7,"ASSISTS":8.8,"REBOUNDS":5.4},//James Harden(2017-18)
        {"PTS":36.1,"3P%":0.368,"FG%":0.442,"Steals":2,"BLK":0.7,"ASSISTS":7.5,"REBOUNDS":6.6}//James Harden(2018-19)
      ];


      var fields = [
          "PTS",
          "3P%",
          "FG%",
          "Steals",
          "BLK",
          "ASSISTS",
          "REBOUNDS"
      ];

      var scales = {"PTS":40,
      "3P%":.5,
      "FG%":.6,
      "Steals":3,
      "BLK":2,
      "ASSISTS":11,
      "REBOUNDS":13};

      var scalesAndAxes = {};
      fields.forEach(function (field){

        var o = {};
        o.scale = d3.scale.linear().domain([0, scales[field]]);
        o.axis = d3.svg.axis()
          .scale(o.scale)
          .tickFormat(function(d, i){ if(i != 0){return d + "";} else {return "";}  })
          .orient("bottom");

        scalesAndAxes[field] = o;
      });

      var radarChartOptions = {
        fields: fields,
        scalesAndAxes: scalesAndAxes,
      };
      RadarChart(".radarChart5", data2, radarChartOptions);
