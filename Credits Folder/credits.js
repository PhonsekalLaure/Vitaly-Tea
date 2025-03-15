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