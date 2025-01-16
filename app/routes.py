from flask import render_template, Blueprint
from .models import Product

# Create a blueprint for the main routes
main = Blueprint('main', __name__)

@main.route('/')
def home():
    return render_template('index.html')

@main.route('/cart')
def cart():
    return render_template('cart.html')

@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/shop')
def shop():
    return render_template('shop.html')

@main.route('/contact')
def contact():
    return render_template('contact.html')

@main.route('/<name>')
def product_detail(name):
    # Query the product by its name
    product = Product.query.filter_by(name=name).first_or_404()
    return render_template('product_detail.html', product=product)

@main.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

@main.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500
