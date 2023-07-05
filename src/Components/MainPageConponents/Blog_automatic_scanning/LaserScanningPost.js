import React from 'react';
import BlogPost from "./BlogPost";
import image from '../../../images/Лазерное сканирование/LaserScan1.png'
import image2 from '../../../images/Лазерное сканирование/laserscan2.png'
import image3 from '../../../images/Лазерное сканирование/Скрин Облако точек 1.png'
import image4 from '../../../images/Лазерное сканирование/Скрин Облако точек 2.png'
import image5 from '../../../images/Лазерное сканирование/Скрин Облако точек 3.png'

const LaserScanningPost = ({ post }) => {
    const content = [
        {
            type: 'paragraph',
            text: 'Наземное лазерное сканирование позволяет составить трехмерное изображение местности, зданий, дорог, заводов, сложных сооружений и многих других объектов. Работа лазерного сканера заключается в измерении расстояния от сканера до поверхности объекта с очень высокой скоростью – более двух миллионов точек в секунду, в результате чего получается облако точек, которое затем обрабатывается в программе LEICA CYCLONE REGISTER. С помощью полученных моделей удобно выполнять расчеты при проектировании и обслуживании зданий и сооружений различного назначения, в них содержатся трехмерные чертежи всех частей зданий и сооружений, а также, их коммуникаций. BIM-модели предоставляют возможность работы не только с графическими данными, но и с семантической информацией, что существенно упрощает проектирование и обслуживание зданий.',
        },

        {
            type: 'paragraph',
            text: 'Достоинства наземного лазерного сканирования – это высокая степень автоматизации, детализации и производительности, трехмерная визуализация,  высокая точность измерений.'
        },
        {
            type: 'paragraph',
            text: 'В парке ООО «НПО «Градиент» имеется две сканирующих лазерных системы: немецкий Z+F 5016 и швейцарский LEICA RTC 360.'
        },
        {
            type: 'subheading',
            text: 'Наши проекты'
        },
        {
            type: 'subheading',
            text: '2017 год'
        },
        {
            type: 'paragraph',
            text: 'Выполнение маркшейдерской-геодезической съемки Центрального пункта сбора и куста 108 Харьягинского СРП с подготовкой маркшейдерского плана в масштабе 1:500, Цифровой Модели Местности, Цифровой Модели Рельефа, 3D фотореалистичных панорам в формате Leica TruView. Разработка методики наземного лазерного сканирования для создания ЦММ, ЦМР и использования полученных по результатам лазерного сканирования данных для определения осадок, деформаций и крена резервуаров и их оснований.'
        },

        {
            type: 'image',
            url: image3,
            alt: 'Example image',
        },

        {
            type: 'subheading',
            text: '2018 год'
        },
        {
            type: 'paragraph',
            text: 'Выполнение маркшейдерско-геодезической съемки кустовых площадок ЕР-1, ЕР-2, NP-1 Харьягиского СРП с подготовкой маркшейдерских планов в масштабе 1:500, Цифровых Моделей Местности, Цифровых Моделей Рельефа и 3D-фотореалистичных панорам в формате Leica TruView.'
        },
        {
            type: 'image',
            url: image4,
            alt: 'Example image',
        },
        {
            type: 'subheading',
            text: '2019 год'
        },
        {
            type: 'paragraph',
            text: 'Выполнение работ по обновлению маркшейдерской горно-графической документации по объектам Харьягинского СРП с подготовкой маркшейдерских планов в масштабе 1:500, Цифровых Моделей Местности, Цифровых Моделей Рельефа и ЗD-фотореалистичных панорам в формате AutoDesk ReCap. Развитие (обновление) съёмочного обоснования на кустовых площадках ЕР-1, ЕР-2, NP-1 и ЦПС Харьягинского СРП.'
        },
        {
            type: 'image',
            url: image5,
            alt: 'Example image',
        },
    ];

    return (
        <BlogPost
            title="Лазерное сканирование"
            content={content}
            imageUrl={image}
            date="April 12, 2023"
        />
    );
};


export default LaserScanningPost;
