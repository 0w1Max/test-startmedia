const content = document.querySelector('.content');

const ridersTableTemplate = (obj) =>
    obj.map((item) => (
        `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.city}</td>
            <td>${item.car}</td>
            <td>${item.allResults[0]}</td>
            <td>${item.allResults[1]}</td>
            <td>${item.allResults[2]}</td>
            <td>${item.allResults[3]}</td>
            <td>${item.result}</td>
        </tr>`
    )).join('');

const mainTableTemplate = (obj) => (
    `<table>
        <tr>
            <th><a class="id-btn" href="">Идентификатор</a></th>
            <th>Имя</th>
            <th>Город</th>
            <th>Автомобиль</th>
            <th><a class="first-result" href="">Первая попытка</a></th>
            <th><a class="second-result" href="">Вторая попытка</a></th>
            <th><a class="third-result" href="">Третья попытка</a></th>
            <th><a class="fourth-result" href="">Четвёртая попытка</th>
            <th><a class="total-result" href="">Общий результат</a></th>
        </tr>
        ${ridersTableTemplate(obj)}
    </table>`
);

const renderRiderTable = (obj) => content.innerHTML = mainTableTemplate(obj);

export {renderRiderTable};