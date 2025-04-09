import { useState } from "react";

export default function UploadForm({ setStep, setFile }) {
    const [fileName, setFileName] = useState(null);
    const [isUploading, setIsUploading] = useState(false);   // Затычка для загрузки на сервер, когда будет АПИ заменить с (false) на (null)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setFile(file);
        }
    };

    const handleUpload = () => {
        if (!fileName) return;

        setIsUploading(true);
        setTimeout(() => {
            setIsUploading(false);
            setStep("settings")
        }, 1000);   // Заменить на реальную загрузку файла на сервер
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-green shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-8">Загрузите фото</h2>

            <label htmlFor="file-upload" className="block text-center bg-blue-600 mb-4 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-900 transition duration-200">
                {fileName ? fileName : "Выберите файл"}
            </label>
            <input id="file-upload" type="file" onChange={handleFileChange} className="hidden" />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-6" onClick={handleUpload} disabled={!fileName || isUploading} > {isUploading ? "Загрузка...": "Загрузить"}</button>
        </div>
    );
}