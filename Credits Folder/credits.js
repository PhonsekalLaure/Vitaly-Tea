document.addEventListener('DOMContentLoaded', function() {
    const creditBoxes = document.querySelectorAll('.credit-box');
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.innerHTML = `
        <div id="modal-content">
            <span id="close-modal">&times;</span>
            <div id="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalContent = {
        home: `
            <h2>Home</h2>
            <ul>
                <li><a href="https://www.vecteezy.com/photo/24654585-business-success-with-modern-technology-and-equipment-generated-by-ai" target="_blank">Carousel Slide 1</a></li>
                <li><a href="https://www.vecteezy.com/photo/7451684-coffee-time-with-coffee-sandwiches-ham-and-cheese" target="_blank">Carousel Slide 2</a></li>
                <li><a href="https://www.vecteezy.com/photo/2807389-abstract-blur-coffee-shop-interior" target="_blank">Carousel Slide 3</a></li>
                <li><a href="https://www.thekitchn.com/tuna-melt-recipe-23573077" target="_blank">Tuna Melt Sandwich</a></li>
                <li><a href="https://destinationksa.com/en/warm-up-best-winter-eats-and-drinks/" target="_blank">Vitaly Tea Special</a></li>
                <li><a href="https://www.shutterstock.com/image-photo/couple-working-coffee-shop-749143570" target="_blank">Service Image</a></li>
            </ul>
        `,
        services: `
            <h2>Services</h2>
            <ul>
                <li><a href="https://www.flaticon.com/free-icon/photo_13945084" target="_blank">Laminating Image</a></li>
                <li><a href="https://www.flaticon.com/free-icon/print_1339350" target="_blank">Digital Printing Image</a></li>
                <li><a href="https://www.flaticon.com/free-icon/binding_829552" target="_blank">Binding Image</a></li>
                <li><a href="https://www.flaticon.com/free-icon/paper-cut_2557509" target="_blank">Cutting Image</a></li>
            </ul>

            <h4>Digital Printing</h4>
            <ul>
                <li><a href="https://pentagonprinters.com/wp-content/uploads/2019/01/neils-blog-printing-3-1-2.jpg" target="_blank">Carousel Slide 1</a></li>
                <li><a href="https://images.pexels.com/photos/23534042/pexels-photo-23534042.jpeg?cs=srgb&dl=pexels-jakubzerdzicki-23534042.jpg&fm=jpg" target="_blank">Carousel Slide 2</a></li>
                <li><a href="https://static.vecteezy.com/system/resources/previews/056/808/838/non_2x/large-format-printer-producing-vibrant-colorful-prints-free-photo.jpg" target="_blank">Carousel Slide 3</a></li>
                <li><a href="https://artisanhd.com/wp-content/uploads/2017/05/PhotoPaper-FourLight.jpg" target="_blank">Glossy Paper</a></li>
                <li><a href="https://www.francescogola.net/wp-content/uploads/2021/03/Francesco-Gola-Review-Hahnemuhle-Matte-Glossy-Rag-Smooth-Textures-Hemp-Best-Photographic-Fine-Art-Paper-IMG_1029-1.jpg" target="_blank">Matte Paper</a></li>
                <li><a href="https://www.fedex.com/content/dam/fedex/us-united-states/FedEx-Office/images/2021/q1/color-cardstock-paper-samples.jpg" target="_blank">Textured Paper</a></li>
                <li><a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9li5UY1OWS0wlrUFsxPCAtdcb8X5xevHZ88bRCYUgiuw4b0NAOq9t4rPfmXWzLsDXGYE&usqp=CAU" target="_blank">HP Ink</a></li>
                <li><a href="https://cdn-eu.aglty.io/epson/discover/genuine-inks/Genuine-Inks-Hero-Banner-LtR.jpg" target="_blank">Epson Ink</a></li>
                <li><a href="https://i1.adis.ws/i/canon/pixma-g6000-series-tech-inks_9efabea1d2eb44bcb65dc1cbc141ccf4" target="_blank">Canon Ink</a></li>
            </ul>

            <h4>Binding</h4>
            <ul>
                <li><a href="https://static.wixstatic.com/media/bdac11_26ce4117b08346afa6741958c54028be~mv2.png/v1/fill/w_854,h_576,al_c,lg_1,q_90/bdac11_26ce4117b08346afa6741958c54028be~mv2.png" target="_blank">Saddle Stitch</a></li>
                <li><a href="https://cdn11.bigcommerce.com/s-1p4wii2p9w/images/stencil/original/products/748/2680/17281LS-8__66828.1725472534.jpg?c=1" target="_blank">Heated Spine</a></li>
                <li><a href="https://stokeyprintshop.co.uk/wp-content/uploads/2020/09/wire-binding.jpg" target="_blank">Wire</a></li>
            </ul>

            <h4>Laminating</h4>
            <ul>
                <li><a href="https://www.aimmailcenters.com/sites/all/themes/aim_zen/images/views/laminating.jpg" target="_blank">Carousel Slide 1</a></li>
                <li><a href="https://www.absoluteprint.com/wp-content/uploads/2020/11/Lamination-Print-Company-Islington.jpg" target="_blank">Carousel Slide 2</a></li>
                <li><a href="https://d2ngzhadqk6uhe.cloudfront.net/samedayru/images/contentimages/images/laminating_services%20-%20Copy%201.jpg" target="_blank">Carousel Slide 3</a></li>
            </ul>

            <h4>Cutting</h4>
            <ul>
                <li><a href="https://www.celloglas.co.uk/wp-content/uploads/2016/05/FS-Die-Cut-2-664x442.jpg" target="_blank">Carousel Slide 1</a></li>
                <li><a href="https://allegra.ca/wp-content/uploads/2019/04/die-cut.jpg" target="_blank">Carousel Slide 2</a></li>
                <li><a href="https://images.squarespace-cdn.com/content/v1/5720ea43b09f95daf28cba1e/1464892811994-EV8Q90KFNC6LT0NHR1YN/image-asset.jpeg" target="_blank">Carousel Slide 3</a></li>
            </ul>
        `,
        menu: `
            <h2>Menu & Order</h2>
            <h4>Sandwiches</h4>
            <ul>
                <li><a href="https://thebigmansworld.com/spicy-chicken-sandwich-recipe/" target="_blank">Chicken Sandwich</a></li>
                <li><a href="https://wendypolisi.com/blackstone-grilled-cheese/" target="_blank">Grilled Cheese</a></li>
                <li><a href="https://www.facebook.com/hacienda.ranchero/posts/týdenní-polední-menu/2732698336975379/" target="_blank">Club Sandwich</a></li>
                <li><a href="https://blueplatemayo.com/the-spread/2021/05/comfort-foods-a-mothers-love/" target="_blank">BLT Sandwich</a></li>
                <li><a href="https://www.thekitchn.com/tuna-melt-recipe-23573077" target="_blank">Tuna Melt Sandwich</a></li>
                <li><a href="https://www.garlicandzest.com/cold-roast-beef-sandwich-horseradish-cheese/" target="_blank">Roast Beef Sandwich</a></li>
                <li><a href="https://tatyanaseverydayfood.com/breakfast-sausage-sandwich/" target="_blank">Breakfast Sandwich</a></li>
                <li><a href="https://www.allrecipes.com/recipe/20803/monte-cristo-sandwich/" target="_blank">Ham & Cheese Sandwich</a></li>
                <li><a href="https://rachaelsgoodeats.com/loaded-chicken-pesto-panini/" target="_blank">Chicken Pesto</a></li>
                <li><a href="https://www.australianavocados.com.au/recipes/turkey-and-avocado-grilled-cheese-sandwich/" target="_blank">Turkey Avocado</a></li>
            </ul>

            <h4>Drinks</h4>
            <ul>
                <li><a href="https://www.keurig.com/hub/recipes/Iced-Salted-Caramel-Latte">Iced Salted Caramel</a></li>
                <li><a href="https://www.allrecipes.com/recipe/258686/iced-caramel-macchiato/" target="_blank">Iced Caramel Macchiato</a></li>
                <li><a href="https://www.reddit.com/r/AskPH/comments/17twj04/good_coffee_shop_recommendations_around_morayta/">Iced Matcha Latte</a></li>
                <li><a href="https://www.instagram.com/12ouncecafe/p/C-9ifNdPvf4/?locale=ko-KR&hl=af" target="_blank">Milo Dinosaur</a></li>
                <li><a href="https://www.linsfood.com/strawberry-cooler/">Strawberry Lemonade</a></li>
                <li><a href="https://www.pizzaeking.com/products/blue-lagoon-SKU-0342" target="_blank">Blue Lemonade</a></li>
                <li><a href="https://shottbeverages.com/recipe/hazelnut-frappe/">Choco Hazelnut Frappe</a></li>
                <li><a href="https://destinationksa.com/en/warm-up-best-winter-eats-and-drinks/" target="_blank">Vitaly Tea Special</a></li>
                <li><a href="https://eggcellentuae.com/product/spanish-latte-hot-cold-2/" target="_blank">Spanish Latte</a></li>
                <li><a href="https://www.hot-chocolate-machine.com" target="_blank">Cinnamon Hot Chocolate</a></li>
                <li><a href="https://villagepipol.com/five-filipino-comfort-food-after-simbang-gabi/" target="_blank">Classic Hot Chocolate</a></li>
                <li><a href="https://www.tasteslovely.com/whole30-vanilla-latte-coffee/" target="_blank">Vanilla Almond Latte</a></li>
            </ul>
        `,
        contact: `
            <h2>Contact & Footer</h2>
            <ul>
                <li><a href="https://www.flaticon.com/search?word=instagram" target="_blank">Instagram</a></li>
                <li><a href="https://www.flaticon.com/search?word=facebook" target="_blank">Facebook</a></li>
                <li><a href="https://www.flaticon.com/search?word=location" target="_blank">Location</a></li>
                <li><a href="https://www.flaticon.com/search?word=tiktok" target="_blank">TikTok</a></li>
                <li><a href="https://www.freepik.com/free-vector/realistic-front-view-smartphone-mockup-mobile-iphone-purple-frame-with-blank-white-display-vector_33632332.htm#fromView=keyword&page=1&position=0&uuid=79eaabee-3fcb-46ae-b2db-4a6e98275a6e&query=Iphone+Png" target="_blank">Phone Icon</a></li>
            </ul>
        `
    };

    creditBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            const modalBody = document.getElementById('modal-body');
            modalBody.innerHTML = modalContent[page] || '<p>Content not available.</p>';
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10); // Small delay to trigger the transition
        });
    });

    document.getElementById('close-modal').addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 250); // Match the transition duration
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 250); // Match the transition duration
        }
    });
});