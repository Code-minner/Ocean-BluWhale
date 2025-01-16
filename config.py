import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'default-secret-key')  # Fallback for development
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevelopmentConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///site.db'
    DEBUG = True

class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')  # Ensure DATABASE_URL is set in production
    DEBUG = False
