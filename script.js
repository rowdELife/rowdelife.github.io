// Sample data with additional "status", "platform", and "socials" fields
const gamersData = [
    { name: "Lightstarjo", role: "Co-IGL, Fragger, Support", legends: "Seer, Valkyrie, Bangalore, Horizon, Catalyst", input: "Controller", experience: "5x ALGS Finals, 2x ALGS Semi-Finals", status: "LFT, Coaching", socials: { twitter: "https://twitter.com/Lightstarjo", discord: "Lightstarjo" } },
    { name: "rowdELife", role: "IGL", legends: "Bangalore, Seer, Catalyst, Wraith, Valkyrie", input: "Keyboard", experience: "1x LCQ, 6x ALGS Finals", status: "LFT, Coaching, Analyst", socials: { twitter: "https://twitter.com/rowdelifettv", discord: "rowdELife" } },
    { name: "bunkwavi", role: "IGL", legends: "Horizon, Gibraltar, Seer", input: "Keyboard", experience: "1x LCQ, 3x ALGS Finals", status: "N/A", socials: { twitter: "https://twitter.com/bunkwavi", discord: "Player3#9012" } },
    { name: "dreamerson", role: "Co-IGL, Fragger, Support", legends: "Horizon, Catalyst, Bangalore, Valkyrie, Seer", input: "Controller", experience: "N/A", status: "LFT", socials: { twitter: "https://twitter.com/ff_dreamerson", discord: "Player4#3456" } },
    { name: "ShopzGG", role: "Fragger", legends: "Seer, Horizon, Mad Maggie, Pathfinder, Catalyst", input: "Keyboard", experience: "1x ALGS Semi-Finals, 2x ALGS Quarter-Finals", status: "LFT", socials: { twitter: "https://twitter.com/ShopzGG", discord: "ShopzGG" } },
    { name: "Itsfujitora", role: "IGL, Co-IGL, Support", legends: "Seer, Bang, Catalyst, Horizon", input: "Keyboard", experience: "2x Quarter-Finals", status: "LFT, LF1", socials: { twitter: "https://twitter.com/itsfujitora", discord: "itsFujitora" } },
    { name: "Animal", role: "Igl, Fragger", legends: "", input: "Keyboard", experience: "N/A", status: "LFT", socials: { twitter: "https://twitter.com", discord: "animaltheotaku" } },
    { name: "Atlantabraves8", role: "Support", legends: "Bangalore, Bloodhound", input: "Controller", experience: "N/A", status: "N/A", socials: { twitter: "https://twitter.com/Atlantabraves8", discord: "" } },
    { name: "FluxxSan", role: "Co-IGL, Support", legends: "Bangalore, Catalyst, Horizon, Seer", input: "Keyboard", experience: "2x LCQ, 7x ALGS Finals", status: "LFT, LF1", socials: { twitter: "https://twitter.com/Fluxxsan", discord: "" } },
    { name: "DraMa", role: "Fragger", legends: "Valkyrie, Horizon, Wraith, Seer, Catalyst", input: "Controller", experience: "2x ALGS Semi-Finals", status: "LFT", socials: { twitter: "https://twitter.com/dramanthony", discord: "" } },
    { name: "wraiLs", role: "Fragger, Support", legends: "Catalyst, Rampart, Valkyrie, Horizon, Bangalore", input: "Controller", experience: "1x ALGS Semi-Finals, 3x ALGS Quarter-Finals", status: "LFT", socials: { twitter: "https://twitter.com/wrailss", discord: "" } },
    { name: "HOMRA", role: "IGL", legends: "Horizon, Seer, Valkyrie, Catalyst, Bangalore, Bloodhound, Gibraltar, Caustic", input: "Keyboard", experience: "2x ALGS Quarter-Finals", status: "LF1", socials: { twitter: "https://twitter.com/Homra", discord: "HOMRA" } },
    { name: "ImSlumpX", role: "Co-IGL, Fragger, Support", legends: "Bangalore, Seer, Horizon, Catalyst, Crypto, Wattson", input: "Keyboard", experience: "1x ALGS Semi-Finals, 9x ALGS Quarter-Finals", status: "LFT", socials: { twitter: "https://twitter.com/ImSlumptX", discord: "ImSlumptX" } },
    { name: "Floop", role: "IGL, Support", legends: "Seer, Crypto, Bangalore", input: "Keyboard", experience: "1x ALGS Finals, 2x ALGS Semi-Finals, 2x ALGS Quarter-Finals", status: "LFT", socials: { twitter: "https://twitter.com/Floop_NJ", discord: "Floop NJ" } },
    { name: "Mindx", role: "Co-IGL, Fragger", legends: "Horizon, Catalyst, Valkyrie", input: "Controller", experience: "2x ALGS Quarter-Finals", status: "LFT", socials: { twitter: "https://twitter.com/itsmindx", discord: "mindx" } },
    { name: "Twitch qFryu", role: "Fragger, Support", legends: "Horizon, Catalyst, Seer", input: "Controller", experience: "1x ALGS Quarter-Finals", status: "LFT", socials: { twitter: "https://twitter.com", discord: "speedybike44" } },
    { name: "ImOrsini", role: "IGL, Co-IGL, Fragger", legends: "Catalayst, Horizon, Bangalore, Bloodhound", input: "Controller", experience: "2x ALGS Semi-Finals", status: "LFT, LF1", socials: { twitter: "https://twitter.com/NotOrsini", discord: "ImOrsini" } },
    { name: "SkalonydeTTV", role: "IGL, Co-IGL", legends: "Seer, Valkyrie", input: "Keyboard", experience: "N/A", status: "LFT", socials: { twitter: "https://twitter.com", discord: "Skalonyde" } },
    // Add more data here...
];

