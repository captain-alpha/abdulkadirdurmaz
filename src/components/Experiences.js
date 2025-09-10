import { Briefcase, GraduationCap } from "lucide-react";
import { FaFilePdf } from "react-icons/fa";

const Experiences = ({ lang }) => {
    return (
        <section id="experiences" className="py-20 bg-darkBlue/60 text-white font-consolas">
            <div className="container mx-auto px-6">

                {/* Başlık */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {lang === "tr" ? "Deneyimlerim" : "My Experiences"}
                </h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* İş Deneyimleri */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <Briefcase className="w-6 h-6 text-blue-400" />
                            {lang === "tr" ? "İş Deneyimleri" : "Work Experiences"}
                        </h3>
                        <div className="space-y-6">

                            {/* ASELSAN */}
                            <div className="bg-gray-900/60 p-6 rounded-xl shadow hover:shadow-lg transition">
                                <a
                                    href="https://www.aselsan.com.tr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold text-blue-400 hover:underline"
                                >
                                    {lang === "tr" ? "ASELSAN'da Stajyer Mühendis" : "Intern Engineer @ ASELSAN"}
                                </a>
                                <p className="mt-2 text-gray-300">
                                    {lang === "tr"
                                        ? "Websocket ile gerçek zamanlı medya akışı, sunucu ve istemci uygulaması geliştirdim."
                                        : "I developed a real-time media streaming, server and client application with Websocket."}
                                </p>
                            </div>

                            {/* Olimpos */}
                            <div className="bg-gray-900/60 p-6 rounded-xl shadow hover:shadow-lg transition">
                                <a
                                    href="https://www.olimpos.com.tr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold text-blue-400 hover:underline"
                                >
                                    {lang === "tr" ? "Olimpos'da Stajyer Programcı" : "Intern Programmer @ Olimpos"}
                                </a>
                                <p className="mt-2 text-gray-300">
                                    {lang === "tr"
                                        ? "C# ile OOP otomasyon geliştirme üzerinde çalıştım. Ayrıca temel HTML ve CSS bilgimi de geliştirdim."
                                        : "I worked on OOP automation development with C#. I also improved myself on basic HTML and CSS knowledge."}
                                </p>
                            </div>

                            {/* Bionluk */}
                            <div className="bg-gray-900/60 p-6 rounded-xl shadow hover:shadow-lg transition">
                                <a
                                    href="https://bionluk.com/captainalpha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold text-blue-400 hover:underline"
                                >
                                    {lang === "tr" ? "bionluk.com'da Serbest Yazılımcı" : "Freelance Developer on bionluk.com"}
                                </a>
                                <p className="mt-2 text-gray-300">
                                    {lang === "tr"
                                        ? "Bionluk üzerinde farklı projelerde freelance olarak çalıştım. Hâlâ buradan iş alabilirim."
                                        : "I worked freelance on various projects through Bionluk. I’m still available for work here."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Eğitim Deneyimleri */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <GraduationCap className="w-6 h-6 text-green-400" />
                            {lang === "tr" ? "Eğitim" : "Education"}
                        </h3>
                        <div className="space-y-6">

                            {/* ADÜ */}
                            <div className="bg-gray-900/60 p-6 rounded-xl shadow hover:shadow-lg transition min-h-[200px] relative">
                                {/* PDF Buton */}
                                <a
                                    href="/docs/adu-yuksekogretim-mezun-belgesi-sorgulama.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-md shadow transition"
                                >
                                    <FaFilePdf size={16} />
                                    PDF
                                </a>

                                <a
                                    href="https://akademik.adu.edu.tr/bolum/muhendislik/bilgisayar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold text-green-400 hover:underline"
                                >
                                    <h4 className="text-xl font-bold text-green-400">
                                        {lang === "tr"
                                            ? "Bilgisayar Mühendisliği Lisans"
                                            : "Computer Engineering Bachelor's"}
                                    </h4>
                                </a>

                                <p className="mt-1 text-gray-300">Adnan Menderes University</p>
                                <p className="text-sm text-gray-400">
                                    18/09/2021 - 17/07/2025 <br />
                                    Aydın, Turkey
                                </p>
                                <p className="mt-2 text-gray-300">
                                    {lang === "tr"
                                        ? <>
                                            Alan: Bilgisayar Mühendisliği <br />
                                            Not Ort.: 3.43 / 4.00 <br />
                                            Eğitim dili: %100 İngilizce
                                        </>
                                        : <>
                                            Field: Computer Engineering <br />
                                            GPA: 3.43 / 4.00 <br />
                                            Language: 100% English
                                        </>
                                    }
                                </p>
                            </div>

                            {/* Ankara Üniversitesi */}
                            <div className="bg-gray-900/60 p-6 rounded-xl shadow hover:shadow-lg transition min-h-[200px] relative">
                                {/* PDF Buton */}
                                <a
                                    href="/docs/au-yuksekogretim-mezun-belgesi-sorgulama.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded-md shadow transition"
                                >
                                    <FaFilePdf size={16} />
                                    PDF
                                </a>

                                <a
                                    href="https://nallihanmyo.ankara.edu.tr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold text-green-400 hover:underline"
                                >
                                    <h4 className="text-xl font-bold text-green-400">
                                        {lang === "tr"
                                            ? "Bilgisayar Programcılığı Ön Lisans"
                                            : "Computer Programming Associate’s"}
                                    </h4>
                                </a>
                                <p className="mt-1 text-gray-300">Ankara University</p>
                                <p className="text-sm text-gray-400">
                                    18/09/2021 - 17/07/2025 <br />
                                    Ankara, Turkey
                                </p>
                                <p className="mt-2 text-gray-300">
                                    {lang === "tr"
                                        ? <>
                                            Alan: Bilgisayar Programcılığı <br />
                                            Not Ort.: 3.40 / 4.00
                                        </>
                                        : <>
                                            Field: Computer Programming <br />
                                            GPA: 3.40 / 4.00
                                        </>
                                    }
                                </p>
                            </div>

                            {/* Dummy Card for Symmetry */}
                            <div className="bg-transparent p-6 rounded-xl min-h-[200px]"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experiences;
