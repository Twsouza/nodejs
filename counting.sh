#!/bin/sh

# Script to count from 1 to 1000 with a 1-second delay between each number

i=1
while [ $i -le 1000 ]
do
    echo $i
    sleep 1
    i=$((i+1))
done
