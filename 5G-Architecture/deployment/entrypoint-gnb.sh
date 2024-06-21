#!/bin/bash


# Read the IP address from the shared volume
CORE_IP=$(cat /shared-data/core_ip.txt)

# Get the IP address of the gnb container
GNB_IP=$(hostname -I | awk '{print $1}')

# Write the GNB_IP to a file in the shared volume
echo $GNB_IP > /shared-data/gnb_ip.txt


echo "-----IP handling completed-----"
# Export the shell variables to the environment
export GNB_IP
export CORE_IP

echo "-----export handling completed-----"

# Update the configuration files using the yq 
yq eval '.amfConfigs[0].address = env(CORE_IP)' ../config/open5gs-gnb.yaml -i
yq eval '.ngapIp = env(GNB_IP)'  ../config/open5gs-gnb.yaml -i 
yq eval '.gtpIp = env(GNB_IP)'  ../config/open5gs-gnb.yaml -i 
yq eval '.linkIp = env(GNB_IP)'  ../config/open5gs-gnb.yaml -i

echo "-----yq handling completed-----"
# Start gnb services
 ./nr-gnb -c ../config/open5gs-gnb.yaml &


# Keep the container running
tail -f /dev/null


