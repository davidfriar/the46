// clang-format off
include<BOSL2/std.scad>;
include <BOSL2/fnliterals.scad>;
include <BOSL2/rounding.scad>;
include <BOSL2/geometry.scad>;
include <BOSL2/shapes2d.scad>;
include <keys.scad>
// clang-format on

$fn = 32;

$side = "left"; 
pcb_thickness=1.6;
plate_thickness = 1.2;
plate_width=116.266;
plate_height=87.047;
plate_gap = 2.2-plate_thickness;   // between the bottom of the plate and the top of the pcb
keycap_gap = 4.4; // gap between top of plate and bottom of keycap
kx = 18;
ky = 17;
pcb_hole_depth = 4;
infinitesmal = 0.0001;

gasket_width = 3.5;
gasket_thickness = 2; // gasket thickness when compressed


tilt= 4.5;

base_padding=2;
base_width=plate_width + 2 * base_padding;
base_height=plate_height + 2 * base_padding;
base_min_thickness = 6;
base_max_thickness = base_min_thickness + sin(tilt) * base_height;
base_top = [0,0,(base_max_thickness + base_min_thickness) / 2] ;


daughterboard_width=29.2;
daughterboard_height=20;
daughterboard_elevation = 3.5;
daughterboard_position = [0, base_height/2 -daughterboard_width/2 - 0.5,daughterboard_elevation]; 
daughterboard_clearance = 0.5;
reset_button_position = [daughterboard_position.x - 0.5, daughterboard_position.y - 10.5];

lid_wall_thickness=2;
lid_ceiling_thickness=2.5;
lid_clearance=0.25;
lid_width=base_width + 2 * (lid_wall_thickness+lid_clearance);
lid_height=base_height + 2 * (lid_wall_thickness+lid_clearance);
lid_min_thickness = 13; // to do : work this out properly 
lid_max_thickness = base_min_thickness + sin(tilt) * lid_height;
lid_top = up(lid_ceiling_thickness+plate_thickness + 2*gasket_thickness, base_top); 

screw_hole_diameter = 2.4;
screw_hole_countersink_diameter = 4;
screw_hole_countersink_depth = 2;
screw_hole_positions = [
  [-(base_width/2)+9, (base_height/2)-9],
  [(base_width/2)-12, (base_height/2)-6],
  [(base_width/2)-27, -(base_height/2)+4.5],
  [ -(base_width/2)+13.5, -(base_height/2)+6],
];

insert_hole_diameter = 3.2;
insert_hole_depth = 4.25;
insert_hole_mount_diameter = insert_hole_diameter + 3.5;

usb_hole_radius = 1.6;
usb_hole_width = 9;
usb_hole_clearance = 0.25;
usb_hole_position = [0, lid_height/2-0.1 , 7.8];

display_size = [32, 14, 0.75];
screen_size = [25.3, 10.8, 0.01];
screen_offset = 1.65;

function display_position() = 
  let (x = $side == "left" ? -30 : 30)
  [x, lid_height/2 - 1, 8];


function battery_position() = 
  let (x = $side == "left" ?27 : -27)
  [x,30, 1];

// magsafe_ring();
lid();
base();
// color("red") move(battery_position()) battery();
// lid();
// move(display_position())displayboard();
// up(lid_top.z - lid_wall_thickness) xrot(tilt)  mounted_plate();

// move([30, 25, 1 ]) battery();

// lid();
// move(display_position)displayboard();

module all() {
  left(100) left_case();
  right(100) right_case();
}


module left_case() {
  $side = "left";
  case();
}

module right_case() {
  $side = "right";
  case();
}

module case() {
}

module lid(){
  path =  path3d(offset(base2d_path(), delta=lid_clearance+lid_wall_thickness));
  bottom_path = yscale(cos(tilt),path);
  top_path = up(lid_top.z, xrot(tilt, path)); 
  difference(){
    rounded_prism(bottom_path, top_path, joint_top=8, joint_bot=2);
    down(infinitesmal) lid_inside();
    up(lid_top.z - lid_wall_thickness) xrot(tilt) keyboard_hole();
    move(usb_hole_position) usb_hole();
    move([0, usb_hole_position.y, 0]) usb_cutout();
    move(display_position()) back(1)  display_hole();
  }
  insert_hole_mounts();
  move(display_position())display_clip();

}

