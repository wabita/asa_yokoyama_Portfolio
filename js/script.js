
// document.addEventListener('DOMContentLoaded', () => {

//     // 'toggle-trigger' というクラス名がついている全ての要素（クリックする見出し）を取得
//     const triggers = document.querySelectorAll('.toggle-trigger');

//     // 取得した全てのトリガーに対して、これから同じ設定をしていく
//     triggers.forEach(trigger => {

//         // 各トリガーにクリックイベントを追加
//         trigger.addEventListener('click', () => {

//             // クリックされたトリガーのすぐ隣にある要素（表示/非表示させたいコンテンツ）を取得
//             const content = trigger.nextElementSibling;

//             // もしコンテンツが表示されていたら
//             if (content.style.display === 'block') {
//                 // 非表示にする
//                 content.style.display = 'none';
//                 // 見出しの▼を▶に戻す
//                 trigger.textContent = trigger.textContent.replace('▼', '▶');
//             } else { // もしコンテンツが非表示だったら
//                 // 表示させる
//                 content.style.display = 'block';
//                 // 見出しの▶を▼に変える
//                 trigger.textContent = trigger.textContent.replace('▶', '▼');
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    // 全てのトグルボタン（toggle-trigger）を取得
    const triggers = document.querySelectorAll('.toggle-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            
            // 【重要】クリックされたボタンに 'active' クラスを付け外しする
            // これにより、CSSの「.active」のデザイン（色は赤、記号はー）が適用されます
            trigger.classList.toggle('active');

            // 次の要素（中身のテキスト）を取得
            const content = trigger.nextElementSibling;

            // 中身の表示・非表示を切り替え
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    const emailContainer = document.getElementById('email-container');
    
    // config.js が読み込まれていて、MY_EMAIL がある場合だけ実行
    if (emailContainer && typeof MY_EMAIL !== 'undefined') {
        // 下線が消えないクラス(email-link)をつけてリンクを作成
        emailContainer.innerHTML = `
            <a href="mailto:${MY_EMAIL}" class="email-link">
                ${MY_EMAIL}
            </a>
        `;
    }


    // =========================================
    // 背景ラインのスクロール連動処理
    // =========================================
    const linesContainer = document.querySelector('.bg-lines-container');

    // スクロールするたびに実行される関数
    const handleScroll = () => {
        // 現在のスクロール量（上から何pxスクロールしたか）
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // ページの全体の高さから、今見えている画面の高さを引いた「スクロール可能な最大範囲」
        const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
        
        // スクロール率を計算（0.0 〜 1.0 の間）
        // scrollRangeが0（ページが短くてスクロールできない時）の対策も含む
        let scrollRatio = scrollRange > 0 ? scrollTop / scrollRange : 0;

        // 計算誤差で 0未満や 1以上にならないように範囲を制限
        scrollRatio = Math.min(Math.max(scrollRatio, 0), 1);

        // 計算した値をCSSの変数 (--scroll-ratio) に渡す
        // これでCSS側の calc() の計算結果が変わり、線が伸び縮みする
        linesContainer.style.setProperty('--scroll-ratio', scrollRatio);
    };

    // 画面をスクロールした時に実行
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // ページ読み込み時にも一度実行（初期位置を合わせるため）
    handleScroll();
});