const medicines = [
    { name: "Paracetamol", description: "Pain reliever and fever reducer" },
    { name: "Ibuprofen", description: "Anti-inflammatory and pain reliever" },
    { name: "Aspirin", description: "Pain relief and blood thinner" },
    { name: "Amoxicillin", description: "Antibiotic used to treat bacterial infections" },
    { name: "Ciprofloxacin", description: "Broad-spectrum antibiotic" },
    { name: "Metformin", description: "Used to control blood sugar in type 2 diabetes" },
    { name: "Omeprazole", description: "Reduces stomach acid; used for ulcers and GERD" },
    { name: "Loratadine", description: "Antihistamine for allergy relief" },
    { name: "Cetirizine", description: "Allergy medication that reduces histamine" },
    { name: "Salbutamol", description: "Bronchodilator used for asthma relief" },
    { name: "Prednisone", description: "Corticosteroid to reduce inflammation" },
    { name: "Amlodipine", description: "Used to treat high blood pressure and chest pain" },
    { name: "Losartan", description: "Helps lower blood pressure" },
    { name: "Atorvastatin", description: "Lowers cholesterol levels" },
    { name: "Clopidogrel", description: "Prevents blood clots; often used after heart attack" },
    { name: "Doxycycline", description: "Antibiotic for bacterial infections including acne" },
    { name: "Azithromycin", description: "Antibiotic used for respiratory and skin infections" },
    { name: "Insulin", description: "Hormone used to manage blood sugar in diabetes" },
    { name: "Furosemide", description: "Diuretic used to treat fluid retention and hypertension" },
    { name: "Ranitidine", description: "Reduces stomach acid (Note: withdrawn in some countries)" },
    { name: "Hydroxychloroquine", description: "Used for malaria and autoimmune diseases" },
    { name: "Montelukast", description: "Used to control and prevent asthma symptoms" },
    { name: "Warfarin", description: "Anticoagulant used to prevent blood clots" }
];


function displayMedicines(searchTerm = "") {
    const medicineList = document.getElementById("medicineList");
    if (!medicineList) {
        console.error("Medicine list container not found!");
        return;
    }
    medicineList.innerHTML = "";

    const filteredMedicines = medicines.filter(medicine =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredMedicines.length === 0) {
        medicineList.innerHTML = '<p class="no-results">No medicines found.</p>';
        return;
    }

    filteredMedicines.forEach((medicine, index) => {
        const card = document.createElement("div");
        card.className = "medicine-card";
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <h3>${medicine.name}</h3>
            <p>${medicine.description}</p>
            <div class="quantity-selector">
                <input type="number" min="1" value="1" id="quantity-${medicine.name}" aria-label="Quantity for ${medicine.name}">
                <button onclick="buyMedicine('${medicine.name}')" class="buy-button" aria-label="Buy ${medicine.name}">
                    <span>Buy</span>
                    <span class="cart-icon">🛒</span>
                </button>
            </div>
        `;
        medicineList.appendChild(card);
    });
}

function buyMedicine(medicineName) {
    const quantityInput = document.getElementById(`quantity-${medicineName}`);
    if (!quantityInput) {
        console.error(`Quantity input for ${medicineName} not found!`);
        return;
    }
    const quantity = quantityInput.value;
    alert(`Added ${quantity} unit(s) of ${medicineName} to your cart!`);
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("medicineSearch");
    if (searchInput) {
        searchInput.addEventListener("input", () => displayMedicines(searchInput.value));
    } else {
        console.error("Medicine search input not found!");
    }
    displayMedicines();
});