module lid_inside(){
  path =  path3d(offset(base2d_path(), delta=lid_clearance));
  bottom_path = yscale(cos(tilt),path);
  top_path = up(lid_top.z - lid_wall_thickness, xrot(tilt, path)); 
  rounded_prism(bottom_path, top_path, joint_top=4);
}

module keyboard_hole(){
  up(3-infinitesmal)linear_extrude(height = 6, center = true){
    fillet(1){
      for(key = key_points($side)){
          mirror_if_right() back(key.y+key_offset_y) right(key.x-key_offset_x) zrot(key.rotation) {
            w = key.large ? 1.5*kx + 2 : kx + 2;
            h = ky+2;
            rect([w, h]);
            if(key.name == "index_thumb"){// patch the hole left by rotated thumb
              right(kx/2) rect([w,h]); 
            }
          }
      }
    }
  }
}

module insert_hole_mounts(){
  half_of(v = xrot(tilt, DOWN), cp = down(1, lid_top), s=200)
    mirror_if_right()
      up(base_min_thickness)
        move_copies(screw_hole_positions) 
          insert_hole_mount();
}

module insert_hole_mount() {
  diff(){
  cylinder(h = 20, d = insert_hole_mount_diameter);
  tag("remove") down(infinitesmal)insert_hole();
  }
}

module insert_hole() {
  cylinder(h = insert_hole_depth, d = insert_hole_diameter);
}

module fillet(size) {
    $fn = 32;
    offset(r = size) offset(delta = -size) offset(r = -size)
        offset(delta = size) children();
  }


module base(){
  path=path3d(base2d_path());
  bottom_path = yscale(cos(tilt), path);
  top_path = up(base_top.z, xrot(tilt,path));
  diff()
    rounded_prism(bottom_path, top_path) {
      // attach("top", BOTTOM)
      //   mounted_plate(); 
      attach("top", TOP, overlap=-infinitesmal){
          force_tag("remove") pcb_hole();
      }

    tag("remove") move(battery_position()) battery_hole();
    tag("remove") move(display_position()) base_display_hole();
    translate(daughterboard_position) {
      tag("remove") daughterboard_hole();
      tag("keep")   daughterboard_lip();
      daughterboard();
    } 
    translate(reset_button_position) tag("remove") reset_button_hole();
    
    up(lid_top.z - lid_wall_thickness) xrot(tilt)  mounted_plate();

    tag("remove") screw_holes(); 
    tag("keep") move([0, usb_hole_position.y - 0.1, 0]) usb_support();
    tag("remove") magsafe_ring(); 
  } 
}


module mounted_plate(anchor=BOTTOM, spin){
     down(gasket_thickness) gaskets();
      down(gasket_thickness + plate_thickness) plate();
     down(gasket_thickness * 2 + plate_thickness) gaskets();
}

module screw_holes(){
  mirror_if_right(){
    move_copies(screw_hole_positions) screw_hole();
  }
}

module screw_hole(){
  down(infinitesmal){
    cylinder(h=100, d=screw_hole_diameter);
    cylinder(h=screw_hole_countersink_depth, d=screw_hole_countersink_diameter);
    up(base_min_thickness) cylinder(h=100, d=insert_hole_mount_diameter + 1);
  }
}

module pcb_hole(){
  mirror_if_right()
    down(pcb_hole_depth) 
      linear_extrude(height = pcb_hole_depth)  
          offset(r =-1)
          plate_outline2d(); 
}

module daughterboard_hole(anchor=BOTTOM, spin, orient){
    extra = 20;
    size = [daughterboard_height + daughterboard_clearance, daughterboard_width+extra, 20];
    back(extra/2) attachable(anchor, spin, orient, size=size){
      cuboid(size,  edges=[FRONT+LEFT, FRONT+RIGHT], rounding = 2)
        position(FRONT) up(1.6) cable_hole();
      children();  
    }
}

module cable_hole(){
  cuboid([daughterboard_height + daughterboard_clearance, 5, 20], edges=[FRONT+LEFT, FRONT+RIGHT], rounding = 2);
}

