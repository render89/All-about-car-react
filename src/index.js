import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/react-mdl/extra/material.css';
import '../node_modules/react-mdl/extra/material.js';
import Button from '../node_modules/react-mdl/lib/Button';

const allCar = [{
	name: "Japan",
	makers: ["Toyota", "Honda", "Nissan"]
}, {
	name: "Germany",
	makers: ["Audi", "Mercedes", "BMW"]
}, {
	name: "Other",
	makers: ["Renault", "Chevrolet", "Peugeot"]
}];

const makersInfo = {
	Toyota: [<img src="http://kengur.net/images/logo/toyota.png" />, "Крупнейшая японская автомобилестроительная корпорация, также предоставляющая финансовые услуги и имеющая несколько дополнительных направлений в бизнесе. Является крупнейшей автомобилестроительной публичной компанией в мире, а также крупнейшей публичной компанией в Японии. Главный офис компании находится в городе Тоёта, префектура Айти (Япония). Компания занимает 9 место в Fortune Global 500 (2015 год)."],
	
	Honda: [<img src="http://kengur.net/images/logo/honda.jpg" />, "Международная промышленная компания, ведущий японский производитель мотоциклов, также входит в первую десятку в мире среди производителей автомобилей. Основные производственные мощности расположены в Японии, США, Индии и Бразилии, основные рынки сбыта — США и юго-восточная Азия. Компания Honda была основана в 1948 году изобретателем и предпринимателем Соитиро Хондой и финансистом Такэо Фудзисавой."],
	
	Audi: [<img src="http://auto-detalka.ru/images/djcatalog/audi.jpg" />, "Немецкая автомобилестроительная компания в составе концерна Volkswagen Group, специализирующаяся на выпуске автомобилей под маркой Audi. Штаб-квартира расположена в Ингольштадте (Германия). Председатель совета директоров — Маттиас Мюллер (Matthias Müller). Объём производства в 2015 г. составил около 1 830 334 автомобилей. В 2012 г. немецкие специалисты по автомобилям сделали рейтинг лучших подержанных авто. Авто марки Audi признали лучшей среди подержанных авто."],
	
	Nissan: [<img src="http://kengur.net/images/logo/nissan.png" />, "Японский автопроизводитель, один из крупнейших в мире. Компания основана в 1933 году. По состоянию на 2010 год занимает 8-е место в мировом рейтинге автопроизводителей (3-е среди японских производителей, после Toyota и Honda) по версии международного института исследования рынка IHS Automotive. Штаб-квартира с 2011 года находится в Иокогаме (ранее находилась в Токио)."],
	
	BMW: [<img src="http://adremauto.md/images/brands-big/bmw.png" />, "Немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Председателем компании на сегодняшний день является Норберт Райтхофер, а главным дизайнером — Карим Хабиб. Девиз компании — «Freude am Fahren», с нем. — «С удовольствием за рулем». Для англоязычных стран был придуман также «The Ultimate Driving Machine»."],
	
	Renault: [<img src="http://kengur.net/images/logo/renault.jpg" />, "Французская автомобилестроительная корпорация. Штаб-квартира компании расположена в городе Булонь-Бийанкур, недалеко от Парижа. В настоящее время автомобили Renault поставляются в 200 стран мира."],
	
	Peugeot: [<img src="http://kengur.net/images/logo/peugeot.png" />, "Один из основных французских производителей автомобилей, часть PSA Peugeot Citroën. Материнская компания PSA Peugeot Citroën является вторым по величине в Европе, крупнейшим в Европе производителем легких коммерческих автомобилей (18,8 % рынка) и лидером в производстве автомобилей с низким уровнем выхлопа (26,2 % рынка автомобилей, уровень выхлопа которых менее 130 г/км)."],
	
	Mercedes: [<img src="http://lilianabuchtik.com/wp-content/uploads/2015/03/MercedesBenz.png" />, " Торговая марка легковых автомобилей премиального класса, грузовых автомобилей, автобусов и других транспортных средств немецкого автостроительного концерна «Daimler AG». Является одним из самых узнаваемых автомобильных брендов во всём мире. Штаб-квартира Mercedes-Benz находится в Штутгарте, Баден-Вюртемберг, Германия."],
	
	Chevrolet: [<img src="http://kengur.net/images/logo/chevrolet.png" />, "Марка автомобилей, производимых и реализуемых одноимённым экономически самостоятельным подразделением корпорации General Motors. Шевроле является самой популярной среди марок концерна GM: в 2007 году было реализовано около 2,6 млн автомобилей."]
};

ReactDOM.render(<App countries={allCar} info={makersInfo} />, document.getElementById('root'));