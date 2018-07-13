let requirements = new Map();
requirements.set('requirement_wifi', { title: 'Internet WIFI', icon: 'fa-wifi' });
requirements.set('requirement_animaux_autorises', { title: 'Animaux Autorisés', icon: 'fa-paw' });
requirements.set('requirement_tv', { title: 'TV', icon: 'fa-television' });
requirements.set('requirement_cuisine', { title: 'Cuisine', icon: 'fa-cutlery' });
requirements.set('requirement_petitdej', { title: 'Petit Dej', icon: 'fa-coffee' });
requirements.set('requirement_laptop', { title: 'Emplacement pour Laptop', icon: 'fa-laptop' });

let prices = new Map();
prices.set('prix_par_nuit', 'Par nuit');
prices.set('prix_extra_personne', 'Personne en plus');
prices.set('prix_reduction_semaine', 'Reduction Semaine');
prices.set('prix_reduction_mois', 'Reduction Mois');

let remplirRequirement_et_prix = function (state) {
    if (!state) return {};
    var obj = {
        id: state.id,
        title: state.title,
        address: state.address,
        about: state.about,
        requirements: [],
        prices: [],
        images: []
    };
    for (let key in state) {
        let arr = key.split("_");
        if (arr[0] === 'requirement' && state[key]) {
            console.log('requirement');
            obj.requirements.push(key);
        }
        if (arr[0] === 'price') {
            console.log('price');
            obj.prices.push({ title: key, value: state[key] });
        }
        if (arr[0] === 'image') {
            console.log('image');
            obj.images.push(state[key]);
        }
    }

    obj.requirements = obj.requirements.map(item => requirements.get(item));

    obj.prices = obj.prices.map(item => {
        item.title = prices.get(item.title);
        return item;
   // obj.images = obj.images.map(item => images.get(item));
    });
   // var_dump (obj);
    return obj;
};

export { remplirRequirement_et_prix };