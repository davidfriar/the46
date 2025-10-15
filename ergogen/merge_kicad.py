from kicad_parser import KicadPCB
import argparse
import sys
import os

parser = argparse.ArgumentParser()
parser.add_argument("input_file")
parser.add_argument("output_file")

args = parser.parse_args()

new_pcb = KicadPCB.load(args.input_file)

if os.path.exists(args.output_file):
    old_pcb = KicadPCB.load(args.output_file)
    print('old root values: ')
    for k in old_pcb:
        print('\t{}: {}'.format(k,old_pcb[k]))
    new_pcb.segment = old_pcb.segment
    new_pcb.zone = old_pcb.zone
    new_pcb.arc = old_pcb.arc

print('new root values: ')
for k in new_pcb:
    print('\t{}: {}'.format(k,new_pcb[k]))

new_pcb.export(args.output_file)
