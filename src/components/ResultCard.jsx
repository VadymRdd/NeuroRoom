export default function ResultCard() {
    return (
        <div className="max-w-sm mx-auto p-6 bg-grey shadow-lg rounded-lg mt-4">
            <h2 className="text-xl font-semibold mb-4">Результат обработки</h2>
            <img src="https://placehold.co/400x300/png?text=Результат" alt="Результат" className="w-full h-auto mb-4" />
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg">Скачать</button>
        </div>
    );
}