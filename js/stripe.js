(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.response);
            let htmlText = "";
            //document.getElementById("products").innerHTML =
            for (let i = 0; i < res.product.length; i++) {
                console.log("this.response.product::", res.product[i]);
                console.log("this.response.developers::", res.developers[i]);
                htmlText += `<a class="dropdown-item"><h4>${res.product[i].title}</h4> ${res.product[i]["sub-title"]}</a>` + `<a class="dropdown-item"><h4>${res.developers[i].title}</h4> ${res.developers[i]["sub-title"]}</a>`;
            }
            console.log("res:::", htmlText);
            document.getElementById("products").innerHTML = htmlText;
        }
    };
    xhttp.open("GET", "https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4", true);
    xhttp.send();
})();
