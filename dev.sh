#! /bin/sh

date=$(date '+%Y-%m-%d %H:%M:%S')
echo $date

entry="$1 -- $date\n$2\n"

if [ $# -eq 2 ]
then
  if [ ! -e devlog.txt ]
  then
    touch devlog.txt
  fi
  echo $entry >> devlog.txt
else
  echo "Improper format."
fi
