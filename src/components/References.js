import { Handshake } from "lucide-react";

const References = ({ lang }) => {

    return (
        <section id="references" className="py-20 bg-darkBlue/60 text-white font-consolas">
            <div className="container mx-auto px-6">

                {/* Başlık */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <Handshake className="w-6 h-6 text-blue-400" />
                    {lang === "tr" ? "Referanslar" : "References"}
                </h2>

                <div className="grid md:grid-cols-1 gap-12">

                    {/* İş Deneyimleri */}
                    <div className="space-y-6">

                        {/* Alper Selen */}
                        <div className="bg-gray-900/60 p-6 rounded-xl shadow hover:shadow-lg transition">
                            <a
                                href="https://www.aselsan.com.tr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-bold text-blue-400 hover:underline"
                            >
                                Intern Engineer @ ASELSAN
                            </a>
                            <p className="mt-2 text-gray-300">
                                {lang === "tr"
                                    ? "Websocket ile gerçek zamanlı medya akışı, sunucu ve istemci uygulaması geliştirdim."
                                    : "I developed a real-time media streaming, server and client application with Websocket."}
                            </p>
                        </div>

                        {/* Fatih Soygazi */}
                        <div className="bg-gray-900/60 p-6 rounded-xl shadow hover:shadow-lg transition">
                            <a
                                href="https://www.aselsan.com.tr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-bold text-blue-400 hover:underline"
                            >
                                Intern Engineer @ ASELSAN
                            </a>
                            <p className="mt-2 text-gray-300">
                                {lang === "tr"
                                    ? "Websocket ile gerçek zamanlı medya akışı, sunucu ve istemci uygulaması geliştirdim."
                                    : "I developed a real-time media streaming, server and client application with Websocket."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default References;
