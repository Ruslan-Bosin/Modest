import requests



url = "https://olimp.miet.ru/ppo_it_final"

data = requests.get(url, headers={"X-Auth-Token": "ppo_11_19825"}, params={"day": 25, "month": 1, "year": 23})
print()

print(data.json())
