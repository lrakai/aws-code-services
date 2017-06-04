#!/bin/bash
source /home/ec2-user/.bash_profile
cd /home/ec2-user/ca-app
isExistApp=`pgrep ca-app`
if [[ -n  $isExistApp ]]; then
    npm stop    
fi
