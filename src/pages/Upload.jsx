import { useState } from "react";
import UploadForm from "../components/UploadForm";
import StyleSelection from "../components/StyleSelection";
import AIResult from "../components/AIResult";
import ResultCard from "../components/ResultCard";

export default function Upload() {
    const [step, setStep] = useState("upload");     // "upload" -> "settings" -> "result"
    const [file, setFile] = useState(null);

    const [settings, setSettings] = useState({style: null, creativity: 0.5});
    const [imageUrl, setImageUrl] = useState(null);

    const handleProcessImage = async () => {
        if (!file || !settings.style) return;

        setStep("loading");

        const formData = new FormData();
        formData.append("image", file);
        formData.append("style", settings.style);
        formData.append("creativity", settings.creativity);

        // После реализации бэка нужно заменить setTimeout() на реальный fetch() что внизу

    //     try {
    //         const response = await fetch("http://localhost:5000/process", {         // Заменить на реальный URL нашего API с бэкенда
    //             method: "POST",
    //             body: formData,
    //         });

    //         const data = await response.json();
    //         setImageUrl(data.imageUrl); // сюда будет приходить ссылка на обработанное изображение с сервера
    //         setStep("result");
    //     } catch (error) {
    //         console.error("Ошибка при обработке:", error);
    //         setStep("error");
    //     }
};
    return (
        <div className="p-6">
            {step === "upload" && <UploadForm setStep={setStep} setFile={setFile} />}
            {step === "settings" && <StyleSelection setSettings={setSettings} handleProcessImage={handleProcessImage} />}
            {step === "loading" && <div className="text-center text-lg">Обработка изображения...</div>}
            {/* {step === "result" && <AIResult imageUrl={imageUrl} />} */}
        </div>
    );
}