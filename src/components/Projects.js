"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        title: "https://movion.org",
        type: "live",
        url: "https://movion.org",
        description: "AI destekli film öneri platformu. Kullanıcılara kişiselleştirilmiş film önerileri sunar.",
    },
    {
        title: "Fruits-360 Classifier",
        type: "github",
        url: "https://github.com/abdulkadir-durmaz/fruits360-classifier",
        description: "Fruits-360 dataset kullanarak PCA, Random Forest, XGBoost ve ANN ile meyve sınıflandırma projesi.",
    },
    {
        title: "Parking Simulation",
        type: "github",
        url: "https://github.com/captain-alpha/ParkingSimulation",
        description: "SUMO Simulation kullanarak otopark doluluk oranı simüle eden ekip projemiz.",
    },
    {
        title: "Hate Speech Detection",
        type: "github",
        url: "https://github.com/abdulkadir-durmaz/hate-speech-turkish",
        description: "Türkçe sosyal medya verilerinde nefret söylemi tespiti için Transformer modelleriyle NLP projesi.",
    },
];

const Projects = ({ lang }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const prevProject = () => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextProject = () => {
        setDirection(1);
        setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const project = projects[current];

    return (
        <section
            id="projects"
            className="py-20 bg-darkBlue/60 text-white font-consolas text-center"
        >
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Ana Başlık */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    {lang === "tr" ? "Öne Çıkan Projelerim" : "Featured Projects"}
                </h2>

                {/* Proje Başlık + Navigasyon */}
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={prevProject}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Proje Başlığı (arama kutusu görünümü) */}
                    <div className="flex-1 mx-4">
                        <div className="bg-gray-900/70 border border-gray-700 rounded-full px-6 py-2 shadow text-lg font-semibold">
                            {project.title}
                        </div>
                    </div>

                    <button
                        onClick={nextProject}
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Proje İçeriği (Animasyonlu) */}
                <div className="relative h-[500px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={project.title}
                            custom={direction}
                            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0"
                        >
                            {project.type === "live" ? (
                                // Monitor mockup (iframe)
                                <div className="bg-gray-900 rounded-2xl shadow-xl p-4 relative h-full flex flex-col">
                                    <div className="bg-black rounded-lg overflow-hidden flex-1">
                                        <iframe
                                            src={project.url}
                                            title={project.title}
                                            className="w-full h-full"
                                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                        />
                                    </div>
                                    <div className="w-32 h-3 bg-gray-700 mx-auto mt-2 rounded-b-lg"></div>
                                </div>
                            ) : (
                                // GitHub Projesi (açıklama + link)
                                <div className="bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col justify-center h-full">
                                    <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-green-400 font-semibold transition"
                                    >
                                        <Github className="w-5 h-5" />
                                        {lang === "tr" ? "Projeyi GitHub’da Gör" : "View on GitHub"}
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
