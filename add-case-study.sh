#!/bin/bash

# add-case-study - A script to produce an a new case study to my portfolio

read -p "Enter new case study name: " dirname
if [[ ! -d "$casestudyname" ]]
then
        if [[ ! -L $casestudyname ]]
        then
                echo "New case study name doesn't exist. Creating now"
                # mkdir $casestudyname
                echo "Case study directory created"
        else
                echo "Case study already exists"
        fi
fi
