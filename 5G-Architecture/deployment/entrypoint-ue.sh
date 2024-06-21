#!/bin/bash

# Read the IP address from the shared volume
GNB_IP=$(cat /shared-data/gnb_ip.txt)

# Export the shell variables to the environment
export GNB_IP


# Update the configuration files using the yq 
yq eval '.gnbSearchList[0] = env(GNB_IP)' ../config/open5gs-ue.yaml  -i

# Update the IMSI
hostname=$(hostname)
id=$(echo "$hostname" | awk -F'-' '{print $3}')

current_supi=$(yq eval '.supi' ../config/open5gs-ue.yaml )
current_imsi=$(echo "$current_supi" | awk -F'-' '{print $2}')

new_imsi=$((current_imsi+id-1))
prefix='imsi-'
new_supi="${prefix}${new_imsi}"

yq eval ".supi = \"$new_supi\"" -i ../config/open5gs-ue.yaml

# Start ue services
./nr-ue -c ../config/open5gs-ue.yaml 


# Keep the container running
tail -f /dev/null



