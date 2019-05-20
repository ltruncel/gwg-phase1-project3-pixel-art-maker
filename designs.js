function makeGrid(width, height) {
  let pixelCanvas, grid;
  pixelCanvas = $("#pixel_canvas");
  if (pixelCanvas.children().length) {
    pixelCanvas.empty();
  }
  for (let i = 0; i < height; i++) {
    grid += "<tr>";
    for (let j = 0; j < width; j++) {
      grid += "<td></td>";
    }
    grid += "</tr>";
  }
  pixelCanvas.html(grid);
  pixelCanvas.css("background-color", "#ffffff");
}

$(document).ready(function() {
  $("#submit-button").click(function(event) {
    let height, width;
    width = $("#input_width").val();
    height = $("#input_height").val();
    event.preventDefault();
    makeGrid(width, height);
  });

  $("#pixel_canvas").on('click', 'td', function() {
    let colorPicker = $("#colorPicker").val();
    $(this).css("background-color", colorPicker);
  });
});
//Thanks to fellow Grow With Google scholar Jason White (@jasonmichaelwhite) for pointing out a glitch in my initial iteration (https://codepen.io/ltruncel/pen/WzgVmr) where an accidental click + hold + drag results in a solid fill of selected color over the entire grid. I appreciate his suggestion of using .on("click"...) method as a potential solution.)
//Thanks to fellow Grow With Google scholar and my mentor Julian Johannesen (@Julian) who also noticed such an issue and suggested using .on("click"...) as a potential solution.)
