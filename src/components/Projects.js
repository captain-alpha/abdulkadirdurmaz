import { Globe } from "lucide-react";

const Projects = ({ lang }) => {

    return (
        <section
            id="projects"
            className="py-20 bg-darkBlue/70 text-white font-consolas text-center"
        >
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Başlık */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    {lang === "tr" ? "Öne Çıkan Projelerim" : "Featured Projects"}
                </h2>

                {/* Dil Yetenekleri */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                        <Globe className="w-6 h-6 text-blue-500" />
                        {lang === "tr" ? "movion.org" : "movion.org"}
                    </h3>
                    <div className="bg-gray-900/10 p-6 rounded-xl shadow max-w-3xl mx-auto">
                    <img src="/logos/monitor.png"></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
