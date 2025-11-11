// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    
    // Get references to the HTML elements
    const incomeInput = document.getElementById("gross-annual-income");
    const calcButton = document.getElementById("calculate-housing-btn");
    const resultsDiv = document.getElementById("housing-results");

    // Function to perform the calculation
    function calculateHousing() {
        // 1. Get and validate the input
        const annualIncome = parseFloat(incomeInput.value);

        if (isNaN(annualIncome) || annualIncome <= 0) {
            resultsDiv.innerHTML = "<p style='color: red;'>Please enter a valid annual income.</p>";
            return;
        }

        // 2. Perform calculations based on the provided rules
        const monthlyIncome = annualIncome / 12;

        // Rule 1: 28% Rule (Conservative)
        const conservativeLimit = monthlyIncome * 0.28;

        // Rule 2: 32% GDS Rule (Upper Limit)
        const upperLimit = monthlyIncome * 0.32;

        // 3. Display the results
        resultsDiv.innerHTML = `
            <p>
                <span class="range-label">Conservative Budget (28% Rule):</span>
                <br>
                <span class="amount">$${conservativeLimit.toFixed(2)} / month</span>
            </p>
            <p>
                <span class="range-label">Upper Limit (32% GDS Ratio):</span>
                <br>
                <span class="amount">$${upperLimit.toFixed(2)} / month</span>
            </p>
            <hr>
            <p><small><strong>Note:</strong> This recommended amount typically includes mortgage principal, interest, property taxes, heating, and condo fees.</small></p>
        `;
    }

    // 4. Add event listener to the button
    // Check if the button exists before adding listener
    if (calcButton) {
        calcButton.addEventListener("click", calculateHousing);
    }

    // 5. Optional: Allow pressing 'Enter' to calculate
    // Check if the input exists before adding listener
    if (incomeInput) {
        incomeInput.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                calculateHousing();
            }
        });
    }
});
