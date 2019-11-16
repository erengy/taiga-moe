import json

from datetime import datetime
from jinja2 import Environment, FileSystemLoader, select_autoescape

def load_json(path):
    with open(path, 'r', encoding='utf-8') as file:
        return json.load(file)

def save_html(html, name):
    with open(f'public/{name}.html', 'w', encoding='utf-8') as file:
        file.write(html)

pages = ['api', 'index', 'latest']
quotes = load_json('data/quotes.json')
version = datetime.now().strftime('%Y%m%d%H%M%S')

env = Environment(
    loader=FileSystemLoader('templates'),
    autoescape=select_autoescape(['html'])
)

for name in pages:
  template = env.get_template(f'{name}.html')
  html = template.render(quotes=quotes, version=version)
  save_html(html, name)
