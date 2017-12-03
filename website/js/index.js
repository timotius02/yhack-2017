// Navigation Variables
var caret = $(".fa.fa-caret-down");
var box = $(".account-box").hide();

var nav = $(".fa.fa-bars");
var menu = $(".menu").hide();

var start = 1;

// Trigger Click Event For Navigation
caret.click(function(e) {
  e.preventDefault();

  box.fadeToggle();
});

nav.click(function() {
  menu.fadeToggle();
});

// Line Chart
var lineChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(41, 128, 185, 0.5)",
      strokeColor: "none",
      pointColor: "rgba(41, 128, 185, 0.9)",
      pointStrokeColor: "rgba(41, 128, 185, 0)",
      pointHighlightFill: "rgba(41, 128, 185, 0.9)",
      pointHighlightStroke: "rgba(41, 128, 185, 0)",
      data: [100, 70, 20, 100, 120, 50, 70, 50, 50, 100, 50, 90]
    },
    {
      label: "My Second dataset",
      fillColor: "rgba(155, 89, 182, 0.5)",
      strokeColor: "none",
      pointColor: "rgba(155, 89, 182, 0.9)",
      pointStrokeColor: "rgba(231, 76, 60, 255, 0)",
      pointHighlightFill: "rgba(155, 89, 182, 0.9)",
      pointHighlightStroke: "rgba(231, 76, 60, 0)",
      data: [28, 48, 40, 19, 86, 27, 20, 90, 50, 20, 90, 20]
    }
  ]
};

window.onload = function() {
  // var ctx1 = document.getElementById("myChart").getContext("2d");
  // window.myLine = new Chart(ctx1).Line(lineChartData, {
  //   responsive: true
  // });
  // window.myLine = new Chart(ctx1, {
  //   type: "radar",
  //   data: {
  //     labels: ["Running", "Swimming", "Eating", "Cycling"],
  //     datasets: [
  //       {
  //         data: [20, 10, 4, 2]
  //       }
  //     ],
  //     options: {
  //       responsive: true
  //     }
  //   }
  // });
};

Chart.defaults.global = {
  // Boolean - Whether to animate the chart
  animation: true,

  // Number - Number of animation steps
  animationSteps: 60,

  // String - Animation easing effect
  // Possible effects are:
  // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
  //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
  //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
  //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
  //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
  //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
  //  easeOutElastic, easeInCubic]
  animationEasing: "easeOutQuart",

  // Boolean - If we should show the scale at all
  showScale: false,

  // Boolean - If we want to override with a hard coded scale
  scaleOverride: false,

  // ** Required if scaleOverride is true **
  // Number - The number of steps in a hard coded scale
  scaleSteps: null,
  // Number - The value jump in the hard coded scale
  scaleStepWidth: null,
  // Number - The scale starting value
  scaleStartValue: null,

  // String - Colour of the scale line
  scaleLineColor: "rgba(0,0,0,.1)",

  // Number - Pixel width of the scale line
  scaleLineWidth: 1,

  // Boolean - Whether to show labels on the scale
  scaleShowLabels: true,

  // Interpolated JS string - can access value
  scaleLabel: "<%=value%>",

  // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
  scaleIntegersOnly: true,

  // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
  scaleBeginAtZero: false,

  // String - Scale label font declaration for the scale label
  scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

  // Number - Scale label font size in pixels
  scaleFontSize: 12,

  // String - Scale label font weight style
  scaleFontStyle: "normal",

  // String - Scale label font colour
  scaleFontColor: "#666",

  // Boolean - whether or not the chart should be responsive and resize when the browser does.
  responsive: false,

  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
  maintainAspectRatio: true,

  // Boolean - Determines whether to draw tooltips on the canvas or not
  showTooltips: true,

  // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
  customTooltips: false,

  // Array - Array of string names to attach tooltip events
  tooltipEvents: ["mousemove", "touchstart", "touchmove"],

  // String - Tooltip background colour
  tooltipFillColor: "rgba(0,0,0,0.8)",

  // String - Tooltip label font declaration for the scale label
  tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

  // Number - Tooltip label font size in pixels
  tooltipFontSize: 14,

  // String - Tooltip font weight style
  tooltipFontStyle: "normal",

  // String - Tooltip label font colour
  tooltipFontColor: "#fff",

  // String - Tooltip title font declaration for the scale label
  tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

  // Number - Tooltip title font size in pixels
  tooltipTitleFontSize: 14,

  // String - Tooltip title font weight style
  tooltipTitleFontStyle: "bold",

  // String - Tooltip title font colour
  tooltipTitleFontColor: "#fff",

  // Number - pixel width of padding around tooltip text
  tooltipYPadding: 6,

  // Number - pixel width of padding around tooltip text
  tooltipXPadding: 6,

  // Number - Size of the caret on the tooltip
  tooltipCaretSize: 8,

  // Number - Pixel radius of the tooltip border
  tooltipCornerRadius: 6,

  // Number - Pixel offset from point x to tooltip edge
  tooltipXOffset: 10,

  // String - Template string for single tooltips
  tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

  // String - Template string for multiple tooltips
  multiTooltipTemplate: "<%= value %>",

  // Function - Will fire on animation progression.
  onAnimationProgress: function() {},

  // Function - Will fire on animation completion.
  onAnimationComplete: function() {}
};

