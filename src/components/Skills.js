"use client";
import { BookOpen, Code, Laptop } from "lucide-react";
import "keen-slider/keen-slider.min.css";

const Skills = ({ lang }) => {
    // Data
    const applications = [
        { name: "Visual Studio", logo: "/logos/vs.png" },
        { name: "VS Code", logo: "/logos/vscode.png" },
        { name: "Jupyter", logo: "/logos/jupyter.png" },
        { name: "Colab", logo: "/logos/colab.png" },
        { name: "Eclipse", logo: "/logos/eclipse.png" },
        { name: "Github", logo: "/logos/github.png" },
        { name: "Postman", logo: "/logos/postman.png" },
        { name: "Wireshark", logo: "/logos/wireshark.png" },
        { name: "SSMS", logo: "/logos/ssms.png" },
        { name: "MongoDB", logo: "/logos/mongodb.png" },
        { name: "easyPHP", logo: "/logos/easyPhp.svg" },
    ];

    const programming = [
        { name: "C#", logo: "/logos/csharp.png" },
        { name: "Java", logo: "/logos/java.png" },
        { name: "Python", logo: "/logos/python.png" },
        { name: "SQL", logo: "/logos/sql.png" },
        { name: "JavaScript", logo: "/logos/js.png" },
        { name: "PHP", logo: "/logos/php.png" },
        { name: "R", logo: "/logos/r.png" },
    ];

    const frameworks = [
        { name: ".NET", logo: "/logos/dotnet.svg" },
        { name: "React.js", logo: "/logos/react.png" },
        { name: "Node.js", logo: "/logos/node.png" },
        { name: "TensorFlow", logo: "/logos/tf.png" },
        { name: "PyTorch", logo: "/logos/pytorch.png" },
        { name: "Pandas", logo: "/logos/pandas.png" },
        { name: "NumPy", logo: "/logos/numpy.png" },
    ];

    return (
        <section
            id="skills"
            className="py-20 bg-darkBlue/70 text-white font-consolas text-center"
        >
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Başlık */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    {lang === "tr" ? "Yeteneklerim" : "My Skills"}
                </h2>

                {/* Dil Yetenekleri */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                        <BookOpen className="w-6 h-6 text-yellow-400" />
                        {lang === "tr" ? "Dil Yetenekleri" : "Language Skills"}
                    </h3>
                    <div className="bg-gray-900/60 p-6 rounded-xl shadow max-w-4xl mx-auto">
                        <p className="text-gray-300">
                            {lang === "tr" ? "Anadil: Türkçe" : "Mother tongue: Turkish"}
                        </p>
                        <p className="text-gray-300 mt-2 text-sm">
                            English → Listening: B1 | Reading: B1 | Writing: B1 | Spoken
                            Production: A2 | Spoken Interaction: A2
                        </p>
                    </div>
                </div>

                {/* Dijital Yetenekler */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
                        <Code className="w-6 h-6 text-blue-400" />
                        {lang === "tr" ? "Dijital Yetenekler" : "Digital Skills"}
                    </h3>

                    {/* Programlama Dilleri */}
                    <div className="bg-gray-900/60 p-6 rounded-xl shadow mb-6 max-w-4xl mx-auto">
                        <h4 className="text-lg font-bold text-blue-400 mb-4">
                            {lang === "tr"
                                ? "Programlama Dilleri"
                                : "Programming Languages"}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {programming.map((p, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-800/80 px-4 py-2 rounded-lg shadow flex flex-col items-center text-sm text-gray-200"
                                >
                                    <img src={p.logo} alt={p.name} className="h-8 mb-1" />
                                    {p.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="bg-gray-900/60 p-6 rounded-xl shadow mb-6 max-w-4xl mx-auto">
                        <h4 className="text-lg font-bold text-blue-400 mb-4">
                            {lang === "tr"
                                ? "Teknolojiler & Frameworkler"
                                : "Technologies & Frameworks"}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {frameworks.map((f, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-800/80 px-4 py-2 rounded-lg shadow flex flex-col items-center text-sm text-gray-200"
                                >
                                    <img src={f.logo} alt={f.name} className="h-8 mb-1" />
                                    {f.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Applications & IDEs */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
                        <Laptop className="w-6 h-6 text-green-400" />
                        {lang === "tr" ? "Uygulamalar & IDE'ler" : "Applications & IDEs"}
                    </h3>
                    <div className="overflow-hidden relative w-full max-w-4xl mx-auto">
                        <div className="flex gap-6 animate-marquee">
                            {applications.concat(applications).map((app, idx) => (
                                <div
                                    key={idx}
                                    className="min-w-[120px] bg-gray-900/60 p-4 rounded-xl shadow flex flex-col items-center justify-center text-center font-semibold text-gray-200 hover:text-green-400 transition"
                                >
                                    <img src={app.logo} alt={app.name} className="h-12 mb-2" />
                                    {app.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
