#!/bin/bash

arquivo=countries.txt

for nomes in `cat $arquivo`
do
	echo $nomes
done
