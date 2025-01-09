module.exports = {
  params: {
    designator: "J",
    side: "F",
    p1: { type: "net", value: "p1" },
    p2: { type: "net", value: "p2" },
    p3: { type: "net", value: "p3" },
    p4: { type: "net", value: "p4" },
    p5: { type: "net", value: "p5" },
    p6: { type: "net", value: "p6" },
    p7: { type: "net", value: "p7" },
    p8: { type: "net", value: "p8" },
    p9: { type: "net", value: "p9" },
    p10: { type: "net", value: "p10" },
    p11: { type: "net", value: "p11" },
    p12: { type: "net", value: "p12" },
  },

  body: (p) => {
    return `
(module GCT_FFC2B28-12-G (layer ${p.side}.Cu) (tedit 60CE555C)
  (attr smd)
  ${p.at}

  (fp_text reference "${p.ref}" (at -1.718 -3.1064) (layer ${p.side}.SilkS)
    (effects (font (size 0.64 0.64) (thickness 0.15)))
  )
  (fp_text value "Conn_01x12_Socket" (at 3.2524 3.1936) (layer "${p.side}.Fab")
      (effects (font (size 0.64 0.64) (thickness 0.15)))
    
  )

  (pad S2 smd rect (at 3.7 1.25) (size 0.4 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102))
  (pad S1 smd rect (at -3.7 1.25) (size 0.4 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste) (solder_mask_margin 0.102))
  (pad 1 smd rect (at -2.75 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p1} (pinfunction "Pin_1")(pintype "passive") (solder_mask_margin 0.102))
  (pad 2 smd rect (at -2.25 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p2} (pinfunction "Pin_2")(pintype "passive") (solder_mask_margin 0.102))
  (pad 3 smd rect (at -1.75 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p3} (pinfunction "Pin_3")(pintype "passive") (solder_mask_margin 0.102))
  (pad 4 smd rect (at -1.25 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p4} (pinfunction "Pin_4")(pintype "passive") (solder_mask_margin 0.102))
  (pad 5 smd rect (at -0.75 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p5} (pinfunction "Pin_5")(pintype "passive") (solder_mask_margin 0.102))
  (pad 6 smd rect (at -0.25 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p6} (pinfunction "Pin_6")(pintype "passive") (solder_mask_margin 0.102))
  (pad 7 smd rect (at 0.25 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p7} (pinfunction "Pin_7")(pintype "passive") (solder_mask_margin 0.102))
  (pad 8 smd rect (at 0.75 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p8} (pinfunction "Pin_8")(pintype "passive") (solder_mask_margin 0.102))
  (pad 9 smd rect (at 1.25 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p9} (pinfunction "Pin_9")(pintype "passive") (solder_mask_margin 0.102))
  (pad 10 smd rect (at 1.75 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p10} (pinfunction "Pin_10")(pintype "passive") (solder_mask_margin 0.102))
  (pad 11 smd rect (at 2.25 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p11} (pinfunction "Pin_11")(pintype "passive") (solder_mask_margin 0.102))
  (pad 12 smd rect (at 2.75 -1.25) (size 0.3 0.8) (layers ${p.side}.Cu ${p.side}.Mask ${p.side}.Paste)
${p.p12} (pinfunction "Pin_12")(pintype "passive") (solder_mask_margin 0.102))
  (fp_line (start -4.0 -1.9) (end 4.0 -1.9) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 4.0 -1.9) (end 4.0 -1.0) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 4.0 -1.0) (end 4.0 1.9) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start 4.0 1.9) (end -4.0 1.9) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -4.0 1.9) (end -4.0 -1.0) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -4.0 -1.0) (end -4.0 -1.9) (layer ${p.side}.Fab) (width 0.1))
  (fp_line (start -4.25 -2.15) (end -4.25 2.15) (layer ${p.side}.CrtYd) (width 0.05))
  (fp_line (start -4.25 2.15) (end 4.25 2.15) (layer ${p.side}.CrtYd) (width 0.05))
  (fp_line (start 4.25 2.15) (end 4.25 -2.15) (layer ${p.side}.CrtYd) (width 0.05))
  (fp_line (start 4.25 -2.15) (end -4.25 -2.15) (layer ${p.side}.CrtYd) (width 0.05))
  (fp_circle (center -2.75 -2.4) (end -2.65 -2.4) (layer ${p.side}.Fab) (width 0.2))
  (fp_circle (center -2.75 -2.4) (end -2.65 -2.4) (layer ${p.side}.SilkS) (width 0.2))
  (fp_line (start -4.0 0.5) (end -4.0 -1.9) (layer ${p.side}.SilkS) (width 0.2))
  (fp_line (start -4.0 -1.9) (end -3.3 -1.9) (layer ${p.side}.SilkS) (width 0.2))
  (fp_line (start 3.3 -1.9) (end 4.0 -1.9) (layer ${p.side}.SilkS) (width 0.2))
  (fp_line (start 4.0 -1.9) (end 4.0 0.5) (layer ${p.side}.SilkS) (width 0.2))
  (fp_line (start -3.15 1.9) (end 3.15 1.9) (layer ${p.side}.SilkS) (width 0.2))
  (fp_line (start -4.0 -1.0) (end 4.0 -1.0) (layer ${p.side}.Fab) (width 0.1))
  (model \${ERGOGEN_MODELS}/FFC2B28-12-G.step
    (offset (xyz 0 0 0))
    (scale (xyz 1 1 1))
    (rotate (xyz -90 0 0))
  )
)
    `;
  },
};
