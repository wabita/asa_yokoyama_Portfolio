document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // 1. トグルボタン設定
    // =========================================
    const triggers = document.querySelectorAll('.toggle-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            trigger.classList.toggle('active');
            const content = trigger.nextElementSibling;
            
            // トグルの開閉処理
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }

            // ★ここが修正ポイント！
            // トグルが開閉されて「ページの長さ」が変わったので、
            // 0.1秒後にスクロール率（線の長さ）を再計算させる
            setTimeout(handleScroll, 100); 
        });
    });

    // =========================================
    // 2. メールアドレスの表示設定
    // =========================================
    const emailContainer = document.getElementById('email-container');
    if (emailContainer && typeof MY_EMAIL !== 'undefined') {
        emailContainer.innerHTML = `
            <a href="mailto:${MY_EMAIL}" class="email-link">
                ${MY_EMAIL}
            </a>
        `;
    }

    // =========================================
    // 3. 背景ラインのスクロール連動処理
    // =========================================
    const linesContainer = document.querySelector('.bg-lines-container');

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // ページの全体の高さ - 画面の高さ = スクロールできる長さ
        // トグルが開くとここ（scrollHeight）が大きくなるので、
        // 結果的に scrollRatio が小さくなり、線が適切な長さに戻ります
        const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
        
        let scrollRatio = scrollRange > 0 ? scrollTop / scrollRange : 0;
        scrollRatio = Math.min(Math.max(scrollRatio, 0), 1);

        linesContainer.style.setProperty('--scroll-ratio', scrollRatio);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初期化時にも実行
    handleScroll();
});