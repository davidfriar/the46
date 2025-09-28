ergogen -d --clean . 


# find the first use of 'segment' and copy from this line to the end of the file to a tmp file to preserve traces etc that have been added manually
sed '/segment/, $w ../pcbs/left/traces-left.tmp' ../pcbs/left/left.kicad_pcb
sed '/segment/, $w ../pcbs/right/traces-right.tmp' ../pcbs/right/right.kicad_pcb


# copy all except the last 3 lines of the ergogen generated pcbs to the kicad pcb file, then append the stuff from the saved tmp file
head -n -3 output/pcbs/left_pcb.kicad_pcb > ../pcbs/left/left.kicad_pcb
cat ../pcbs/left/traces-left.tmp >> ../pcbs/left/left.kicad_pcb
head -n -3 output/pcbs/right_pcb.kicad_pcb > ../pcbs/right/right.kicad_pcb
cat ../pcbs/right/traces-right.tmp >> ../pcbs/right/right.kicad_pcb


kicad-cli pcb export step -f --subst-models -o ../case/pcbs/left_pcb.step    ../pcbs/left/left.kicad_pcb
kicad-cli pcb export step -f --subst-models -o ../case/pcbs/right_pcb.step    ../pcbs/right/right.kicad_pcb
kicad-cli pcb export step -f --subst-models -o ../case/pcbs/daughterboard_pcb.step    ../pcbs/daughterboard/daughterboard.kicad_pcb

python ../utils/convert3d/stepToSTL.py -d -o ../case/pcbs ../case/pcbs/left_pcb.step
python ../utils/convert3d/stepToSTL.py -d -o ../case/pcbs ../case/pcbs/right_pcb.step
python ../utils/convert3d/stepToSTL.py -d -o ../case/pcbs ../case/pcbs/daughterboard_pcb.step

cp output/outlines/left_board.svg ../case/pcbs/left_pcb.svg
cp output/outlines/right_board.svg ../case/pcbs/right_pcb.svg
./generateOpenscad.sh > ../case/keys.scad
