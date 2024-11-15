function heroRegister(input) {

    const heroes = [];

    input.forEach(hero => {
        let heroData = hero.split(' / ');

        heroes.push( {hero: heroData[0], level: Number(heroData[1]), items: heroData[2] });
    });

    heroes
        .sort((a, b) => a.level - b.level)
        .forEach(h => {
        console.log(`Hero: ${h.hero}\nlevel => ${h.level}\nitems => ${h.items}`);
    });
}

heroRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])