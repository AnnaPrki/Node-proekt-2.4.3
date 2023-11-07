const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger;//посчитал сумму
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger;// определил бонус
    return bonus;
    };

    calculateBonus(3,4)