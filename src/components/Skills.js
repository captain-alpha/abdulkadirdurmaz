"use client";
import { BookOpen, Code, Laptop } from "lucide-react";
import "keen-slider/keen-slider.min.css";

// Üst kısımda importları yap
import vs from "../images/logos/vs.png";
import vscode from "../images/logos/vscode.png";
import jupyter from "../images/logos/jupyter.png";
import colab from "../images/logos/colab.png";
import eclipse from "../images/logos/eclipse.png";
import github from "../images/logos/github.png";
import postman from "../images/logos/postman.png";
import wireshark from "../images/logos/wireshark.png";
import ssms from "../images/logos/ssms.png";
import mongodb from "../images/logos/mongodb.png";
import easyPhp from "../images/logos/easyPhp.svg";

// Programlama dilleri
import c from "../images/logos/c.png";
import csharp from "../images/logos/csharp.png";
import java from "../images/logos/java.png";
import python from "../images/logos/python.png";
import sql from "../images/logos/sql.png";
import js from "../images/logos/js.png";
import php from "../images/logos/php.png";
import r from "../images/logos/r.png";

// Frameworkler
import dotnet from "../images/logos/dotnet.svg";
import reactLogo from "../images/logos/react.png";
import node from "../images/logos/node.png";
import tf from "../images/logos/tf.png";
import pytorch from "../images/logos/pytorch.png";
import pandas from "../images/logos/pandas.png";
import numpy from "../images/logos/numpy.png";

const Skills = ({ lang }) => {
    // Data
    const applications = [
        { name: "Visual Studio", logo: vs },
        { name: "VS Code", logo: vscode },
        { name: "Jupyter", logo: jupyter },
        { name: "Colab", logo: colab },
        { name: "Eclipse", logo: eclipse },
        { name: "Github", logo: github },
        { name: "Postman", logo: postman },
        { name: "Wireshark", logo: wireshark },
        { name: "SSMS", logo: ssms },
        { name: "MongoDB", logo: mongodb },
        { name: "easyPHP", logo: easyPhp },
    ];

    const programming = [
        { name: "C", logo: c },
        { name: "C#", logo: csharp },
        { name: "Java", logo: java },
        { name: "Python", logo: python },
        { name: "SQL", logo: sql },
        { name: "JavaScript", logo: js },
        { name: "PHP", logo: php },
        { name: "R", logo: r },
    ];

    const frameworks = [
        { name: ".NET", logo: dotnet },
        { name: "React.js", logo: reactLogo },
        { name: "Node.js", logo: node },
        { name: "TensorFlow", logo: tf },
        { name: "PyTorch", logo: pytorch },
        { name: "Pandas", logo: pandas },
        { name: "NumPy", logo: numpy },
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
