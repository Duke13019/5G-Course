#!/bin/bash

./../misc/db/open5gs-dbctl showpretty > db.txt

# Step 1: Extract imsi values
imsis=$(grep -oP "imsi: '\K\d+" db.txt)

# Step 2: Remove users for each imsi
for imsi in $imsis; do
    ./../misc/db/open5gs-dbctl remove $imsi
done

# Step 3: Add new UEs
for i in $(seq -f "%03g" 1 $UE_COUNT); do
    IMSI="999700000000$(printf "%03d" $((10#$i)))"
    ./../misc/db/open5gs-dbctl add $IMSI 465B5CE8B199B49FAA5F0A2EE238A6BC E8ED289DEBA952E4283B54E88E6183CA;
done




# Get the IP address of the Core container
CORE_IP=$(hostname -I | awk '{print $1}')

# Write the CORE_IP to a file in the shared volume
echo $CORE_IP > /shared-data/core_ip.txt

# Export the shell variable to the environment
export CORE_IP

# Update the configuration files with the Core IP address using the yq 
yq eval '.upf.gtpu.server[0].address = env(CORE_IP)' configs/sample.yaml -i
yq eval '.amf.ngap.server[0].address = env(CORE_IP)' configs/sample.yaml -i



# Start Open5GS Core services
./tests/app/5gc &





# Keep the container running
tail -f /dev/null


