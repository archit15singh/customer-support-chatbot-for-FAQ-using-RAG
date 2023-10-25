import time

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By


def scrape_twitter_links(url):
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    driver = webdriver.Chrome(options=options)

    driver.get(url)

    parent_divs = None
    try:
        parent_divs = driver.find_elements(By.CLASS_NAME, "h03__footer")
    except Exception as e:
        print()
    
    for parent_div in parent_divs:
        if parent_div:
            buttons = parent_div.find_elements(By.TAG_NAME, "button")

            for button in buttons:
                button.click()
        
        time.sleep(1)
    
    page_source = driver.page_source

    driver.quit()

    soup = BeautifulSoup(page_source, 'html.parser')

    links = soup.find_all("a", class_="h03__link twtr-type--roman-300r")
    link_hrefs = [link.get("href") for link in links]
    print(f"found {len(link_hrefs)} in {url}")
    
    def change_url(url):
        url = url.replace("/content/help-twitter/", "")
        url = "https://help.twitter.com/" + url
        return url
    
    link_hrefs = list(map(change_url, link_hrefs))

    return link_hrefs

def read_links_from_file(file_path):
    try:
        with open(file_path, 'r') as file:
            links = file.read().splitlines()
        return links
    except FileNotFoundError:
        print(f"Error: File '{file_path}' not found.")
        return []
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return []

def write_links_to_file(links, file_path):
    try:
        with open(file_path, 'w') as file:
            for link in links:
                file.write(link + '\n')
        print(f"Links written to '{file_path}'")
    except Exception as e:
        print(f"An error occurred while writing to '{file_path}': {str(e)}")

file_path = './parent-links.txt'
links = read_links_from_file(file_path)

if links:
    all_found_links = []

    for link in links:
        url = link.strip()
        found_links = scrape_twitter_links(url)
        all_found_links.extend(found_links)

    write_links_to_file(all_found_links, 'raw-links.txt')
