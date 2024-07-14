    document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4568353972177!2d-74.80969632411768!3d11.004310489158621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42da10a56b7d5%3A0xc9964df6a4629125!2sRtno%20Cl.%2078%2C%20Nte.%20Centro%20Historico%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1715815430832!5m2!1ses!2sco"></iframe>
            `;
    }, 1000);  

    });