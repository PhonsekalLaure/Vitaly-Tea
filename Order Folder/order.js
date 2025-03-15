document.getElementById('order').addEventListener('click', function(event) {
    event.preventDefault();
    const digitalPrintingCheckbox = document.getElementById('digital-printing');
    const digitalPrintingSection = document.getElementById('digital-printing-section');
    const bindingCheckbox = document.getElementById('binding');
    const bindingSection = document.getElementById('binding-section');
    const laminatingCheckbox = document.getElementById('laminating');
    const laminatingSection = document.getElementById('laminating-section');
    const cuttingCheckbox = document.getElementById('cutting');
    const cuttingSection = document.getElementById('cutting-section');
    const coldDrinksCheckbox = document.getElementById('cold-drinks');
    const coldDrinksSection = document.getElementById('cold-drinks-section');
    const hotDrinksCheckbox = document.getElementById('hot-drinks');
    const hotDrinksSection = document.getElementById('hot-drinks-section');
    const sandwichesCheckbox = document.getElementById('sandwiches');
    const sandwichesSection = document.getElementById('sandwiches-section');
    const orderFormSection = document.getElementById('OrderForm');
    const checkoutButton = document.getElementById('checkoutb');
    const information = document.getElementById('Info');

    




    digitalPrintingSection.style.display = digitalPrintingCheckbox.checked ? 'block' : 'none';
    bindingSection.style.display = bindingCheckbox.checked ? 'block' : 'none';
    laminatingSection.style.display = laminatingCheckbox.checked ? 'block' : 'none';
    cuttingSection.style.display = cuttingCheckbox.checked ? 'block' : 'none';
    coldDrinksSection.style.display = coldDrinksCheckbox.checked ? 'block' : 'none';
    hotDrinksSection.style.display = hotDrinksCheckbox.checked ? 'block' : 'none';
    sandwichesSection.style.display = sandwichesCheckbox.checked ? 'block' : 'none';

    if (digitalPrintingCheckbox.checked || bindingCheckbox.checked || laminatingCheckbox.checked || cuttingCheckbox.checked || coldDrinksCheckbox.checked || hotDrinksCheckbox.checked || sandwichesCheckbox.checked) {
        orderFormSection.scrollIntoView({ behavior: 'smooth' });
        
        checkoutButton.style.display = 'block';
        information.style.display = 'block';

    }
    else{
        checkoutButton.style.display = 'none';
        information.style.display = 'none';

    }
});


