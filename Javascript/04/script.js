//const main = document.querySelector('main');
//const element = document.createElement('p');
//element.textContent = "Hello world";
//main.appendChild(element);
//console.log(element);

// 'DOMContentLoaded'はHTMLの構造（タグや要素）が全部読み込まれてからこの中のコードを実行させるイベントリスナー
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const ul = document.getElementById('list');
    for (let i = 0; i < 5; i += 1) { // for 文には初期化式/繰り返し条件式/更新式の3点セットが必須
        const li = document.createElement('li');
        li.textContent = `子要素${i}号`;
        ul.appendChild(li);
        console.log(li);
    }
    const element = document.createElement('p');
    element.textContent = "Hello world";
    main.appendChild(element);// 'DOMContentLoaded'を使用しているので、HTML内にmain要素がないと'null'となりエラーになる
    console.log(element);
});