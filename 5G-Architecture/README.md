# Automated deployment

In this part, in opposite to what have been done on the original repository (https://github.com/lmendiboure/5G-Course/tree/main/5G-Architecture), we won't need to modify configuration files in order to deploy a complete network. The Dockerfiles were modified to add entrypoints that do the exact same commands that were done manually. I'll give some further indications for more flexibility of use.

## Prerequisites
  Make sure to have the basic packages installed such as `docker`, `npm` and `nodejs`
 
 
## Deployment
   All the files are in the deployment folder and, in theory, using the command `docker-compose up -d` will launch the environment. Note that you won't have to touch to any file to deploy the network.

Once the docker-compose has executed, I recommend to redirect the log outputs of each container in a dedicated file with  `docker logs deployment_*_1 > log_*.txt`. We should now find in those files proofs of successful execution such as : `NG Setup procedure is successful` within the gnB log and `PDU Session establishment is successful` within the UE log.

To gain access to the web UI, you can run the following commands on the shell and make sure you are on the `deployment/webui/` folder: 

  - `npm install`
  - `npm run build`
  - `npm start`
  
Within a browser, you can now access to `127.0.0.1:9999` and connect using the `admin:1423` credentials.






###  Towards a distributed network core

We're now going to set up a distributed network core. The idea, for example, could be to deploy a UPF function in a separate core. This would be necessary, for example, in an edge computing scenario, where data is processed as close as possible to the user, and we don't want to have to send it up the network.

The next objective will therefore be to add a new container. All other functions will be launched in the core container used until now. The UPF function will be launched in this independent container. All these elements will form a core to which the base station and users will be able to connect.





###  Open questions

**Q.1** Open5GS can support multiple slices (can be seen in the WebUI when you register users), what is Network Slicing? Also indicate which core functions are 1) common to all slices and their role and 2) which functions are specific to each of the slices?

(potential source: https://www.open5gcore.org/open5gcore/network-slice-support)

**Q.2** In 5G Networks, gNb can be divided into two entities: CU and DU. What are each of them? What is the purpose of this separation?

(potential source: https://www.5gworldpro.com/5g-knowledge/what-is-cu-and-du-in-5g.html)


