import json
import xml.etree.ElementTree as ET

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

def build_pages(pages):
    env = Environment(
        loader=FileSystemLoader('templates'),
        autoescape=select_autoescape(['html'])
    )

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

def build_sitemap(pages):
    urlset = ET.Element('urlset')
    urlset.set('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
    for page in pages:
        url = ET.SubElement(urlset, 'url')
        loc = ET.SubElement(url, 'loc')
        path = '/' if page == 'index' else f'/{page}.html'
        loc.text = f'https://taiga.moe{path}'
        lastmod = ET.SubElement(url, 'lastmod')
        lastmod.text = datetime.now().strftime('%Y-%m-%dT%H:%M:%S%z')
        if page == 'index':
            priority = ET.SubElement(url, 'priority')
            priority.text = '1.0'
    tree = ET.ElementTree(urlset)
    tree.write('public/sitemap.xml', encoding='utf-8', xml_declaration=True)

def main():
    pages = ['index', 'api', 'latest']
    build_pages(pages)
    build_sitemap(pages)

if __name__ == "__main__":
    main()
