from app import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    custom_id = db.Column(db.String(100), nullable=False, unique=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    description = db.Column(db.Text, nullable=False)
    description2 = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f"<Product {self.name}>"
