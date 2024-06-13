#!/bin/bash
# Install the needed packages (wget +yq)
apt-get install wget
wget https://github.com/mikefarah/yq/releases/download/v4.12.2/yq_linux_amd64 -O /usr/bin/yq && chmod +x /usr/bin/yq

# Read the IP address from the shared volume
GNB_IP=$(cat /shared-data/gnb_ip.txt)

# Export the shell variables to the environment
export GNB_IP


# Update the configuration files using the yq 
yq eval '.gnbSearchList[0] = env(GNB_IP)' ../config/open5gs-ue.yaml  -i

# Start ue services
exec ./nr-ue -c ../config/open5gs-ue.yaml -n 3


# Keep the container running
#tail -f /dev/null