// Function to generate table rows based on the data
function generateTableRows(data) {
    const tableBody = document.querySelector("#gamersTable tbody");
    tableBody.innerHTML = "";

    data.forEach((gamer) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${gamer.name}</td>
            <td>${gamer.role}</td>
            <td>${gamer.legends}</td>
            <td>${gamer.input} ${gamer.input === "Keyboard" ? '<i class="fas fa-keyboard"></i>' : '<i class="fas fa-gamepad"></i>'}</td>
            <td>${gamer.experience}</td>
            <td>${gamer.status}</td>
            <td>
                <a href="${gamer.socials.twitter}" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="https://discord.com/users/${gamer.socials.discord}" target="_blank" class="social-icon"><i class="fab fa-discord"></i></a>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to apply filters to the data
function applyFilters() {
    const nameFilter = document.querySelector("#name").value.toLowerCase();
    const roleFilter = document.querySelector("#role").value.toLowerCase();
    const legendsFilter = document.querySelector("#legends").value.toLowerCase();
    const inputFilter = document.querySelector("#input").value.toLowerCase();
    const experienceFilter = document.querySelector("#experience").value.toLowerCase();
    const statusFilter = document.querySelector("#status").value.toLowerCase();

    const filteredData = gamersData.filter((gamer) => {
        const nameMatch = gamer.name.toLowerCase().includes(nameFilter);
        const roleMatch = gamer.role.toLowerCase().includes(roleFilter);
        const legendsMatch = gamer.legends.toLowerCase().includes(legendsFilter);
        const inputMatch = gamer.input.toLowerCase().includes(inputFilter);
        const experienceMatch = gamer.experience.toLowerCase().includes(experienceFilter);
        const statusMatch = gamer.status.toLowerCase().includes(statusFilter);
        return nameMatch && roleMatch && legendsMatch && inputMatch && experienceMatch && statusMatch;
    });

    generateTableRows(filteredData);
}

// Function to clear filters and show all data
function clearFilters() {
    document.querySelector("#name").value = "";
    document.querySelector("#role").value = "";
    document.querySelector("#legends").value = "";
    document.querySelector("#input").value = "";
    document.querySelector("#experience").value = "";
    document.querySelector("#status").value = "";
    applyFilters(); // After clearing, reapply the filters to show all data
}

// Function to update the icon next to the "Input" filter
function updateInputIcon() {
    const inputFilter = document.querySelector("#input").value.toLowerCase();
    const inputIcon = document.querySelector("#input-icon");

    if (inputFilter === "keyboard") {
        inputIcon.innerHTML = '<i class="fas fa-keyboard"></i>';
    } else if (inputFilter === "controller") {
        inputIcon.innerHTML = '<i class="fas fa-gamepad"></i>';
    } else {
        inputIcon.innerHTML = '';
    }
}

// Event listeners for filter inputs and clear button
document.querySelector("#name").addEventListener("input", applyFilters);
document.querySelector("#role").addEventListener("change", applyFilters);
document.querySelector("#legends").addEventListener("change", applyFilters);
document.querySelector("#input").addEventListener("change", () => {
    applyFilters();
    updateInputIcon(); // Update the icon when the input filter changes
});
document.querySelector("#experience").addEventListener("change", applyFilters);
document.querySelector("#status").addEventListener("change", applyFilters);
document.querySelector("#clearFilters").addEventListener("click", clearFilters);

// Initial data generation on page load
generateTableRows(gamersData);
updateInputIcon(); // Update the icon on page load
