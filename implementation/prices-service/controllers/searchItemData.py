from bs4 import BeautifulSoup
import requests
import json


def getting_base_url(item):
    BaseURL = "https://shopping.check24.de/suche.html?query="
    for substring in item.split():
        BaseURL += f"{substring}%20"
    print("base url:", BaseURL)
    return BaseURL


def get_articles(item_name):
    BaseURL = getting_base_url(item_name)
    items = []
    source = requests.get(BaseURL).text
    soup = BeautifulSoup(source, "html.parser")
    json_object = json.loads(soup.find("script", {"id": "appstate"}).contents[0])
    product_list = json_object["searchModule"]["products"]
    for article in product_list:
        items.append(
            {
                "name": article["name"],
                "price": article["priceMin"],
                "url": article["url"],
            }
        )
    return items