$(document).ready(function() {
  "use strict";

  var tooltip = {
    /**
     * Make a Tooltip
     **/

    make: function make(target, content) {
      var orientation =
        arguments.length <= 2 || arguments[2] === undefined
          ? "right"
          : arguments[2];
      var type =
        arguments.length <= 3 || arguments[3] === undefined
          ? "help"
          : arguments[3];

      return new Tooltip({
        target: document.querySelector(target),
        content: content,
        classes: "tooltip " + type + "-" + orientation,
        position: orientation + " middle"
      });
    },

    /**
     * Info Tooltip
     **/
    info: function info(t, c) {
      var o =
        arguments.length <= 2 || arguments[2] === undefined
          ? "right"
          : arguments[2];

      return this.make(t, c, o, "info");
    }
  };

  var input4Tooltip = tooltip.make(
    ".input1",
    "Amount you have to pay before insurance starts sharing the costs",
    "right",
    "info"
  );
  var input4Tooltip = tooltip.make(
    ".input2",
    "Amount you have to pay before an insurancecompany starts sharing the costs",
    "right",
    "info"
  );
  var input4Tooltip = tooltip.make(
    ".input3",
    "Amount you have to pay before an insurance company starts sharing the costs",
    "left",
    "info"
  );
  var input4Tooltip = tooltip.make(
    ".input4",
    "Amount you have to pay before an insurance company starts sharing the costs",
    "left",
    "info"
  );

  var router = new Navigo();

  router
    .on({
      "/sophia": function() {
        window.data = {
          bronze: "$85",
          silver: "$145",
          gold: "$235",
          platinum: "$355"
        };
        $("#bronze").text(window.data.bronze);
        $("#silver").text(window.data.silver);
        $("#gold").text(window.data.gold);
        $("#platinum").text(window.data.platinum);
        box.fadeToggle();

        $("#activePerson").text("Sophia Balfour");
        if (window.currentlySelected != null) {
          $(window.currentlySelected).toggle();
        }
        window.currentlySelected = "#sophia";
        $("#sophia").toggle();

        $(".bronze").css("zoom", 1.1);
        $(".silver").css("zoom", 1);
        $(".gold").css("zoom", 1);
        $(".platinum").css("zoom", 1);

        var chart = AmCharts.makeChart("chartdiv", {
          type: "radar",
          theme: "light",
          dataProvider: [
            {
              country: "Bronze",
              cost: 85,
              avg: 75.6
            },
            {
              country: "Silver",
              cost: 145,
              avg: 131.2
            },
            {
              country: "Gold",
              cost: 235,
              avg: 214.7
            },
            {
              country: "Platinum",
              cost: 35.5,
              avg: 32.6
            },
            {
              country: "Annual_Income",
              cost: 300,
              avg: 239.641
            },
            {
              country: "Health_Rating",
              cost: 70,
              avg: 60
            }
          ],
          valueAxes: [
            {
              axisTitleOffset: 20,
              minimum: 0,
              axisAlpha: 0.15
            },
            {
              id: "v2",
              axisTitleOffset: 20,
              minimum: 0,
              axisAlpha: 0,
              inside: true
            }
          ],
          startDuration: 2,
          graphs: [
            {
              balloonText: "User Data",
              bullet: "round",
              lineThickness: 2,
              valueField: "cost"
            },
            {
              balloonText: "Average User Data",
              bullet: "square",
              valueField: "avg"
            }
          ],
          categoryField: "country",
          export: {
            enabled: false
          }
        });
      },
      "/william": function() {
        window.data = {
          bronze: "$126",
          silver: "$186",
          gold: "$276",
          platinum: "$396"
        };
        $("#bronze").text(window.data.bronze);
        $("#silver").text(window.data.silver);
        $("#gold").text(window.data.gold);
        $("#platinum").text(window.data.platinum);
        box.fadeToggle();
        $("#activePerson").text("William Arida");
        if (window.currentlySelected != null) {
          $(window.currentlySelected).toggle();
        }
        window.currentlySelected = "#william";
        $("#william").toggle();

        $(".bronze").css("zoom", 1);
        $(".silver").css("zoom", 1);
        $(".gold").css("zoom", 1.1);
        $(".platinum").css("zoom", 1);

        var chart = AmCharts.makeChart("chartdiv", {
          type: "radar",
          theme: "light",
          dataProvider: [
            {
              country: "Bronze",
              cost: 126,
              avg: 75.6
            },
            {
              country: "Silver",
              cost: 186,
              avg: 131.2
            },
            {
              country: "Gold",
              cost: 276,
              avg: 214.7
            },
            {
              country: "Platinum",
              cost: 39.6,
              avg: 32.6
            },
            {
              country: "Annual_Income",
              cost: 300,
              avg: 239.641
            },
            {
              country: "Health_Rating",
              cost: 70,
              avg: 80
            }
          ],
          valueAxes: [
            {
              axisTitleOffset: 20,
              minimum: 0,
              axisAlpha: 0.15
            },
            {
              id: "v2",
              axisTitleOffset: 20,
              minimum: 0,
              axisAlpha: 0,
              inside: true
            }
          ],
          startDuration: 2,
          graphs: [
            {
              balloonText: "User Data",
              bullet: "round",
              lineThickness: 2,
              valueField: "cost"
            },
            {
              balloonText: "Average User Data",
              bullet: "square",
              valueField: "avg"
            }
          ],
          categoryField: "country",
          export: {
            enabled: false
          }
        });
      },
      "/jake": function() {
        window.data = {
          bronze: "$70",
          silver: "$130",
          gold: "$220",
          platinum: "$340"
        };

        $("#bronze").text(window.data.bronze);
        $("#silver").text(window.data.silver);
        $("#gold").text(window.data.gold);
        $("#platinum").text(window.data.platinum);
        box.fadeToggle();
        $("#activePerson").text("Jake Septimus");
        if (window.currentlySelected != null) {
          $(window.currentlySelected).toggle();
        }
        window.currentlySelected = "#jake";
        $("#jake").toggle();

        $(".bronze").css("zoom", 1.1);
        $(".silver").css("zoom", 1);
        $(".gold").css("zoom", 1);
        $(".platinum").css("zoom", 1);

        var chart = AmCharts.makeChart("chartdiv", {
          type: "radar",
          theme: "light",
          dataProvider: [
            {
              country: "Bronze",
              cost: 70,
              avg: 75.6
            },
            {
              country: "Silver",
              cost: 130,
              avg: 131.2
            },
            {
              country: "Gold",
              cost: 220,
              avg: 214.7
            },
            {
              country: "Platinum",
              cost: 34.3,
              avg: 32.6
            },
            {
              country: "Annual_Income",
              cost: 300,
              avg: 239.641
            },
            {
              country: "Health_Rating",
              cost: 40,
              avg: 60
            }
          ],
          valueAxes: [
            {
              axisTitleOffset: 20,
              minimum: 0,
              axisAlpha: 0.15
            },
            {
              id: "v2",
              axisTitleOffset: 20,
              minimum: 0,
              axisAlpha: 0,
              inside: true
            }
          ],
          startDuration: 2,
          graphs: [
            {
              balloonText: "User Data",
              bullet: "round",
              lineThickness: 2,
              valueField: "cost"
            },
            {
              balloonText: "Average User Data",
              bullet: "square",
              valueField: "avg"
            }
          ],
          categoryField: "country",
          export: {
            enabled: false
          }
        });
      },
      "/jenny": function() {
        window.data = {
          bronze: "$73",
          silver: "$133",
          gold: "$223",
          platinum: "$343"
        };

        $("#bronze").text(window.data.bronze);
        $("#silver").text(window.data.silver);
        $("#gold").text(window.data.gold);
        $("#platinum").text(window.data.platinum);
        box.fadeToggle();

        $(".bronze").css("zoom", 1);
        $(".silver").css("zoom", 1);
        $(".gold").css("zoom", 1.1);
        $(".platinum").css("zoom", 1);

        $("#activePerson").text("Jenny Xu");
        if (window.currentlySelected != null) {
          $(window.currentlySelected).toggle();
        }
        window.currentlySelected = "#jenny";
        $("#jenny").toggle();

        var chart = AmCharts.makeChart("chartdiv", {
          type: "radar",
          theme: "light",
          dataProvider: [
            {
              country: "Bronze",
              cost: 73,
              avg: 75.6
            },
            {
              country: "Silver",
              cost: 133,
              avg: 131.2
            },
            {
              country: "Gold",
              cost: 223,
              avg: 214.7
            },
            {
              country: "Platinum",
              cost: 34.3,
              avg: 32.6
            },
            {
              country: "Annual_Income",
              cost: 1000,
              avg: 239.641
            },
            {
              country: "Health_Rating",
              cost: 70,
              avg: 60
            }
          ],
          valueAxes: [
            {
              axisTitleOffset: 20,
              minimum: 0,
              axisAlpha: 0.15
            },
            {
              id: "v2",
              axisTitleOffset: 20,
              minimum: 0,
              axisAlpha: 0,
              inside: true
            }
          ],
          startDuration: 2,
          graphs: [
            {
              balloonText: "User Data",
              bullet: "round",
              lineThickness: 2,
              valueField: "cost"
            },
            {
              balloonText: "Average User Data",
              bullet: "square",
              valueField: "avg"
            }
          ],
          categoryField: "country",
          export: {
            enabled: false
          }
        });
      },
      "/": function() {
        window.data = {
          bronze: "$44",
          silver: "$66",
          gold: "$99",
          platinum: "$143"
        };

        $("#bronze").text(window.data.bronze);
        $("#silver").text(window.data.silver);
        $("#gold").text(window.data.gold);
        $("#platinum").text(window.data.platinum);

        if (!start) {
          box.fadeToggle();
        }
        start = 0;
        $("#activePerson").text("Yin Fong Wahlert");
        if (window.currentlySelected != null) {
          $(window.currentlySelected).toggle();
        }
        window.currentlySelected = "#yin";
        $("#yin").toggle();

        $(".bronze").css("zoom", 1);
        $(".silver").css("zoom", 1.1);
        $(".gold").css("zoom", 1);
        $(".platinum").css("zoom", 1);

        var chart = AmCharts.makeChart("chartdiv", {
          type: "radar",
          theme: "light",
          dataProvider: [
            {
              country: "Bronze",
              cost: 44,
              avg: 75.6
            },
            {
              country: "Silver",
              cost: 66,
              avg: 131.2
            },
            {
              country: "Gold",
              cost: 99,
              avg: 214.7
            },
            {
              country: "Platinum",
              cost: 14.3,
              avg: 32.6
            },
            {
              country: "Annual_Income",
              cost: 300,
              avg: 239.641
            },
            {
              country: "Health_Rating",
              cost: 70,
              avg: 70
            }
          ],
          valueAxes: [
            {
              axisTitleOffset: 20,
              minimum: 0,
              axisAlpha: 0.15
            },
            {
              id: "v2",
              axisTitleOffset: 20,
              minimum: 0,
              axisAlpha: 0,
              inside: true
            }
          ],
          startDuration: 2,
          graphs: [
            {
              balloonText: "User Data",
              bullet: "round",
              lineThickness: 2,
              valueField: "cost"
            },
            {
              balloonText: "Average User Data",
              bullet: "square",
              valueField: "avg"
            }
          ],
          categoryField: "country",
          export: {
            enabled: false
          }
        });
      }
    })
    .resolve();
});

$(".choose-button").on("click", function(e) {
  e.preventDefault();
  console.log("hello");
  window.location = "https://www.healthcare.gov/";
});
