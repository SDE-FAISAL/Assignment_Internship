import { useState } from 'react';

import PlacesCard from '../../../utils/Cards/card3/PlacesCard'
import ShowMore from '../../../utils/Cards/card3/ShowMore'

import css from './PopularPlaces.module.css';

let PopularPlaces = () => {
    let [showMore, setShowMore] = useState();
    return <div className={css.outerDiv}>
        <div className={css.title}><span className={css.titleTxt}>Popular localities in and around</span> <span className={css.bld}>Delhi</span></div>
        <div className={css.placesCards}>
            <PlacesCard place=" Old Delhi" count="421" link='/ Old Delhi' />
            <PlacesCard place="Khan Market" count="421" link='/Khan Market' />
            <PlacesCard place="Jama Masjid" count="421" link='/Jama Masjid' />
            <PlacesCard place="Connaught Place" count="421" link='/Connaught Place' />
            <PlacesCard place="Sarojini Nagar" count="421" link='/Sarojini Nagar' />
            <ShowMore setShowMore={setShowMore} />
        </div>
    </div>
}

export default PopularPlaces;