#!/bin/bash
# Install the needed packages
apt-get install wget
wget https://github.com/mikefarah/yq/releases/download/v4.12.2/yq_linux_amd64 -O /usr/bin/yq && chmod +x /usr/bin/yq
wget https://downloads.mongodb.com/compass/mongosh-1.6.1-linux-x64.tgz
tar -xvzf mongosh-1.6.1-linux-x64.tgz
mv mongosh-1.6.1-linux-x64/bin/* /usr/local/bin/

# Get the IP address of the Core container
CORE_IP=$(hostname -I | awk '{print $1}')

# Write the CORE_IP to a file in the shared volume
echo $CORE_IP > /shared-data/core_ip.txt

# Export the shell variable to the environment
export CORE_IP

# Update the configuration files with the Core IP address using the yq 
yq eval '.upf.gtpu.server[0].address = env(CORE_IP)' configs/sample.yaml -i
yq eval '.amf.ngap.server[0].address = env(CORE_IP)' configs/sample.yaml -i

# Add some UEs without the webui
./../misc/db/open5gs-dbctl reset
for i in $(seq -w 1 3); do
  ./../misc/db/open5gs-dbctl add 99970000000000$i 465B5CE8B199B49FAA5F0A2EE238A6BC E8ED289DEBA952E4283B54E88E6183CA;
done


# Start Open5GS Core services
exec ./tests/app/5gc


# Keep the container running
#tail -f /dev/null


