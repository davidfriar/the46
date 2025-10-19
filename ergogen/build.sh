ergogen -d --clean . 


sed -i 's/module/footprint/' output/pcbs/mainboard.kicad_pcb
python merge_kicad.py output/pcbs/mainboard.kicad_pcb ../pcbs/mainboard/mainboard.kicad_pcb

