// javascript for George's pixel art maker

// on click of a cell change it to set colour
$("td").on("click", function() {
  if (dropper === true){
    selColor = $(this).css("background-color");
    dropper = false;
  } else {
	  $(this).css("background-color", selColor);
  }
});

// set colours and the rgb string for style
var selRed = 0
var selGreen = 0;
var selBlue = 0;
var selColor = "rgb(" + selRed + ", " + selGreen + ", " + selBlue + ")";

// changes color variables when form is changed
$(".red-num").on("change", function() {
  selRed = $(this).val();
});
$(".blue-num").on("change", function() {
  selBlue = $(this).val();
});
$(".green-num").on("change", function() {
  selGreen = $(this).val();
});
$(".colorForm").on("change", "input", function() {
  selColor = "rgb(" + selRed + ", " + selGreen + ", " + selBlue + ")";
  $(".colorShow").css("background-color", selColor);
});

// eye dropper tool
var dropper = false;
$(".dropper").on("click", function() {
  dropper = true;
  event.preventDefault();
	$(".popup-text-col").removeClass("popup-text-vis");
})

// make grid to specifications
var gridWidth = 10;
var gridHeight = 10;

$(".go").on("click", function(event) {
  $(".grid").html("");
  event.preventDefault();
  
  gridHeight = $('input[name="height"]').val();
  gridWidth = $("input[name='width']").val();
  
  for (var j = 0; j < gridHeight; ++j) {
    $(".grid").append("<tr></tr>");
  }
  for (var i = 0; i < gridWidth; ++i) {
    $(".grid").children("tr").each(function() {
      $(this).append("<td> </td>");
      $("td").each(function() {
        $(this).css("height", cellStr);
        $(this).css("width", cellStr);
      })
    })
  }
  // reapplies this so works on new cells
  $("td").on("click", function() {
	$(this).css("background-color", selColor);
});
})
;

// clear grid button
$(".clearGrid").on("click", function(event) {
  event.preventDefault();
  $("td").css("background-color", "white");
  });
  
// set cell size
var cellSize = 7;
var cellStr = cellSize + "vmin";

$(".cell-size").on("change", function() {
	cellSize = $(this).val();
	cellStr = cellSize +"vmin";
  $(".example").css("width", cellStr);
  $(".example").css("height", cellStr);
});

$(".set-cell").on("click", function() {
  $(".popup-text-cell").removeClass("popup-text-vis");
  $("td").each(function() {
      $(this).css("height", cellStr);
      $(this).css("width", cellStr);
  })
});

// open popup to choose cell size
$(".popup-button-cell").on("click", function(event) {
	event.preventDefault();
	$(".popup-text-cell").addClass("popup-text-vis");
});
// open popup to choose colour
$(".popup-button-col").on("click", function(event) {
	event.preventDefault();
	$(".popup-text-col").addClass("popup-text-vis");
});

// close overlay with X click
$(".close").on("click", function(event) {
	event.preventDefault();
	$(".popup-text-col").removeClass("popup-text-vis");
  $(".popup-text-cell").removeClass("popup-text-vis");
});