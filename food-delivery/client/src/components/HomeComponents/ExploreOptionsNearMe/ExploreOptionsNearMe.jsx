import CollapsableCard from '../../../utils/Cards/CollapsableCard/CollapsableCard'

import css from './ExploreOptionsNearMe.module.css';

let ExploreOptionsNearMe = () => {
    let chain = ['Bukhara', 'Rajinder De Dhaba','Indian Accent', 'Karim', ' Town Hall', 'Café Lota', ' Cafe StayWoke',  'Diggin (CP)', 'Aquila', 'Bo-Tai Switch','Colocal “The Cacao Artisans”', 'Cest La Vie', ' Kiko-Bā', 'Plate', 'Coco N Chilli', 'Mai Bao', 'The Big Tree Cafe']
    let rest = ['New Delhi', 'Old Delhi','Shahjehabanad', 'Shergarh', 'Firozabad', 'Tughlakabad', ' Siri',  'CP', 'Mehrauli','show more']
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Explore options near me</div>
            <div className={css.cards}>
                <CollapsableCard title="Top Restaurant" content={chain} />
                <CollapsableCard title="Cities We Deliver" content={rest} />
            </div>
        </div>
    </div>
}

export default ExploreOptionsNearMe;