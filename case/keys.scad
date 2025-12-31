include <BOSL2/fnliterals.scad>


key_offset_x = 137.82 + 0.25;
key_offset_y = 107.19 + 0.25;

_key_points=[["outerleft_bottom","bottom",91.5,-126.25,90,["large","left"]],["outerleft_middle","middle",91,-104.25,0,["left"]],["outerleft_top","top",91,-87.25,0,[]],["outerright_bottom","bottom",91,-131.25,180,["right"]],["outerright_middle","middle",91.5,-109.25,90,["large","right"]],["pinky_thumb","thumb",109,-136.125,0,[]],["pinky_bottom","bottom",109,-119.125,0,[]],["pinky_middle","middle",109,-102.125,0,[]],["pinky_top","top",109,-85.125,0,[]],["ring_thumb","thumb",127,-127.625,0,[]],["ring_bottom","bottom",127,-110.625,0,[]],["ring_middle","middle",127,-93.625,0,[]],["ring_top","top",127,-76.625,0,[]],["middle_thumb","thumb",145,-125.5,0,[]],["middle_bottom","bottom",145,-108.5,0,[]],["middle_middle","middle",145,-91.5,0,[]],["middle_top","top",145,-74.5,0,[]],["index_thumb","thumb",163,-129.75,0,[]],["index_bottom","bottom",163,-112.75,0,[]],["index_middle","middle",163,-95.75,0,[]],["index_top","top",163,-78.75,0,[]],["inner_thumb","thumb",182.2670727,-137.3008373,-24,[]],["inner_bottom","bottom",181,-117,0,[]],["inner_middle","middle",181,-100,0,[]],["inner_top","top",181,-83,0,[]]];


matches_large = function(x) x == "large";
is_large = function(x) len(filter(matches_large, x[5]))>0;

key_to_obj = function(key) object(name=key[0], row=key[1], x=key[2], y=key[3], rotation=key[4], tags=key[5], large = is_large(key));

matches_right = function(x) x=="right";
not_right = function(x) len(filter(matches_right, x[5])) == 0;  
_left_key_points = map(key_to_obj,filter(not_right, _key_points));

matches_left = function(x) x=="left";
not_left = function(x) len(filter(matches_left, x[5])) == 0;  
_right_key_points = map(key_to_obj,filter(not_left, _key_points));



key_points = function(side) side=="left" ? _left_key_points : _right_key_points ; 

all_keys = map(key_to_obj, _key_points);

function translate_key(key) =
  object(key, x=key.x - key_offset_x, y= key.y + key_offset_y);
  

function find_key_by_name(name) =
  let (pred = function(key) key.name == name)
  let (keys = key_points($side))
  translate_key(keys[find_first(pred, keys)]);


module position_at_key(name){
  key = find_key_by_name(name);
  translate(v = [key.x, key.y ,0]) children();
}
