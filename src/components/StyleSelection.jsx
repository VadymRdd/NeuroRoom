import { useState } from "react";

import modern from "./../assets/images/modern.jpg";
import classic from "./../assets/images/classic.webp";
import minimalism from "./../assets/images/minimalism.webp";
import loft from "./../assets/images/loft.jpg";
import scandinavian from "./../assets/images/scandinavian.jpg";

export default function StyleSelection({ setSettings, handleProcessImage }) {
    const styles = [
        { name: "Современный", image: modern },
        { name: "Классический", image: classic },
        { name: "Минимализм", image: minimalism },
        { name: "Лофт", image: loft },
        { name: "Скандинавский", image: scandinavian },
    ];
        const [selectedStyle, setSelectedStyle] = useState(null);
        const [creativity, setCreativity] = useState(0.5);

        const handleConfirm = () => {
            if (!selectedStyle) return;
            setSettings({ style: selectedStyle, creativity });
            handleProcessImage();
        };

    return (
        <div className="bg-grey p-6 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-10">Выберите стиль интерьера</h2>
            <p className="mb-4">Выберите стиль интерьера, который вы хотите применить к вашему изображению.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 object-cover">
                {styles.map((style) => (
                    <button
                        key={style.name}
                        className={`p-2 border rounded-lg p-4 transition-transform duration-700 ease-in-out hover:scale-105 ${
                            selectedStyle === style.name ? "border-blue-600" : "border-gray-200"}`}
                        onClick={() => setSelectedStyle(style.name)}> 
                        <img src={style.image} className="h-32 w-full mb-2 rounded-lg object-cover" /> {style.name}
                    </button>
                ))}
            </div>


            <h3 className="mt-20 mb-2 font-bold">Детализированность — Креативность</h3>
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={creativity}
                onChange={(e) => setCreativity(parseFloat(e.target.value))}
                className="w-full mt-2"
                />
            <button
                onClick={handleConfirm}
                className="bg-green-600 text-white py-2 px-4 rounded-lg mt-6 w-full"
                disabled={!selectedStyle}>Обработать изображение</button>
        </div>
    );
}