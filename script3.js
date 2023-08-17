
function calculateBMR() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityFactor = parseFloat(document.getElementById('activity').value);

    if (!isNaN(age) && !isNaN(weight) && !isNaN(height) && !isNaN(activityFactor)) {
        const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        const adjustedBMR = bmr * activityFactor;

        document.getElementById('bmr-result').textContent = `BMR: ${bmr.toFixed(2)}`;
        document.getElementById('adjusted-bmr').textContent = `Adjusted BMR: ${adjustedBMR.toFixed(2)}`;
    } else {
        document.getElementById('bmr-result').textContent = '';
        document.getElementById('adjusted-bmr').textContent = 'Please enter valid values.';
    }
}
// meal planner

const healthyMeals = {
    Monday: [
        {
            breakfast: 'Greek yogurt with berries and nuts',
            lunch: 'Grilled chicken salad with mixed greens and vinaigrette',
            dinner: 'Baked salmon with quinoa and steamed broccoli'
        },
        {
            breakfast: 'Oatmeal with banana and almond butter',
            lunch: 'Quinoa and black bean bowl with avocado',
            dinner: 'Stir-fried tofu with brown rice and vegetables'
        }
    ],
    Tuesday: [
        {
            breakfast: 'Scrambled eggs with spinach and whole grain toast',
            lunch: 'Turkey and avocado wrap with a side salad',
            dinner: 'Grilled shrimp with asparagus and sweet potatoes'
        },
        {
            breakfast: 'Smoothie with spinach, banana, berries, and almond milk',
            lunch: 'Salmon and quinoa-stuffed bell peppers',
            dinner: 'Baked chicken with roasted Brussels sprouts and quinoa'
        }
    ],
    Wednesday: [
        {
            breakfast: 'Avocado toast with poached eggs',
            lunch: 'Spinach and mixed greens salad with grilled chicken',
            dinner: 'Grilled steak with roasted vegetables and brown rice'
        },
        {
            breakfast: 'Fruit salad with cottage cheese and nuts',
            lunch: 'Mediterranean-style hummus and veggie wrap',
            dinner: 'Baked fish with quinoa and a side of steamed greens'
        }
    ],
    Thursday: [
        {
            breakfast: 'Smoothie with spinach, banana, berries, and almond milk',
            lunch: 'Salmon and quinoa-stuffed bell peppers',
            dinner: 'Baked chicken with roasted Brussels sprouts and quinoa'
        },
        {
            breakfast: 'Greek yogurt parfait with granola and honey',
            lunch: 'Chickpea and vegetable stir-fry',
            dinner: 'Veggie burger with a side of mixed vegetables'
        }
    ],
    Friday: [
        {
            breakfast: 'Whole grain pancakes with fresh fruit',
            lunch: 'Chickpea and vegetable stir-fry',
            dinner: 'Veggie burger with a side of mixed vegetables'
        },
        {
            breakfast: 'Scrambled eggs with spinach and whole grain toast',
            lunch: 'Turkey and avocado wrap with a side salad',
            dinner: 'Grilled shrimp with asparagus and sweet potatoes'
        }
    ],
    Saturday: [
        {
            breakfast: 'Fruit salad with cottage cheese and nuts',
            lunch: 'Mediterranean-style hummus and veggie wrap',
            dinner: 'Baked fish with quinoa and a side of steamed greens'
        },
        {
            breakfast: 'Greek yogurt with berries and nuts',
            lunch: 'Grilled chicken salad with mixed greens and vinaigrette',
            dinner: 'Baked salmon with quinoa and steamed broccoli'
        }
    ],
    Sunday: [
        {
            breakfast: 'Oatmeal with banana and almond butter',
            lunch: 'Quinoa and black bean bowl with avocado',
            dinner: 'Stir-fried tofu with brown rice and vegetables'
        },
        {
            breakfast: 'Smoothie with spinach, banana, berries, and almond milk',
            lunch: 'Salmon and quinoa-stuffed bell peppers',
            dinner: 'Baked chicken with roasted Brussels sprouts and quinoa'
        }
    ]
};

function generateRandomMealPlan(meals) {
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
}

function generateMealPlan() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const mealPlan = document.getElementById('meal-plan');
    mealPlan.innerHTML = ''; // Clear previous content
    
    for (const day of days) {
        const randomMeals = healthyMeals[day];
        const dayMeals = generateRandomMealPlan(randomMeals);
        
        const dayPlan = document.createElement('div');
        dayPlan.innerHTML = `<p><strong>${day}:</strong></p><ul><li>Breakfast: ${dayMeals.breakfast}</li><li>Lunch: ${dayMeals.lunch}</li><li>Dinner: ${dayMeals.dinner}</li></ul>`;
        
        mealPlan.appendChild(dayPlan);
    }
}

