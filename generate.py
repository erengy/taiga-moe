from datetime import datetime
from jinja2 import Environment, FileSystemLoader, select_autoescape

def save_html(html, name):
    with open(f'public/{name}.html', 'w', encoding='utf-8') as file:
        file.write(html)

pages = ['api', 'index', 'latest']
version = datetime.now().strftime('%Y%m%d%H%M%S')

env = Environment(
    loader=FileSystemLoader('templates'),
    autoescape=select_autoescape(['html'])
)

for name in pages:
  template = env.get_template(f'{name}.html')
  html = template.render(version=version)
  save_html(html, name)
