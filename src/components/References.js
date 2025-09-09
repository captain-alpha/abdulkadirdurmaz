// src/components/References.js
import React from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const references = [
    {
        name: "Alper SELEN",
        position: "A Team Lead working at ASELSAN",
        email: "csalperselen@gmail.com",
        phone: " (+90) 507 493 30 98",
    },
    {
        name: "Fatih SOYGAZİ",
        position: "Assistant Professor at Aydın Adnan Menderes University",
        email: " fatih.soygazi@adu.edu.tr",
        phone: "(+90) 535 515 23 72",
    },
];

export default function References() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white-100/50" id="references">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Referanslarım</h2>
                <p className="text-gray-600">Beraber çalıştığım kişilerden hakkımda bilgi alın.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {references.map((ref, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-left">
                            <h3 className="text-2xl font-semibold text-gray-800">{ref.name}</h3>
                            <p className="text-gray-600 mb-4">{ref.position}</p>

                            <div className="flex items-center gap-2 text-gray-700 mb-2">
                                <Mail className="w-5 h-5 text-gray-500" />
                                <a href={`mailto:${ref.email}`} className="hover:text-blue-600 transition">
                                    {ref.email}
                                </a>
                            </div>

                            <div className="flex items-center gap-2 text-gray-700">
                                <Phone className="w-5 h-5 text-gray-500" />
                                <a href={`tel:${ref.phone}`} className="hover:text-blue-600 transition">
                                    {ref.phone}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
