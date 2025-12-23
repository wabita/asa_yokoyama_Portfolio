document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // 1. トグルボタン設定
    // =========================================
    const triggers = document.querySelectorAll('.toggle-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            trigger.classList.toggle('active');
            const content = trigger.nextElementSibling;
            
            // シンプルな開閉処理
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
            
            // ※以前あった setTimeout(handleScroll...) はもう不要なので削除しました
        });
    });

    // =========================================
    // 2. メールアドレスの表示設定（修正済み）
    // =========================================
    const user = "yokoyama.asa0624"; 
    const domain = "gmail.com"; 
    const myEmail = user + "@" + domain;
    
    const emailContainer = document.getElementById('email-container');
    
    // 修正：以前の 'typeof MY_EMAIL' のチェックを外し、myEmailを使うように変更
    if (emailContainer) {
        emailContainer.innerHTML = `
            <a href="mailto:${myEmail}" class="email-link">
                ${myEmail}
            </a>
        `;
    }

    // =========================================
    // 3. 背景ライン処理
    // =========================================
    // CSSアニメーションに切り替えたため、
    // ここにあった handleScroll などの処理は全て削除しました。
    // これでコードがスッキリし、動作も軽くなります。
});