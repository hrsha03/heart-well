const fieldDescriptions = {
    Age: "Age in years. Typical range: 29-77.",
    Sex: "Sex: 1 = Male, 0 = Female.",
    ChestPainType: "Chest pain type: ATA = Typical angina, NAP = Non-anginal pain, ASY = Asymptomatic, TA = Atypical angina.",
    RestingBP: "Resting blood pressure (mm Hg). Typical range: 94-200.",
    Cholesterol: "Serum cholesterol (mg/dl). Typical range: 126-564.",
    FastingBS: "Fasting blood sugar > 120 mg/dl: Yes = 1, No = 0.",
    RestingECG: "Resting electrocardiographic results: Normal, ST = ST-T wave abnormality, LVH = Left ventricular hypertrophy.",
    MaxHR: "Maximum heart rate achieved. Typical range: 71-202.",
    ExerciseAngina: "Exercise induced angina: Yes = Y, No = N.",
    Oldpeak: "ST depression induced by exercise relative to rest. Typical range: 0.0-6.2.",
    ST_Slope: "Slope of the peak exercise ST segment: Up = Upsloping, Flat = Flat, Down = Downsloping."
};

function showDescription(event, field) {
    var desc = fieldDescriptions[field] || "No description available.";
    var tooltip = document.getElementById('descTooltip');
    tooltip.innerHTML = desc;
    tooltip.style.display = 'block';
    var rect = event.target.getBoundingClientRect();
    var scrollY = window.scrollY || window.pageYOffset;
    tooltip.style.left = (rect.right + 8) + 'px';
    tooltip.style.top = (rect.top + scrollY) + 'px';
}

function hideDescription() {
    var tooltip = document.getElementById('descTooltip');
    tooltip.style.display = 'none';
}

document.getElementById('predictForm').addEventListener('reset', function(event) {
    event.preventDefault(); 
    const form = event.target;
    Array.from(form.elements).forEach(element => {
        if (element.type === 'number' || element.type === 'text') {
            element.value = '';
        }
    });
});
