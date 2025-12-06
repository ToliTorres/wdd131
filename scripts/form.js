// Display current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// Product list
const products = [
    { id: "rt-001", name: "Basic Home Router", averagerating: 4.3 },
    { id: "sw-002", name: "8-Port Ethernet Switch", averagerating: 4.4 },
    { id: "ap-003", name: "Wireless Access Point", averagerating: 4.2 },
    { id: "mo-004", name: "Cable Modem", averagerating: 4.1 },
    { id: "rp-005", name: "WiFi Range Extender", averagerating: 4.0 },
    { id: "mc-006", name: "Ethernet Media Converter", averagerating: 4.1 },
    { id: "pi-007", name: "PoE Injector", averagerating: 4.0 },
    { id: "nc-008", name: "USB Network Adapter", averagerating: 4.2 },
    { id: "pa-009", name: "Patch Panel 24-Port", averagerating: 4.3 },
    { id: "ct-010", name: "Cable Tester", averagerating: 4.5 }
];

// Select options dynamically
const select = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});