function Footer() {
    return <footer className="footer"> 
          <div className="footer__content">
                
                {/* Блок 1: Информация о компании */}
                <div className="footer__section footer__about">
                    <h4>О нас</h4>
                    <p>Лучшие решения для вашего бизнеса с 2023 года.</p>
                </div>

                {/* Блок 2: Навигационные ссылки */}
                <div className="footer__section footer__links">
                    <h4>Навигация</h4>
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/services">Услуги</a></li>
                        <li><a href="/privacy">Политика конфиденциальности</a></li>
                    </ul>
                </div>

                {/* Блок 3: Контакты */}
                <div className="footer__section footer__contact">
                    <h4>Свяжитесь с нами</h4>
                    <p>Email: info@mysite.com</p>
                    <p>Телефон: +7 (XXX) XXX-XX-XX</p>
                </div>
            </div>

            {/* Нижняя строка с копирайтом */}
            <div className="footer__copyright">
                &copy; {new Date().getFullYear()} Мой Сайт. Все права защищены.
            </div>


        </footer>
}

export default Footer