import React from 'react';
import BlogPost from "./BlogPost";
import image from '../../../images/Базовые станции/12ыу.jpg'
import image2 from '../../../images/blog-post-img.png'
import image3 from '../../../images/Базовые станции/IMG_20210919_160343.jpg'
import image4 from '../../../images/Базовые станции/IMG_20210919_160334.jpg'

let items = ["Item 1", "Item 2", "Item 3"];

let listHTML = "<ul>";
items.forEach(item => {
    listHTML += `<li>${item}</li>`;
});
listHTML += "</ul>";
const AutomaticScanningPost = ({ post }) => {
    const content = [
        {
            type: 'subheading',
            text: 'Компания ООО «Градиент» успешно занимается установкой GNSS инфраструктуры.'
        },
        {
            type: 'paragraph',
            text: 'На месторождениях разной удаленности дуг от друга устанавливаются постоянно-действующие базовые станции с привязкой к пунктам ОМС и ГГС, станции регистрируются в Федеральном фонде пространственных данных. Созданная инфраструктура, позволяет службе главного маркшейдера реализовывать ряд преимуществ:'
        },
        {
            type: 'paragraph',
            text: <ul>
                <li>Получить автоматизированное обеспечение спутниковыми данными при выполнении топографо-геодезических работ.</li>
                <li>Существенно снизить затраты на полевые работы, повысить скорость их выполнения.</li>
                <li>Вести внедрение современного оборудования и технологий на предприятиях.</li>
                <li>Повышение производительности и оперативности выполнения всех видов маркшейдерских, геодезических, кадастровых и строительных работ.</li>
                <li>На всей территории деятельности предприятия обеспечивается единая точность измерений в единой системе координат в реальном времени.</li>
                <li>Включение GNNS инфраструктуры в состав проектов наблюдений на Геодинамических полигонах за сдвижением горных пород и земной поверхности на подрабатываемых территориях (В соответствии с методическим документом М-01.06-07).</li>
                <li>Возможность использования специализированных сервисов для автоматического деформационного мониторинга.</li>
            </ul>
        },
        {
            type: 'subheading',
            text: 'Наши проекты'
        },
        {
            type: 'subheading',
            text: '2018 год'
        },
        {
            type: 'paragraph',
            text: 'Выполнение комплекса работ по развитию маркшейдерской опорной сети базовых станций ГЛОНАСС/GPS/Galileo на территории Вынгаяхинского и Еты-Пуровского лицензионных участков АО «ГАЗПРОМНЕФТЬ-ННГ».'
        },
        {
            type: 'image',
            url: image2,
            alt: 'Example image',
        },

        {
            type: 'subheading',
            text: '2019 год'
        },
        {
            type: 'paragraph',
            text: 'Выполнение работ по созданию центра управления сетью (ЦУС) дифференциально геодезических станций (ДГС) ПАО «Газпром нефть» в соответствии с техническим проектом геодезической сети специального назначения 2018 года на территории производственно-хозяйственной деятельности ПАО «Газпром нефть».'
        },
        {
            type: 'image',
            url: image3,
            alt: 'Example image',
        },

        {
            type: 'subheading',
            text: '2021 год'
        },
        {
            type: 'paragraph',
            text: 'Работы по созданию сети постоянно действующих базовых станций (референц-станций). Уравнивание и регистрация местных систем координат с ключами перехода на новую систему координат ГСК-2011 для ЗФ ПАО «ГМК «Норильский никель» и вводу в эксплуатацию Системы.'
        },
        {
            type: 'image',
            url: image4,
            alt: 'Example image',
        },
    ];

    return (
        <BlogPost
            title="Базовые станции"
            content={content}
            imageUrl={image}
            date="April 10, 2023"
        />
    );
};


export default AutomaticScanningPost;