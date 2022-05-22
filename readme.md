# Система за качване на филми

## Функционалност
* Регистрация/логване на потребители
* Добавяне на филм - нужен е href линк за самата снимка на добавяния филм
* Моите филми
* Търсене на филми по заглавие
* Редактиране на даден филм
* Изтриване на филм
* След всеки рестарт на backend server-а на СофтУни, филмите се reset-ват на само 3 броя налични в базата данни

## Технологии
* HTML, CSS, JavaScript
* lit-html, page
* GitHub Pages client server at - https://movies-softuni.github.io/
* или Firebase за client server at - https://movies-softuni-7ea72.web.app/   and  https://movies-softuni-7ea72.firebaseapp.com/ 
* SoftUni backend server uploaded in Heroku.com - start it at https://movies-softuni.herokuapp.com/

## Екрани (страници)
* **homeView** (landing page)
* **loginView(Register)** - логин(регистрация) с мейл, потребителско име, парола (peter@abv.bg и pass: 123456)
* **addMovieView** - добавяне на филм
* **movieDetailsView** - детайли за филм
* **editMovieView** - редактиране на филм
* **deleteMovieView** - изтриване на филм
* **navigationView** - динамично подаване и на елементите на навигатора

## Middlewares
* **authMiddleware** - ако се е логнал потребител, то го задай на контекста
* **renderMiddleware** - рендерирай динамично подаваната информация в div елемент с клас root
* **navigationMiddleware** - рендерирай динамично подаваната информация в div елемент с клас navigation
* **querystringMiddleware** - вземи от URI всички двойки елементи разделени с равно. Пример: ?search=top. Използваме го за търсачката

## Backend services
* **using the style**

fetch()
    .then(header/response => ())
    .then(resolvedPromise/data => ())

* **requester and endpoints** - задаване на endpoints за backend сървъра - на heroku или на друг адрес. Bind-ване на всяка от видовете заявки GET, POST, PUT, DELETE

* **movieService** - на база на requester and endpoints, custom заявки за работа с филми


## Refreshing the SinglePageApplication
* **added 404.html and initial script in the index.html file** - да не се чупи при презареждане на който и да е линк от нашето SPA

