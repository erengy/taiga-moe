import json

from datetime import datetime
from jinja2 import Environment, FileSystemLoader, select_autoescape
from markdown import markdown

def load_data(slug):
    with open(f'data/{slug}.json', 'r', encoding='utf-8') as file:
        return json.load(file)

def load_html_content(slug):
    with open(f'docs/{slug}.md', 'r', encoding='utf-8') as file:
        return markdown(file.read(), output_format='html5', tab_length=2)

def load_docs(slug):
    data = load_data(slug)
    for item in data:
        item['body'] = load_html_content(item['slug'])
    return data

def save_html(html, name):
    with open(f'public/{name}.html', 'w', encoding='utf-8') as file:
        file.write(html)

env = Environment(
    loader=FileSystemLoader('templates'),
    autoescape=select_autoescape(['html'])
)

pages = ['api', 'index', 'latest']

features = load_docs('features')
quotes = load_data('quotes')
screenshots = load_data('screenshots')
support = {
    'faq': load_docs('faq'),
    'issues': load_docs('issues'),
    'how-it-works': load_docs('how-it-works'),
}
version = datetime.now().strftime('%Y%m%d%H%M%S')

for name in pages:
    template = env.get_template(f'{name}.html')
    html = template.render(features=features,
                           quotes=quotes,
                           screenshots=screenshots,
                           support=support,
                           version=version)
    save_html(html, name)