module daughterboard_lip(){
  move([daughterboard_height* 3/8-1, -(daughterboard_width/2 + 1), pcb_thickness])
    cuboid([daughterboard_width/4-1, 4, 1], anchor=BOTTOM, rounding=1, except=[BOTTOM, FRONT]);
}

module battery(){
  color("red") cuboid([33, 17, 6.5], anchor=BOTTOM );
}

module battery_hole(){
  except = $side=="left" ? [TOP, LEFT] : [TOP, RIGHT];
  cuboid([35, 18, 8], anchor=BOTTOM, rounding=1, except=except );
}

module usb_hole() {
  radius = usb_hole_radius;
  width = usb_hole_width;
  clearance = usb_hole_clearance;
  c1 = left(width / 2 - radius, circle(r = radius + clearance));
  c2 = right(width / 2 - radius, circle(r = radius + clearance));
  points = concat(c1, c2);
  hull = hull(points);
  path = [for (i = hull) points[i]];
  height = lid_wall_thickness + lid_clearance + 0.2;
    xrot(-90)
      down(height)
      offset_sweep(path = path, height = height,
               top = os_circle(r = -0.5), steps = 8);
}

module usb_cutout() {
  cuboid([usb_hole_width+6, lid_wall_thickness + lid_clearance, usb_hole_position.z ], anchor=BOTTOM+BACK, edges=[TOP+RIGHT, TOP+LEFT], rounding =2);
}


module usb_support() {
  clearance = 0;
  depth = lid_wall_thickness+lid_clearance;
  height = usb_hole_position.z;
  width =  usb_hole_width+6-clearance;

  rect = rect([2 * depth , height]);
  path = round_corners(path = rect, method = "smooth",  joint = [2,0,0,0]);
  difference(){
    fwd(depth - 0.03) left(width/2) up(height/2) back_half() xrot(90) yrot(90){
      back_half() cuboid([2*depth,  height, width], anchor=BOTTOM, rounding=2, edges=[TOP+BACK, BOTTOM+BACK] );
      front_half() linear_sweep(region = path, height = width , anchor = BOTTOM);

    }
    up(usb_hole_position.z) back(0.1) usb_hole();
  }
}

module reset_button_hole(){
  down(infinitesmal){
      cylinder(d = 4.5, h = 10, anchor = BOTTOM);
      up(3.5)cuboid([ 8, 8, 4 ], rounding = 1);
  }
}

module gaskets() {

  offsetx = kx/2 + 1 + gasket_width/2;
  offsety = ky/2 + 1 + gasket_width/2;

  positions = [
    [
      ["outerleft_top", -offsetx, ky/2],
      ["outerleft_bottom", -offsetx, -ky*1.5/2]
    ],
    [
      ["pinky_thumb", -kx/2, -offsety],
      ["pinky_thumb", kx/2, - offsety]
    ],
    [
      ["pinky_top", -kx/2, offsety],
      ["pinky_top", kx/2,  offsety]
    ],
    [
      ["index_top", -kx/2, offsety],
      ["index_top", kx/2,  offsety]
    ],
    [
      ["inner_top", offsetx, ky/2],
      ["inner_bottom", offsetx,  -ky/2]
    ],
    [
      ["inner_thumb", -kx/2, -offsety],
      ["inner_thumb", kx/2, - offsety]
    ],
    [
      ["inner_thumb", offsetx, ky/2],
      ["inner_thumb", offsetx, -ky/2]
    ],
  ];

  function to_point(p) = 
    let (key = find_key_by_name(p[0], all=true))
    let (point =  [key.x, key.y])
    let (rotation = key.rotation == 90 ? 0 : key.rotation)
    let (shift = is_def(key) ? zrot(rotation, [p[1], p[2]]): key)
    move(shift, point);

  for(position = positions){
    from = to_point(position[0]);
    to = to_point(position[1]);
    mirror_if_right()  gasket(from, to);
  }



}

module gasket(from, to){
  color("blue") linear_extrude(height = gasket_thickness) hull(){
    translate(from) circle(d=gasket_width);
    translate(to) circle(d=gasket_width);
  }
}




