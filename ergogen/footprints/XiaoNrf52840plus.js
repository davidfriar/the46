module.exports = {
  params: {
    designator: "U",
    side: "F",
    P1: { type: "net", value: "" },
    P10: { type: "net", value: "" },
    P11: { type: "net", value: "" },
    P12: { type: "net", value: "" },
    P13: { type: "net", value: "" },
    P14: { type: "net", value: "" },
    P15: { type: "net", value: "" },
    P16: { type: "net", value: "" },
    P17: { type: "net", value: "" },
    P18: { type: "net", value: "" },
    P19: { type: "net", value: "" },
    P2: { type: "net", value: "" },
    P20: { type: "net", value: "" },
    P21: { type: "net", value: "" },
    P22: { type: "net", value: "" },
    P23: { type: "net", value: "" },
    P24: { type: "net", value: "" },
    P25: { type: "net", value: "" },
    P26: { type: "net", value: "" },
    P27: { type: "net", value: "" },
    P3: { type: "net", value: "" },
    P32: { type: "net", value: "" },
    P33: { type: "net", value: "" },
    P4: { type: "net", value: "" },
    P5: { type: "net", value: "" },
    P6: { type: "net", value: "" },
    P7: { type: "net", value: "" },
    P8: { type: "net", value: "" },
    P9: { type: "net", value: "" },
  },
  body: (p) => {
    const fp = [];
    const flip = p.side === "B";
    if (!flip && p.side !== "F") throw new Error("unsupported side: " + p.side);

    fp.push(`(footprint "XIAO-nRF52840-Plus-SMD-updated"`);
    fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
    fp.push(`(layer "${flip ? "B.Cu" : "F.Cu"}")`);
    fp.push(
      `(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${p.side === "B" ? " (justify mirror)" : ""}))`,
    );
    fp.push(
      `(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${p.side === "B" ? " (justify mirror)" : ""}))`,
    );
    fp.push(
      `(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${p.side === "B" ? " (justify mirror)" : ""}))`,
    );
    fp.push(
      `(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${p.side === "B" ? " (justify mirror)" : ""}))`,
    );

    fp.push(`(attr smd)`);

    // Unknown to kicad2ergogen
    fp.push(`(embedded_fonts no)`);

    // Pads
    fp.push(
      `(pad "1" smd roundrect (at -7.255 ${flipN(flip, -6.62)} ${flipR(flip, p.r + 180)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P1})`,
    );
    fp.push(
      `(pad "2" smd roundrect (at -7.255 ${flipN(flip, -4.08)} ${flipR(flip, p.r + 180)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P2})`,
    );
    fp.push(
      `(pad "3" smd roundrect (at -7.255 ${flipN(flip, -1.54)} ${flipR(flip, p.r + 180)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P3})`,
    );
    fp.push(
      `(pad "4" smd roundrect (at -7.255 ${flipN(flip, 1)} ${flipR(flip, p.r + 180)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P4})`,
    );
    fp.push(
      `(pad "5" smd roundrect (at -7.255 ${flipN(flip, 3.54)} ${flipR(flip, p.r + 180)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P5})`,
    );
    fp.push(
      `(pad "6" smd roundrect (at -7.255 ${flipN(flip, 6.08)} ${flipR(flip, p.r + 180)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P6})`,
    );
    fp.push(
      `(pad "7" smd roundrect (at -7.255 ${flipN(flip, 8.62)} ${flipR(flip, p.r + 180)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P7})`,
    );
    fp.push(
      `(pad "8" smd roundrect (at 9.255 ${flipN(flip, 8.62)} ${flipR(flip, p.r + 0)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P8})`,
    );
    fp.push(
      `(pad "9" smd roundrect (at 9.255 ${flipN(flip, 6.08)} ${flipR(flip, p.r + 0)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P9})`,
    );
    fp.push(
      `(pad "10" smd roundrect (at 9.255 ${flipN(flip, 3.54)} ${flipR(flip, p.r + 0)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P10})`,
    );
    fp.push(
      `(pad "11" smd roundrect (at 9.255 ${flipN(flip, 1)} ${flipR(flip, p.r + 0)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P11})`,
    );
    fp.push(
      `(pad "12" smd roundrect (at 9.255 ${flipN(flip, -1.54)} ${flipR(flip, p.r + 0)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P12})`,
    );
    fp.push(
      `(pad "13" smd roundrect (at 9.255 ${flipN(flip, -4.08)} ${flipR(flip, p.r + 0)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P13})`,
    );
    fp.push(
      `(pad "14" smd roundrect (at 9.255 ${flipN(flip, -6.62)} ${flipR(flip, p.r + 0)}) (size 2.032 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P14})`,
    );
    fp.push(
      `(pad "15" smd roundrect (at -7.655 ${flipN(flip, -5.35)} ${flipR(flip, p.r + 180)}) (size 1.232 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P15})`,
    );
    fp.push(
      `(pad "16" smd roundrect (at -7.655 ${flipN(flip, -2.81)} ${flipR(flip, p.r + 180)}) (size 1.232 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P16})`,
    );
    fp.push(
      `(pad "17" smd roundrect (at -7.655 ${flipN(flip, -0.27)} ${flipR(flip, p.r + 180)}) (size 1.232 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P17})`,
    );
    fp.push(
      `(pad "18" smd roundrect (at -7.655 ${flipN(flip, 2.27)} ${flipR(flip, p.r + 180)}) (size 1.232 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P18})`,
    );
    fp.push(
      `(pad "19" smd roundrect (at -7.655 ${flipN(flip, 4.81)} ${flipR(flip, p.r + 180)}) (size 1.232 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P19})`,
    );
    fp.push(
      `(pad "20" smd roundrect (at -7.655 ${flipN(flip, 7.35)} ${flipR(flip, p.r + 180)}) (size 1.232 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P20})`,
    );
    fp.push(
      `(pad "21" smd roundrect (at 9.655 ${flipN(flip, 7.35)} ${flipR(flip, p.r + 0)}) (size 1.232 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P21})`,
    );
    fp.push(
      `(pad "22" smd roundrect (at 9.655 ${flipN(flip, 4.81)} ${flipR(flip, p.r + 0)}) (size 1.232 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P22})`,
    );
    fp.push(
      `(pad "23" smd roundrect (at 9.655 ${flipN(flip, 2.27)} ${flipR(flip, p.r + 0)}) (size 1.232 0.95) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P23})`,
    );
    fp.push(
      `(pad "24" smd circle (at -0.27 ${flipN(flip, -7.5725)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste")  ${p.P24})`,
    );
    fp.push(
      `(pad "25" smd circle (at 2.27 ${flipN(flip, -7.5725)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste")  ${p.P25})`,
    );
    fp.push(
      `(pad "26" smd circle (at -0.27 ${flipN(flip, -5.0325)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste")  ${p.P26})`,
    );
    fp.push(
      `(pad "27" smd circle (at 2.27 ${flipN(flip, -5.0325)} ${flipR(flip, p.r + 0)}) (size 1.7 1.7) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste")  ${p.P27})`,
    );
    fp.push(
      `(pad "32" smd roundrect (at 0.006012 ${flipN(flip, 6.517823)} ${flipR(flip, p.r + 270)}) (size 2.5 1.1) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P32})`,
    );
    fp.push(
      `(pad "33" smd roundrect (at 2.006012 ${flipN(flip, 6.517823)} ${flipR(flip, p.r + 270)}) (size 2.5 1.1) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P33})`,
    );

    // Drawings on User.1
    fp.push(
      `(fp_line (start -7.89 ${flipN(flip, 9.509)}) (end -7.89 ${flipN(flip, -7.636)}) (stroke (width 0.0254) (type solid)) (layer "User.1") )`,
    );
    fp.push(
      `(fp_line (start -4.045 ${flipN(flip, 11.304)}) (end 9.925 ${flipN(flip, 11.304)}) (stroke (width 0.0254) (type solid)) (layer "User.1") )`,
    );
    fp.push(
      `(fp_line (start 7.985 ${flipN(flip, -9.541)}) (end -5.985 ${flipN(flip, -9.541)}) (stroke (width 0.0254) (type solid)) (layer "User.1") )`,
    );
    fp.push(
      `(fp_line (start 9.89 ${flipN(flip, 9.509)}) (end 9.89 ${flipN(flip, -7.636)}) (stroke (width 0.0254) (type solid)) (layer "User.1") )`,
    );
    fp.push(
      `(fp_rect (start -0.87 ${flipN(flip, -11.175)}) (end 6.75 ${flipN(flip, -4.825)}) (stroke (width 0.0762) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_arc (start -7.89 ${flipN(flip, -7.636)}) (mid -7.332038 ${flipN(flip, -8.983038)}) (end -5.985 ${flipN(flip, -9.541)}) (stroke (width 0.0254) (type solid)) (layer "User.1") )`,
    );
    fp.push(
      `(fp_arc (start -5.985 ${flipN(flip, 11.414)}) (mid -7.332038 ${flipN(flip, 10.856038)}) (end -7.89 ${flipN(flip, 9.509)}) (stroke (width 0.0254) (type solid)) (layer "User.1") )`,
    );
    fp.push(
      `(fp_arc (start 7.985 ${flipN(flip, -9.541)}) (mid 9.332038 ${flipN(flip, -8.983038)}) (end 9.89 ${flipN(flip, -7.636)}) (stroke (width 0.0254) (type solid)) (layer "User.1") )`,
    );
    fp.push(
      `(fp_arc (start 9.89 ${flipN(flip, 9.509)}) (mid 9.332038 ${flipN(flip, 10.856038)}) (end 7.985 ${flipN(flip, 11.414)}) (stroke (width 0.0254) (type solid)) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -7.89 ${flipN(flip, -6.62)}) (end -7.89 ${flipN(flip, -6.747)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -7.89 ${flipN(flip, -4.08)}) (end -7.89 ${flipN(flip, -4.207)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -7.89 ${flipN(flip, -1.54)}) (end -7.89 ${flipN(flip, -1.667)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -7.89 ${flipN(flip, 1)}) (end -7.89 ${flipN(flip, 0.873)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -7.89 ${flipN(flip, 3.54)}) (end -7.89 ${flipN(flip, 3.413)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -7.89 ${flipN(flip, 6.08)}) (end -7.89 ${flipN(flip, 5.953)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -7.89 ${flipN(flip, 8.62)}) (end -7.89 ${flipN(flip, 8.493)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -6.62 ${flipN(flip, -6.62)}) (end -6.62 ${flipN(flip, -6.747)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -6.62 ${flipN(flip, -4.08)}) (end -6.62 ${flipN(flip, -4.207)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -6.62 ${flipN(flip, -1.54)}) (end -6.62 ${flipN(flip, -1.667)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -6.62 ${flipN(flip, 1)}) (end -6.62 ${flipN(flip, 0.873)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -6.62 ${flipN(flip, 3.54)}) (end -6.62 ${flipN(flip, 3.413)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -6.62 ${flipN(flip, 6.08)}) (end -6.62 ${flipN(flip, 5.953)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center -6.62 ${flipN(flip, 8.62)}) (end -6.62 ${flipN(flip, 8.493)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 8.62 ${flipN(flip, -6.62)}) (end 8.62 ${flipN(flip, -6.747)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 8.62 ${flipN(flip, -4.08)}) (end 8.62 ${flipN(flip, -4.207)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 8.62 ${flipN(flip, -1.54)}) (end 8.62 ${flipN(flip, -1.667)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 8.62 ${flipN(flip, 1)}) (end 8.62 ${flipN(flip, 0.873)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 8.62 ${flipN(flip, 3.54)}) (end 8.62 ${flipN(flip, 3.413)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 8.62 ${flipN(flip, 6.08)}) (end 8.62 ${flipN(flip, 5.953)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 8.62 ${flipN(flip, 8.62)}) (end 8.62 ${flipN(flip, 8.493)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 9.89 ${flipN(flip, -6.62)}) (end 9.89 ${flipN(flip, -6.747)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 9.89 ${flipN(flip, -4.08)}) (end 9.89 ${flipN(flip, -4.207)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 9.89 ${flipN(flip, -1.54)}) (end 9.89 ${flipN(flip, -1.667)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 9.89 ${flipN(flip, 1)}) (end 9.89 ${flipN(flip, 0.873)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 9.89 ${flipN(flip, 3.54)}) (end 9.89 ${flipN(flip, 3.413)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 9.89 ${flipN(flip, 6.08)}) (end 9.89 ${flipN(flip, 5.953)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );
    fp.push(
      `(fp_circle (center 9.89 ${flipN(flip, 8.62)}) (end 9.89 ${flipN(flip, 8.493)}) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`,
    );

    // Drawings on F.CrtYd
    fp.push(
      `(fp_rect (start -5.96 ${flipN(flip, -9.66)}) (end 11.84 ${flipN(flip, 11.29)}) (stroke (width 0.05) (type default)) (fill no) (layer "${flip ? "B.CrtYd" : "F.CrtYd"}") )`,
    );

    // Drawings on F.Fab
    fp.push(
      `(fp_rect (start -5.96 ${flipN(flip, -9.66)}) (end 11.84 ${flipN(flip, 11.29)}) (stroke (width 0.1) (type default)) (fill no) (layer "${flip ? "B.Fab" : "F.Fab"}") )`,
    );

    // Drawings on F.SilkS
    fp.push(
      `(fp_line (start -7.89 ${flipN(flip, 9.509)}) (end -7.89 ${flipN(flip, -7.636)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start -4.045 ${flipN(flip, 11.304)}) (end 9.925 ${flipN(flip, 11.304)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start -3.495 ${flipN(flip, -9.541)}) (end -3.491272 ${flipN(flip, -10.551272)}) (stroke (width 0.127) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start -2.991272 ${flipN(flip, -11.051)}) (end 5.004 ${flipN(flip, -11.051)}) (stroke (width 0.127) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start 5.504 ${flipN(flip, -10.551)}) (end 5.504 ${flipN(flip, -9.541)}) (stroke (width 0.127) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start 7.985 ${flipN(flip, -9.541)}) (end -5.985 ${flipN(flip, -9.541)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start 9.89 ${flipN(flip, 9.509)}) (end 9.89 ${flipN(flip, -7.636)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_arc (start -7.89 ${flipN(flip, -7.64)}) (mid -7.332038 ${flipN(flip, -8.987038)}) (end -5.985 ${flipN(flip, -9.545)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_arc (start -5.985 ${flipN(flip, 11.414)}) (mid -7.332038 ${flipN(flip, 10.856038)}) (end -7.89 ${flipN(flip, 9.509)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_arc (start -3.491272 ${flipN(flip, -10.551272)}) (mid -3.344724 ${flipN(flip, -10.904644)}) (end -2.991272 ${flipN(flip, -11.051)}) (stroke (width 0.127) (type default)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_arc (start 5.004 ${flipN(flip, -11.051)}) (mid 5.357524 ${flipN(flip, -10.904524)}) (end 5.504 ${flipN(flip, -10.551)}) (stroke (width 0.127) (type default)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_arc (start 7.985 ${flipN(flip, -9.541)}) (mid 9.332024 ${flipN(flip, -8.983024)}) (end 9.89 ${flipN(flip, -7.636)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_arc (start 9.89 ${flipN(flip, 9.509)}) (mid 9.332038 ${flipN(flip, 10.856038)}) (end 7.985 ${flipN(flip, 11.414)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_circle (center -8.1 ${flipN(flip, -9.125)}) (end -8.1 ${flipN(flip, -9.379)}) (stroke (width 0.5) (type solid)) (fill yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_circle (center -6.826 ${flipN(flip, -8.408)}) (end -6.826 ${flipN(flip, -8.662)}) (stroke (width 0.5) (type solid)) (fill yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_text user "GND" (at 1.25 ${flipN(flip, -3.25)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D5" (at -6 ${flipN(flip, 6.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D13" (at -6 ${flipN(flip, 0.25)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D15" (at -6 ${flipN(flip, 5.25)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D6" (at -6 ${flipN(flip, 9)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D17" (at 7.94 ${flipN(flip, 7.64)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify right bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "CLK" (at 1.25 ${flipN(flip, -8.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D14" (at -6 ${flipN(flip, 2.75)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "BAT" (at 0.25 ${flipN(flip, 4.75)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "GND" (at 7.94 ${flipN(flip, -3.61)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify right bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "DIO" (at -1 ${flipN(flip, -8.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D7" (at 7.94 ${flipN(flip, 8.89)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify right bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "-" (at 1.5 ${flipN(flip, 8.75)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D3" (at -6 ${flipN(flip, 1.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "5V" (at 7.94 ${flipN(flip, -6.11)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify right bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D9" (at 7.94 ${flipN(flip, 3.89)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify right bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D16" (at -6 ${flipN(flip, 7.75)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "RST" (at -1.25 ${flipN(flip, -3.25)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D0" (at -6 ${flipN(flip, -6)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D12" (at -6 ${flipN(flip, -2.25)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D1" (at -6 ${flipN(flip, -3.5)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "+" (at -0.5 ${flipN(flip, 8.75)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D18" (at 7.94 ${flipN(flip, 5.14)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify right bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D11" (at -6 ${flipN(flip, -4.75)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D4" (at -6 ${flipN(flip, 4)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D8" (at 7.94 ${flipN(flip, 6.39)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify right bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D10" (at 7.94 ${flipN(flip, 1.39)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify right bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D2" (at -6 ${flipN(flip, -1)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify left bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "3V3" (at 7.94 ${flipN(flip, -1.11)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify right bottom${flip ? " mirror" : ""})))`,
    );
    fp.push(
      `(fp_text user "D19" (at 7.94 ${flipN(flip, 2.64)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1)) (justify right bottom${flip ? " mirror" : ""})))`,
    );

    // 3D Models
    fp.push(
      `(model "\${ERGOGEN_MODELS}/XiaoNrf52840plus.step" (offset (xyz 7.1 -2.596 0.2)) (scale (xyz 1 1 1)) (rotate (xyz 90 0 90)))`,
    );

    // Properties
    fp.push(
      `(property "Reference" "${p.ref}" (at 0.925 ${flipN(flip, -10.225)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${flip ? "B.SilkS" : "F.SilkS"}")  (effects (font (size 0.635 0.635) (thickness 0.1016)) (justify${flip ? " mirror" : ""})))`,
    );
    // fp.push(`(property "Value" "XIAO-nRF52840-Plus-SMD" (at 2.44 ${flipN(flip, 9.89)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 0.635 0.635) (thickness 0.1016)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(")");
    return fp.join("\n");
  },
};
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) {
  return normalizeAngle(flip ? 180 - r : r);
}
function flipN(flip, n) {
  return flip ? -n : n;
}
