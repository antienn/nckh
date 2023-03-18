const showAllViolent = (list, root) => {
    root.innerHTML = list.slice(0,list.length).map(e => `
        <div class="card">
            <img src="${e.urlimage}" alt="">
            <div class="card_license">   
                ${e.licensePlate}
            </div>
            <div class="card_date">
                Date: ${e.date}
            </div>
            <div class="card_speed">
                Speed Violation: ${e.speed}
            </div>
        </div>
    `).join("")
}