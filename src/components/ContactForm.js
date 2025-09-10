import React, { useState } from 'react';

// Bu bileşeni projenizin diğer bölümlerinde kullanabilirsiniz
const ContactForm = ({ lang }) => {
    // Form durumu için state tanımlaması. Her alan için ayrı state tutmak daha iyi olabilir.
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        const form = event.target;

        // Form verilerini toplama
        const formData = new FormData(form);

        // Formspree endpoint'ini .env dosyasından alıyoruz
        const formsprEeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;

        if (!formsprEeEndpoint) {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: 'Formspree endpoint is missing. Please check your .env file.' },
            });
            return;
        }

        const response = await fetch(`https://formspree.io/${formsprEeEndpoint}`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: 'Message sent successfully!' },
            });
            form.reset(); // Formu sıfırlama
        } else {
            const data = await response.json();
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: data.error || 'There was an error sending your message. Please try again later.' },
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4 text-left">
            {/* Ad Soyad Alanı */}
            <div>
                <label className="block text-sm mb-1">
                    {lang === "tr" ? "Ad Soyad" : "Full Name"}
                </label>
                <input
                    type="text"
                    name="fullName" // Formspree için name özelliği ekliyoruz
                    placeholder={lang === "tr" ? "Adınızı giriniz" : "Enter your name"}
                    required // Zorunlu alan için
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
            </div>

            {/* E-posta Alanı */}
            <div>
                <label className="block text-sm mb-1">
                    {lang === "tr" ? "E-posta" : "E-mail"}
                </label>
                <input
                    type="email"
                    name="email" // Formspree için name özelliği ekliyoruz
                    placeholder={lang === "tr" ? "E-posta adresiniz" : "Your mail address"}
                    required // Zorunlu alan için
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
            </div>

            {/* Mesaj Alanı */}
            <div>
                <label className="block text-sm mb-1">
                    {lang === "tr" ? "Mesaj" : "Message"}
                </label>
                <textarea
                    rows="4"
                    name="message" // Formspree için name özelliği ekliyoruz
                    placeholder={lang === "tr" ? "Mesajınızı yazın" : "Write your message"}
                    required // Zorunlu alan için
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                ></textarea>
            </div>

            {/* Gönder Butonu */}
            <button
                type="submit"
                disabled={status.submitting} // Form gönderilirken butonu devre dışı bırakıyoruz
                className="w-full py-3 rounded-lg bg-white/20 hover:bg-white/30 transition font-semibold disabled:opacity-50"
            >
                {status.submitting
                    ? (lang === "tr" ? "Gönderiliyor..." : "Sending...")
                    : (lang === "tr" ? "Gönder" : "Send")}
            </button>

            {/* Form Gönderim Durum Mesajları */}
            {status.info.error && (
                <div className="text-red-400 mt-2">{status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
                <div className="text-green-400 mt-2">{status.info.msg}</div>
            )}
        </form>
    );
};

export default ContactForm;
