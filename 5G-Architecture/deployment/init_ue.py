import pymongo
import yaml
from pymongo import MongoClient
import argparse

def add_ue_to_db(client, ue_number):
    db = client.open5gs
    collection = db.subscribers
    imsi = f"999700000000{ue_number:03}"
    key = "465B5CE8B199B49FAA5F0A2EE238A6BC"
    opc = "E8ED289DEBA952E4283B54E88E6183CA"
    ue = {
        "imsi": imsi,
        "security": {
            "key": key,
            "opc": opc
        }
    }
    collection.insert_one(ue)
    print(f"UE {imsi} added to database.")

def main(num_ue):
    client = MongoClient("mongodb://mongodb:27017/")
    for i in range(1, num_ue + 1):
        add_ue_to_db(client, i)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Initialize UEs in Open5GS MongoDB database.')
    parser.add_argument('num_ue', type=int, help='Number of UE replicas to initialize')
    args = parser.parse_args()
    main(args.num_ue)

