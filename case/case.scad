// clang-format off
include<BOSL2/std.scad>;
include <BOSL2/fnliterals.scad>;
include <BOSL2/rounding.scad>;
include <BOSL2/geometry.scad>;
// clang-format on

// all();
pcb();

module all() {
  left(100) left_case();
  right(100) right_case();
}


module left_case() {
  $side = "left";
  pcb();
}

module right_case() {
  $side = "right";
  pcb();
}


module pcb() {
  import(pcb_stl());
  // *up(keycap_height) keycaps();
}


function is_left() =  let (side = $side) side=="left";
function pcb_stl() = is_left()? "pcbs/left_pcb.stl" : "pcbs/right_pcb.stl";