document.getElementById('checkouts').addEventListener('click', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !contact || !address || !email) {
        alert('Please fill out all the information fields.');
        return;
    }

    const receipt = document.createElement('div');
    receipt.classList.add('receipt');

    const items = [
        { id: 'ISCL', name: 'ICED SALTED CARAMEL LATTE', price: 150 },
        { id: 'CHF', name: 'CHOCO HAZELNUT FRAPPE', price: 150 },
        { id: 'ICM', name: 'ICED CARAMEL MACCHIATO', price: 120 },
        { id: 'IML', name: 'ICED MATCHA LATTE', price: 120 },
        { id: 'MD', name: 'MILO DINOSAUR', price: 100 },
        { id: 'SL', name: 'STRAWBERRY LEMONADE', price: 90 },
        { id: 'BL', name: 'BLUE LEMONADE', price: 90 },
        { id: 'VTS', name: 'VITALY TEA SPECIAL', price: 120},
        { id: 'SL', name: 'SPANISH LATTE', price: 120},
        { id: 'CHC', name: 'CINNAMON HOT CHOCOLATE', price: 120},
        { id: 'CHCC', name: 'CLASSIC HOT CHOCOLATE', price: 100},
        { id: 'VAL', name: 'VANILLA ALMOND LATTE', price: 100},
        { id: 'CPP', name: 'CHICKEN PESTO PANINI', price: 120},
        { id: 'RBS', name: 'ROSTED BEEG SANDWICH', price: 120},
        { id: 'TVS', name: 'TURKEY AVOCADO SANDWICH', price: 120},
        { id: 'CS', name: 'CHICKEN SANDWICH', price: 100},
        { id: 'GC', name: 'GRILLED CHEESE', price: 100},
        { id: 'CSW', name: 'CLUB SANDWICH', price: 100},
        { id: 'BS', name: 'BLT SANDWICH', price: 100},
        { id: 'TMS', name: 'TUNA MELT SANDWICH', price: 100},
        { id: 'BSW', name: 'BREAKFAST SANDWICH', price: 100},
        { id: 'HCS', name: 'HAM & CHEESE SANDWICH', price: 100},

    ];

    let receiptContent = `
        <h2>Vitaly Tea</h2>
        <div id="receipt-info">
        <p>Order Summary</p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
        </div>
        <table>
            <tr>
                <td><b>Name:</b> ${name}</td>
                <td><b>Contact:</b> ${contact}</td>
            </tr>
            <tr>
                <td><b>Address:</b> ${address}</td>
                <td><b>Email:</b> ${email}</td>
            </tr>
        </table>
        <table id="receipt-table">
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
    `;

    let total = 0;

    const paperPrices = {
        'Glossy': 10,
        'Matte': 20,
        'Textured': 30
    };

    const inkPrices = {
        'HP': 2,
        'Epson': 5,
        'Canon': 7
    };

    const selectedPaper = document.querySelector('input[name="paper"]:checked');
    const selectedInk = document.querySelector('input[name="ink"]:checked');

    if (selectedPaper && selectedInk) {
        const paperPrice = paperPrices[selectedPaper.value];
        const inkPrice = inkPrices[selectedInk.value];
        var DPCopies = document.getElementById('DigitalPrintingCopies').value;
        const digitalPrintingTotal = 100 + paperPrice + inkPrice;
        const digitalPrintingItemTotal = digitalPrintingTotal * DPCopies;
        total += digitalPrintingItemTotal;

        receiptContent += `
            <tr>
                <td>Digital Printing</td>
                <td>${DPCopies}</td>
                <td>₱${digitalPrintingTotal.toFixed(2)}</td>
                <td>₱${digitalPrintingItemTotal.toFixed(2)}</td>
            </tr>
        `;
    }


    const BindingType = {
        'Wire':20,
        'Saddle Stitch':40,
        'Heated Spine':50
    }

    const selectedBinding = document.querySelector('input[name="binding-type"]:checked');
    if (selectedBinding) {
        const bindingPrice = BindingType[selectedBinding.value];
        var BindingCopies = document.getElementById('BindingCopies').value;
        const bindingTotal = 50 + bindingPrice;
        const bindingItemTotal = bindingTotal * BindingCopies;

        total += bindingItemTotal;

        receiptContent += `
            <tr>
                <td>Binding</td>
                <td>${BindingCopies}</td>
                <td>₱${bindingPrice.toFixed(2)}</td>
                <td>₱${bindingItemTotal.toFixed(2)}</td>
            </tr>
        `;

    }

    const laminatingCopies = document.getElementById('LaminatingCopies').value;
    if (laminatingCopies > 0) {
        const laminatingPrice = 30;
        const laminatingTotal = 30 * laminatingCopies;
        total += laminatingTotal;

        receiptContent += `
            <tr>
                <td>Laminating</td>
                <td>${laminatingCopies}</td>
                <td>₱${laminatingPrice.toFixed(2)}</td>
                <td>₱${laminatingTotal.toFixed(2)}</td>
            </tr>
        `;
    }

    const cuttingCopies = document.getElementById('CuttingCopies').value;
    if (cuttingCopies > 0) {
        const cuttingPrice = 50;
        const cuttingTotal = 50 * cuttingCopies;
        total += cuttingTotal;

        receiptContent += `
            <tr>
                <td>Cutting</td>
                <td>${cuttingCopies}</td>
                <td>₱${cuttingPrice.toFixed(2)}</td>
                <td>₱${cuttingTotal.toFixed(2)}</td>
            </tr>
        `;
    }

    


    items.forEach(item => {
        const quantity = document.getElementById(item.id).value;
        if (quantity > 0) {
            const itemTotal = quantity * item.price;
            total += itemTotal;
            receiptContent += `
                <tr>
                    <td>${item.name}</td>
                    <td>${quantity}</td>
                    <td>₱${item.price.toFixed(2)}</td>
                    <td>₱${itemTotal.toFixed(2)}</td>
                </tr>
            `;
        }
    });

    

    receiptContent += `
            <tr>
                <td colspan="3"><strong>Total</strong></td>
                <td><strong>₱${total.toFixed(2)}</strong></td>
            </tr>
        </table>
        <button id="close-receipt">Close</button>
        <button id="proceed-receipt">Confirm Order</button>
    `;

    receipt.innerHTML = receiptContent;
    document.body.appendChild(receipt);

    document.getElementById('close-receipt').addEventListener('click', function() {
        document.body.removeChild(receipt);
    });

    if (total == 0) {
        alert('Please select at least one item to order.');
        document.body.removeChild(receipt);
    }
    
    else {
        document.getElementById('proceed-receipt').addEventListener('click', function() {
            alert('Your order has been confirmed. Thank you!');
            document.body.removeChild(receipt);
        }
        );
        
    }
    
});

