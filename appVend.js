var appVend = new XMLHttpRequest();

appVend.open('GET', 'Vend.json', true);

appVend.send();

appVend.onreadystatechange = function() {
    if (appVend.readyState == 4 && appVend.status == 200) {

        var appVendJson = JSON.parse(appVend.responseText);

        var res = document.querySelector('#res');

        res.innerHTML = '';

        for (var item of appVendJson) {

            res.innerHTML += `
           <tr>
                        <th>${item.nombre}</th>
                        <th>${item.total}</th>
                        <th>${item.cantventa}</th>
            </tr>
           `
        }
    }
};