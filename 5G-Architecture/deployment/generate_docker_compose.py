import yaml
import argparse
from collections import OrderedDict

class OrderedDumper(yaml.Dumper):
    def represent_dict_preserve_order(self, data):
        return self.represent_mapping('tag:yaml.org,2002:map', data.items())

OrderedDumper.add_representer(OrderedDict, OrderedDumper.represent_dict_preserve_order)

def generate_docker_compose(num_ue):
    base_compose = OrderedDict({
        'version': '3.7',
        'networks': OrderedDict({
            'vnet': OrderedDict({
                'driver': 'bridge',
                'enable_ipv6': False,
                'ipam': OrderedDict({
                    'config': [OrderedDict({
                        'subnet': '173.22.0.0/24',
                        'gateway': '173.22.0.1'
                    })]
                })
            })
        }),
        'volumes': OrderedDict({
            'mongodb': {} ,
            'shared-data' : {}
        }),
        'services': OrderedDict({
            'mongodb': OrderedDict({
                'image': 'mongo',
                'container_name': 'open5gs-mongodb',
                'ports': ['27017:27017'],
                'restart': 'unless-stopped',
                'volumes': ['mongodb:/data/db', './mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro'],
                'networks': OrderedDict({
                    'vnet': OrderedDict({
                        'ipv4_address': '173.22.0.2'
                    })
                })
            }),
            'open5gs': OrderedDict({
                'hostname': 'open5gs',
                'image': '5g-core',
                'privileged': True,
                'build': OrderedDict({
                    'context': '.',
                    'dockerfile': 'Dockerfile.open5gs'
                }),
                'cap_add': ['NET_ADMIN'],
                'devices': ['/dev/net/tun:/dev/net/tun'],
                'sysctls': ['net.ipv6.conf.all.disable_ipv6=0'],
                'expose': ['38412/sctp', '80/tcp'],
                'environment': ['DB_URI=mongodb://mongodb/open5gs', 'WAIT_HOSTS=mongodb:27017',f'UE_COUNT={num_ue}'],
                'depends_on': ['mongodb'],
                'ports': ['38412'],
                'volumes': ['shared-data:/shared-data'],
                'command': './entrypoint-core.sh',
                'networks': OrderedDict({
                    'vnet': OrderedDict({
                        'ipv4_address': '173.22.0.4'
                    })
                })
            }),
            'webui': OrderedDict({
                'hostname': 'webui',
                'image': '${USER}/open5gs-webui',
                'build': OrderedDict({
                    'context': '.',
                    'dockerfile': 'Dockerfile.webui'
                }),
                'container_name': 'open5gs-webui',
                'depends_on': ['mongodb'],
                'ports': ['3000:3000', '9999:9999'],
                'command': 'tail -f /dev/null',
                'environment': ['DB_URI=mongodb://mongodb/open5gs', 'WAIT_HOSTS=mongodb:27017'],
                'networks': OrderedDict({
                    'vnet': OrderedDict({
                        'ipv4_address': '173.22.0.7'
                    })
                })
            }),
            'enb-ueransim': OrderedDict({
                'hostname': '5g-enb',
                'image': '5g-enb',
                'privileged': True,
                'build': OrderedDict({
                    'context': '.',
                    'dockerfile': 'Dockerfile.gnb'
                }),
                'volumes': ['shared-data:/shared-data'],
                'command': './entrypoint-gnb.sh',
                'depends_on': ['open5gs','mongodb'],
                'networks': OrderedDict({
                    'vnet': OrderedDict({
                        'ipv4_address': '173.22.0.5'
                    })
                })
            })
        })
    })

    for i in range(1, num_ue + 1):
        ue_service_name = f'ue-ueransim-{i}'
        ue_ip = f'173.22.0.{8 + i}'
        base_compose['services'][ue_service_name] = OrderedDict({
            'hostname': f'5g-ue-{i}',
            'image': '5g-ue',
            'privileged': True,
            'build': OrderedDict({
                'context': '.',
                'dockerfile': 'Dockerfile.ue'
            }),
            'devices': ['/dev/net/tun:/dev/net/tun'],
            'volumes': ['shared-data:/shared-data'],
            'command': './entrypoint-ue.sh',
            'depends_on': ['enb-ueransim'],
            'networks': OrderedDict({
                'vnet': OrderedDict({
                    'ipv4_address': ue_ip
                })
            })
        })
        


    with open('docker-compose.yml', 'w') as file:
        yaml.dump(base_compose, file, default_flow_style=False, sort_keys=False, Dumper=OrderedDumper)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Generate docker-compose.yml with a specified number of UE replicas.')
    parser.add_argument('num_ue', type=int, help='The number of UE replicas to generate')
    
    args = parser.parse_args()
    generate_docker_compose(args.num_ue)