module base2d(){
 polygon(base2d_path());
}

function base2d_path() = 
  let (
    w=base_width/2, 
    h = base_height/2, 
    path = [
       [-w, h],
       [w, h],
       [w, -h],
       [-w, -h]
    ] 
  )
  round_corners(path ,  method = "smooth", cut = 6);





module mirror_if_right(){
  if($side=="left"){
    children();
  }
  else{
    zflip() yrot(180) children();
  }
}


module mainboard() {
     mirror_if_right() left(0.25) back(0.25) import("models/mainboard.stl"); 
     up(pcb_thickness) switches();
} 





module daughterboard() {

  zrot(-90) import("models/daughterboard-noJST.stl"); 
}

module daughterboard_outline(){

}

module plate( anchor=CENTER,spin=0,orient=UP){
  // attachable(anchor = anchor, spin = spin, orient = orient){
    mirror_if_right() linear_extrude(height = plate_thickness, center = false) plate2d(); 
    down(plate_gap+pcb_thickness){
      mainboard();
    }
  //
  // }
}

module displayboard() {
  xrot(-90){
    recolor("grey") cuboid(display_size, anchor=TOP)
      attach(TOP, BOTTOM) left(screen_offset) recolor("black")cuboid(screen_size);
      down(1 + display_size.z) import("models/displayboard.stl");
  }
}

module display_hole(){
  clearance = 0.5;
  xrot(-90){
    left(screen_offset) rounded_prism(rect([screen_size.x, screen_size.y]), height= lid_wall_thickness + infinitesmal, anchor=TOP, joint_top=-1, joint_sides=1, joint_bot=0);
    right(1) down(lid_wall_thickness-1) cuboid([display_size.x+clearance + 2, display_size.y+clearance, 5], anchor=TOP, rounding = 1, except=[TOP, BOTTOM]);
  }

}

module base_display_hole(){
  width = display_size.x + 2.5;
  right(1) {
    cuboid([width, 4.5, 14] , anchor=BACK, rounding = 1);
  }
  offset3d(r = 0.25) display_clip(); 
}

module display_clip(){
    fwd(3) cuboid([8, 2,14.5 ], anchor=BACK, rounding=1, except=TOP);
    fwd(1) up(9.25) cuboid([8, 4,4 ], anchor=BACK, rounding=1, except=[BOTTOM, BACK]);
}

module switches() {
  for(key = key_points($side)){
      mirror_if_right() back(key.y+key_offset_y) right(key.x-key_offset_x) zrot(key.rotation) {
          switch();
          up(keycap_gap+plate_thickness+plate_gap) keycap(key);
      }
  }
}

module keycap(key){
  if(key.large){
    zrot(90)
    if($side=="left"){
      import("models/chicagoSteno/cs_t_15_l.stl");
    }
    else {
      import("models/chicagoSteno/cs_t_15_r.stl");
    }
  }
  else{
    if(key.row=="top"){
      import("models/chicagoSteno/cs_r2_1.stl");
    }
    else if(key.row=="middle"||key.row == "thumb"){
      import("models/chicagoSteno/cs_r3_1.stl");
    }
    else if(key.row=="bottom" ){
      zrot(180) import("models/chicagoSteno/cs_r2_1.stl");
    }


  }
}

module screen_hole(){
  h=10.8;
  w=25.3;
  d=5;

  cuboid(size = [w, h, d ], rounding=1);

}

module switch(){
  import("models/switch.stl"); 
}


module plate2d(){
  left(plate_width/2) fwd(plate_height/2) import("models/plate.svg");

}


module plate_outline2d(){
  left(plate_width/2) fwd(plate_height/2) import("models/plate_outline.svg");
}

module magsafe_ring(){
  inwards(kx) fwd(ky*3/8) down(infinitesmal) linear_extrude(height = 0.5) difference(){
    circle(d=58);
    circle(d=44.5);

  }

  }



function is_left() =  let (side = $side) side=="left";


module inwards(x) {
  if ($side == "left") {
    right(x) children();
  } else {
    left(x) children();
  }
}

module outwards(x) {
  if ($side == "left") {
    left(x) children();
  } else {
    right(x) children();
  }
}
