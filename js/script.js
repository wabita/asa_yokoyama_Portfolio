
document.addEventListener('DOMContentLoaded', () => {

    // 'toggle-trigger' というクラス名がついている全ての要素（クリックする見出し）を取得
    const triggers = document.querySelectorAll('.toggle-trigger');

    // 取得した全てのトリガーに対して、これから同じ設定をしていく
    triggers.forEach(trigger => {

        // 各トリガーにクリックイベントを追加
        trigger.addEventListener('click', () => {

            // クリックされたトリガーのすぐ隣にある要素（表示/非表示させたいコンテンツ）を取得
            const content = trigger.nextElementSibling;

            // もしコンテンツが表示されていたら
            if (content.style.display === 'block') {
                // 非表示にする
                content.style.display = 'none';
                // 見出しの▼を▶に戻す
                trigger.textContent = trigger.textContent.replace('▲', '▼');
            } else { // もしコンテンツが非表示だったら
                // 表示させる
                content.style.display = 'block';
                // 見出しの▶を▼に変える
                trigger.textContent = trigger.textContent.replace('▼', '▲');
            }
        });
    });
});

