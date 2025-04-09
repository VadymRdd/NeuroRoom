export default function Processing() {
    return (
        <div className="bg-white p-6 shadow-lg rounded-lg text-center mt-4">
            <h2 className="text-3xl font-bold mb-4">Обработка изображения...</h2>
            <p className="mb-4">Пожалуйста, подождите, пока мы обрабатываем ваше изображение.</p>
            <div className="loader"></div>
        </div>
    );
}