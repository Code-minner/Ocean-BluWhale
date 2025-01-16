from app import create_app, db
from app.models import Product   # Adjust the import based on your folder structure

# Create the Flask app context
app = create_app()
app.app_context().push()


def seed_products():

    # Clear existing data
   # print("Clearing existing data...")
   # db.session.query(Product).delete()
   # db.session.commit()

    # New product data

    products = [
        Product(
            custom_id="product1",
            name="Body Camera Pen",
            description="1080P Camera Pen, 64GB Mini Nanny Camera, Body Cam with Loop Recording, Taking Photo, Rechargeable Video Camera for Baby & Pet Monitor, Office-One Button Surveillance Camera.",
            description2="This discreet 1080P HD camera pen features one-click operation for video and photo capture, with a 64GB SD card for ample storage and loop recording. The rechargeable battery provides 150 minutes of recording time. Easily clips to clothing or conceals in everyday objects for home or office monitoring. Compatible with Mac/PC and includes lifetime warranty support.",
            price=36,
            image_url="https://m.media-amazon.com/images/I/61QWNq5CrHL._AC_SL1500_.jpg",
            category="Pen"),

        Product(
            custom_id="product2",
            name="Camera Power Bank",
            description="Security Camera Detector Power Bank, Hidden Surveillance 1080P Mini Camera with Loop Recording, Night Vision, 5000mAh Battery Rechargeable Power Bank Camera",
            description2="This 1080P HD mini camera doubles as a 5000mAh power bank, featuring night vision with dual infrared lights and wide-angle lens. The ultra-thin device (4.9'× 2.8'× 0.4') offers 12-hour continuous recording with loop functionality, and supports 8G-64GB SD cards. No network connection required for operation. Can charge Android and iPhone devices while recording. Perfect for home security monitoring and capturing family moments.",
            price=66,
            image_url="https://m.media-amazon.com/images/I/71L8mdDp0QL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            category="Camera"),

        Product(
            custom_id="product3",
            name="Hidden Camera Detectors",
            description="Hidden Camera Detectors, Portable Anti Spy Camera Finder GPS Tracker Detector for Travel, Hotels, Car",
            description2="This professional-grade hidden camera detector features powerful detection capabilities with a 1MHz-6.5GHz frequency range and scanning speeds of 2000 times per second, effective from 5cm to 15m. It offers four detection modes: 2.4G signal, camera, full-band, and red infrared, with six adjustable sensitivity levels for precise control. The user-friendly design requires simple button operations for mode and sensitivity adjustments. Ideal for scanning hotels, offices, conference rooms, and public spaces for surveillance devices, this portable detector helps safeguard personal privacy.",
            price=35,
            image_url="https://m.media-amazon.com/images/I/71DdwayK+oL._AC_SY300_SX300_.jpg",
            category="Detector"),

        Product(
            custom_id="product4",
            name="Invisible Ink Pen",
            description="Invisible Ink Pen, Spy Pen with 3 PCS Mini UV LED Keychain Flashlight, Disappearing Ink Magic Pen with Black Light Markers for Secret Notes, Fit for Christmas Halloween Holiday Gifts (3 PCS)",
            description2="These invisible ink pens feature special ink that's hidden in normal light but reveals vibrant colors under UV light. The set includes three pens (blue, pink, and yellow) and three UV LED keychain lights. Perfect for creating secret messages on paper, fabric, or skin. The UV lights double as currency detectors for major currencies including USD, EUR, and GBP. Ideal for parties, treasure hunts, and creative activities.",
            price=40,
            image_url="https://m.media-amazon.com/images/I/61scnm+Bw6L._AC_SY300_SX300_.jpg",
            category="Pen"),

        Product(
            custom_id="product5",
            name="Monocular Telescope",
            description="16X52 Monocular Telescope High Powered for Adults, 2023 Power Prism Compact Monoculars for Adults,HD Monocular Scope for Gifts, Outdoor Activity,Bird Watching,Hiking,Concert,Travelling",
            description2="This 16x52 HD monocular telescope features BAK-4 prism and fully multi-coated SMC green lens technology, delivering 99.8% light transmittance for superior clarity and brightness. With a 52mm objective lens and manual focus, it provides clear low-light viewing. The nitrogen-filled, waterproof and fog-proof design ensures all-weather durability. Perfect for bird watching, sports events, concerts, and outdoor activities. Includes single-hand operation for easy viewing.",
            price=100,
            image_url="https://m.media-amazon.com/images/I/71Cv0hIckCS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            category="Telescope"),

        Product(
            custom_id="product6",
            name="Screen Body Camera",
            description="【Upgraded】1.4” Screen Body Camera with Audio and Auto Video Night Vision 1080P FHD Mini Police Wearable Body Worn Cam Portable Small Personal Camcorder Sport Action Outdoor Video Recorder (128GB)",
            description2="This compact 1080P mini body camera features a 180° rotatable lens, 1.4 screen, and motion detection with night vision. Offering 6 hours of battery life and extensive storage, it supports continuous recording while charging. Multiple recording modes include loop, motion, and audio capture. Includes a 140db alarm with flashing strobe for safety. Easily review footage via built-in screen, PC connection, or removable memory card. Ideal for outdoor activities and security monitoring.",
            price=39,
            image_url="https://m.media-amazon.com/images/I/71ZHHWGi3bL._AC_SX425_.jpg",
            category="Camera"),

        Product(
            custom_id="product7",
            name="HD Smart Glasses Recording",
            description="Camera Glasses Video Glasses HD Smart Glasses Recording Outdoor Sport Glasses with Camera Wearable Eyeglass Built-in 32G Memory Card.",
            description2="These HD 1080P camera glasses feature one-button operation and 32GB storage with loop recording capability. With 90-minute battery life, videos are saved in 10-minute segments. Compatible with various computers and laptops (requires video player for MAC/Apple). Perfect for capturing moments while hiking, driving, or watching events. Features adjustable design, 360mAh lithium polymer battery, and SD card connectivity. Includes 1-year replacement warranty.",
            price=46,
            image_url="https://m.media-amazon.com/images/I/51LkDtcfAZL._AC_SX425_.jpg",
            category="Glasses"),

        Product(
            custom_id="product8",
            name="Pirate Monocular Telescope",
            description="Pirate Monocular Telescope, 25x30 High Powered Zoomable Collapsible Monocular Brass Spyglass Handheld Waterproof Telescope Monocular for Bird Watching Hunting Hiking Travelling.",
            description2="This premium brass telescope features an aluminum-alloy gold-plated design with leather grip. With 25x30mm magnification and 270ft/1000yd field of view, this portable, collapsible monocular is ideal for outdoor activities. Package includes telescope, poncho, lens cloth, and manual. Full satisfaction guaranteed.",
            price=22,
            image_url="https://m.media-amazon.com/images/I/51Q1QtHEYmL._AC_SX425_.jpg",
            category="Telescope"),

        # Add more products here
    ]

    # Add and commit products to the database
    db.session.bulk_save_objects(products)
    db.session.commit()
    print("Database seeded successfully!")


if __name__ == "__main__":
    seed_products()
