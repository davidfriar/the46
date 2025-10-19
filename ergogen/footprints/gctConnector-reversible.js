module.exports = {
  params: {
    designator: "J",
    side: "F",
    P1: { type: "net", value: "" },
    P10: { type: "net", value: "" },
    P11: { type: "net", value: "" },
    P12: { type: "net", value: "" },
    P2: { type: "net", value: "" },
    P3: { type: "net", value: "" },
    P4: { type: "net", value: "" },
    P5: { type: "net", value: "" },
    P6: { type: "net", value: "" },
    P7: { type: "net", value: "" },
    P8: { type: "net", value: "" },
    P9: { type: "net", value: "" },
    S1: { type: "net", value: "" },
    S2: { type: "net", value: "" },
  },
  body: (p) => {
    const fp = [];
    const flip = p.side === "F";
    if (!flip && p.side !== "B") throw new Error("unsupported side: " + p.side);

    fp.push(`(footprint "GCT_FFC2B28-12-G"`);
    fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
    fp.push(`(layer "${flip ? "F.Cu" : "B.Cu"}")`);
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
      `(pad "1" smd rect (at -2.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 3 "GND") (pinfunction "Pin_1") (pintype "passive") (solder_mask_margin 0.102)  ${p.P1})`,
    );
    fp.push(
      `(pad "1" smd rect (at -2.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 3 "GND") (pinfunction "Pin_1") (pintype "passive") (solder_mask_margin 0.102)  ${p.P1})`,
    );
    fp.push(
      `(pad "2" smd rect (at -2.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 1 "C1") (pinfunction "Pin_2") (pintype "passive") (solder_mask_margin 0.102)  ${p.P2})`,
    );
    fp.push(
      `(pad "2" smd rect (at -2.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 1 "C1") (pinfunction "Pin_2") (pintype "passive") (solder_mask_margin 0.102)  ${p.P2})`,
    );
    fp.push(
      `(pad "3" smd rect (at -1.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 4 "C2") (pinfunction "Pin_3") (pintype "passive") (solder_mask_margin 0.102)  ${p.P3})`,
    );
    fp.push(
      `(pad "3" smd rect (at -1.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 4 "C2") (pinfunction "Pin_3") (pintype "passive") (solder_mask_margin 0.102)  ${p.P3})`,
    );
    fp.push(
      `(pad "4" smd rect (at -1.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 9 "C3") (pinfunction "Pin_4") (pintype "passive") (solder_mask_margin 0.102)  ${p.P4})`,
    );
    fp.push(
      `(pad "4" smd rect (at -1.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 9 "C3") (pinfunction "Pin_4") (pintype "passive") (solder_mask_margin 0.102)  ${p.P4})`,
    );
    fp.push(
      `(pad "5" smd rect (at -0.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 14 "C4") (pinfunction "Pin_5") (pintype "passive") (solder_mask_margin 0.102)  ${p.P5})`,
    );
    fp.push(
      `(pad "5" smd rect (at -0.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 14 "C4") (pinfunction "Pin_5") (pintype "passive") (solder_mask_margin 0.102)  ${p.P5})`,
    );
    fp.push(
      `(pad "6" smd rect (at -0.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 19 "C5") (pinfunction "Pin_6") (pintype "passive") (solder_mask_margin 0.102)  ${p.P6})`,
    );
    fp.push(
      `(pad "6" smd rect (at -0.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 19 "C5") (pinfunction "Pin_6") (pintype "passive") (solder_mask_margin 0.102)  ${p.P6})`,
    );
    fp.push(
      `(pad "7" smd rect (at 0.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 24 "C6") (pinfunction "Pin_7") (pintype "passive") (solder_mask_margin 0.102)  ${p.P7})`,
    );
    fp.push(
      `(pad "7" smd rect (at 0.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 24 "C6") (pinfunction "Pin_7") (pintype "passive") (solder_mask_margin 0.102)  ${p.P7})`,
    );
    fp.push(
      `(pad "8" smd rect (at 0.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 32 "R1") (pinfunction "Pin_8") (pintype "passive") (solder_mask_margin 0.102)  ${p.P8})`,
    );
    fp.push(
      `(pad "8" smd rect (at 0.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 32 "R1") (pinfunction "Pin_8") (pintype "passive") (solder_mask_margin 0.102)  ${p.P8})`,
    );
    fp.push(
      `(pad "9" smd rect (at 1.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 33 "R2") (pinfunction "Pin_9") (pintype "passive") (solder_mask_margin 0.102)  ${p.P9})`,
    );
    fp.push(
      `(pad "9" smd rect (at 1.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 33 "R2") (pinfunction "Pin_9") (pintype "passive") (solder_mask_margin 0.102)  ${p.P9})`,
    );
    fp.push(
      `(pad "10" smd rect (at 1.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 34 "R3") (pinfunction "Pin_10") (pintype "passive") (solder_mask_margin 0.102)  ${p.P10})`,
    );
    fp.push(
      `(pad "10" smd rect (at 1.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 34 "R3") (pinfunction "Pin_10") (pintype "passive") (solder_mask_margin 0.102)  ${p.P10})`,
    );
    fp.push(
      `(pad "11" smd rect (at 2.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 31 "R4") (pinfunction "Pin_11") (pintype "passive") (solder_mask_margin 0.102)  ${p.P11})`,
    );
    fp.push(
      `(pad "11" smd rect (at 2.25 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 31 "R4") (pinfunction "Pin_11") (pintype "passive") (solder_mask_margin 0.102)  ${p.P11})`,
    );
    fp.push(
      `(pad "12" smd rect (at 2.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (net 3 "GND") (pinfunction "Pin_12") (pintype "passive") (solder_mask_margin 0.102)  ${p.P12})`,
    );
    fp.push(
      `(pad "12" smd rect (at 2.75 ${flipN(flip, -1.25)} ${flipR(flip, p.r + 0)}) (size 0.3 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (net 3 "GND") (pinfunction "Pin_12") (pintype "passive") (solder_mask_margin 0.102)  ${p.P12})`,
    );
    fp.push(
      `(pad "S1" smd rect (at -3.7 ${flipN(flip, 1.25)} ${flipR(flip, p.r + 0)}) (size 0.4 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (solder_mask_margin 0.102)  ${p.S1})`,
    );
    fp.push(
      `(pad "S1" smd rect (at 3.7 ${flipN(flip, 1.25)} ${flipR(flip, p.r + 0)}) (size 0.4 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (solder_mask_margin 0.102)  ${p.S1})`,
    );
    fp.push(
      `(pad "S2" smd rect (at -3.7 ${flipN(flip, 1.25)} ${flipR(flip, p.r + 0)}) (size 0.4 0.8) (layers "${flip ? "B" : "F"}.Cu" "${flip ? "B" : "F"}.Mask" "${flip ? "B" : "F"}.Paste") (solder_mask_margin 0.102)  ${p.S2})`,
    );
    fp.push(
      `(pad "S2" smd rect (at 3.7 ${flipN(flip, 1.25)} ${flipR(flip, p.r + 0)}) (size 0.4 0.8) (layers "${flip ? "F" : "B"}.Cu" "${flip ? "F" : "B"}.Mask" "${flip ? "F" : "B"}.Paste") (solder_mask_margin 0.102)  ${p.S2})`,
    );

    // Drawings on B.CrtYd
    fp.push(
      `(fp_line (start -4.25 ${flipN(flip, -2.15)}) (end -4.25 ${flipN(flip, 2.15)}) (stroke (width 0.05) (type solid)) (layer "${flip ? "F.CrtYd" : "B.CrtYd"}") )`,
    );
    fp.push(
      `(fp_line (start -4.25 ${flipN(flip, 2.15)}) (end 4.25 ${flipN(flip, 2.15)}) (stroke (width 0.05) (type solid)) (layer "${flip ? "F.CrtYd" : "B.CrtYd"}") )`,
    );
    fp.push(
      `(fp_line (start 4.25 ${flipN(flip, -2.15)}) (end -4.25 ${flipN(flip, -2.15)}) (stroke (width 0.05) (type solid)) (layer "${flip ? "F.CrtYd" : "B.CrtYd"}") )`,
    );
    fp.push(
      `(fp_line (start 4.25 ${flipN(flip, 2.15)}) (end 4.25 ${flipN(flip, -2.15)}) (stroke (width 0.05) (type solid)) (layer "${flip ? "F.CrtYd" : "B.CrtYd"}") )`,
    );

    // Drawings on F.CrtYd
    fp.push(
      `(fp_line (start -4.25 ${flipN(flip, -2.15)}) (end 4.25 ${flipN(flip, -2.15)}) (stroke (width 0.05) (type solid)) (layer "${flip ? "B.CrtYd" : "F.CrtYd"}") )`,
    );
    fp.push(
      `(fp_line (start -4.25 ${flipN(flip, 2.15)}) (end -4.25 ${flipN(flip, -2.15)}) (stroke (width 0.05) (type solid)) (layer "${flip ? "B.CrtYd" : "F.CrtYd"}") )`,
    );
    fp.push(
      `(fp_line (start 4.25 ${flipN(flip, -2.15)}) (end 4.25 ${flipN(flip, 2.15)}) (stroke (width 0.05) (type solid)) (layer "${flip ? "B.CrtYd" : "F.CrtYd"}") )`,
    );
    fp.push(
      `(fp_line (start 4.25 ${flipN(flip, 2.15)}) (end -4.25 ${flipN(flip, 2.15)}) (stroke (width 0.05) (type solid)) (layer "${flip ? "B.CrtYd" : "F.CrtYd"}") )`,
    );

    // Drawings on B.Fab
    fp.push(
      `(fp_line (start -4 ${flipN(flip, -1.9)}) (end 4 ${flipN(flip, -1.9)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "F.Fab" : "B.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start -4 ${flipN(flip, -1)}) (end -4 ${flipN(flip, -1.9)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "F.Fab" : "B.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start -4 ${flipN(flip, -1)}) (end 4 ${flipN(flip, -1)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "F.Fab" : "B.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start -4 ${flipN(flip, 1.9)}) (end -4 ${flipN(flip, -1)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "F.Fab" : "B.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start 4 ${flipN(flip, -1.9)}) (end 4 ${flipN(flip, -1)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "F.Fab" : "B.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start 4 ${flipN(flip, -1)}) (end 4 ${flipN(flip, 1.9)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "F.Fab" : "B.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start 4 ${flipN(flip, 1.9)}) (end -4 ${flipN(flip, 1.9)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "F.Fab" : "B.Fab"}") )`,
    );
    fp.push(
      `(fp_circle (center -2.75 ${flipN(flip, -2.4)}) (end -2.65 ${flipN(flip, -2.4)}) (stroke (width 0.2) (type solid)) (fill no) (layer "${flip ? "F.Fab" : "B.Fab"}") )`,
    );

    // Drawings on F.Fab
    fp.push(
      `(fp_line (start -4 ${flipN(flip, -1.9)}) (end -4 ${flipN(flip, -1)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.Fab" : "F.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start -4 ${flipN(flip, -1)}) (end -4 ${flipN(flip, 1.9)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.Fab" : "F.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start -4 ${flipN(flip, 1.9)}) (end 4 ${flipN(flip, 1.9)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.Fab" : "F.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start 4 ${flipN(flip, -1.9)}) (end -4 ${flipN(flip, -1.9)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.Fab" : "F.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start 4 ${flipN(flip, -1)}) (end -4 ${flipN(flip, -1)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.Fab" : "F.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start 4 ${flipN(flip, -1)}) (end 4 ${flipN(flip, -1.9)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.Fab" : "F.Fab"}") )`,
    );
    fp.push(
      `(fp_line (start 4 ${flipN(flip, 1.9)}) (end 4 ${flipN(flip, -1)}) (stroke (width 0.1) (type solid)) (layer "${flip ? "B.Fab" : "F.Fab"}") )`,
    );
    fp.push(
      `(fp_circle (center -2.75 ${flipN(flip, -2.4)}) (end -2.85 ${flipN(flip, -2.4)}) (stroke (width 0.2) (type solid)) (fill no) (layer "${flip ? "B.Fab" : "F.Fab"}") )`,
    );

    // Drawings on B.SilkS
    fp.push(
      `(fp_line (start -4 ${flipN(flip, -1.9)}) (end -3.3 ${flipN(flip, -1.9)}) (stroke (width 0.2) (type solid)) (layer "${flip ? "F.SilkS" : "B.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start -4 ${flipN(flip, 0.5)}) (end -4 ${flipN(flip, -1.9)}) (stroke (width 0.2) (type solid)) (layer "${flip ? "F.SilkS" : "B.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start -3.15 ${flipN(flip, 1.9)}) (end 3.15 ${flipN(flip, 1.9)}) (stroke (width 0.2) (type solid)) (layer "${flip ? "F.SilkS" : "B.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start 3.3 ${flipN(flip, -1.9)}) (end 4 ${flipN(flip, -1.9)}) (stroke (width 0.2) (type solid)) (layer "${flip ? "F.SilkS" : "B.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start 4 ${flipN(flip, -1.9)}) (end 4 ${flipN(flip, 0.5)}) (stroke (width 0.2) (type solid)) (layer "${flip ? "F.SilkS" : "B.SilkS"}") )`,
    );
    fp.push(
      `(fp_circle (center -2.75 ${flipN(flip, -2.4)}) (end -2.65 ${flipN(flip, -2.4)}) (stroke (width 0.2) (type solid)) (fill no) (layer "${flip ? "F.SilkS" : "B.SilkS"}") )`,
    );

    // Drawings on F.SilkS
    fp.push(
      `(fp_line (start -4 ${flipN(flip, -1.9)}) (end -4 ${flipN(flip, 0.5)}) (stroke (width 0.2) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start -3.3 ${flipN(flip, -1.9)}) (end -4 ${flipN(flip, -1.9)}) (stroke (width 0.2) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start 3.15 ${flipN(flip, 1.9)}) (end -3.15 ${flipN(flip, 1.9)}) (stroke (width 0.2) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start 4 ${flipN(flip, -1.9)}) (end 3.3 ${flipN(flip, -1.9)}) (stroke (width 0.2) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_line (start 4 ${flipN(flip, 0.5)}) (end 4 ${flipN(flip, -1.9)}) (stroke (width 0.2) (type solid)) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );
    fp.push(
      `(fp_circle (center -2.75 ${flipN(flip, -2.4)}) (end -2.85 ${flipN(flip, -2.4)}) (stroke (width 0.2) (type solid)) (fill no) (layer "${flip ? "B.SilkS" : "F.SilkS"}") )`,
    );

    // 3D Models
    fp.push(
      `(model "\${ERGOGEN_MODELS}/FFC2B28-12-G.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 0)))`,
    );

    // Properties
    // fp.push(`(property "Reference" "J1" (at -1.718 ${flipN(flip, -3.1064)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}")  (effects (font (size 0.64 0.64) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Value" "Conn_01x12_Socket" (at 3.2524 ${flipN(flip, 3.1936)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "F.Fab" : "B.Fab")}")  (effects (font (size 0.64 0.64) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
    // fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 180) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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
