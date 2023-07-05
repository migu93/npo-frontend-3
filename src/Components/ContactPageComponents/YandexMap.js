// src/YandexMap.js
import React, { useEffect, useRef } from 'react';

const YandexMap = ({ center, zoom, placemark, className }) => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const { ymaps } = window;

        ymaps.ready(() => {
            const map = new ymaps.Map(mapContainer.current, {
                center,
                zoom,
            });

            const officePlacemark = new ymaps.Placemark(placemark, {
                balloonContent: 'Our Office',
            });

            map.geoObjects.add(officePlacemark);
        });
    }, [center, zoom, placemark]);

    return <div ref={mapContainer} className={className} />;
};

export default YandexMap;
