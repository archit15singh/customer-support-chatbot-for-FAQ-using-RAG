import os
import requests
from bs4 import BeautifulSoup
import textwrap
import html
import time

def get_text_from_url(url):
    try:
        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, 'html.parser')

        all_text = ' '.join([element.get_text() for element in soup.find_all(string=True)])
        all_text = '.'.join([item.strip() for item in all_text.split('.')])
        all_text = all_text.replace('Â', '\n')

        return all_text
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")
        return None

def save_text_to_file(text, filename):
    try:
        if not os.path.exists("raw_txt"):
            os.makedirs("raw_txt")

        with open(os.path.join("raw_txt", filename), 'w', encoding='utf-8') as file:
            prettified_text = textwrap.fill(html.unescape(text), width=80)
            file.write(prettified_text)
        print(f"Text saved to {filename}")
    except Exception as e:
        print(f"An error occurred while saving the text: {e}")

with open('raw-links.txt', 'r') as file:
    links = file.read().splitlines()

for index, url in enumerate(links):
    print(index, len(links))
    time.sleep(2)
    url = url.strip()
    text = get_text_from_url(url)
    if text:
        filename = url.split('/')[-1] + '.txt'
        save_text_to_file(text, filename)
