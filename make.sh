#!/bin/bash

docker build -t brendanburns/hostname-server:v1 .
docker push brendanburns/hostname-server:v1
