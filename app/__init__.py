from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
import os
from config import DevelopmentConfig, ProductionConfig

# Initialize extensions
db = SQLAlchemy()
bcrypt = Bcrypt()

def create_app():
    app = Flask(__name__)

    # Dynamically load config based on environment
    env = os.getenv('FLASK_ENV', 'development').lower()
    if env == 'production':
        app.config.from_object(ProductionConfig)
    else:
        app.config.from_object(DevelopmentConfig)

    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    Migrate(app, db)

    # Register blueprint
    from .routes import main
    app.register_blueprint(main)

    return app
