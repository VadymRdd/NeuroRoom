export default function AIResult({ result }) {
    return (
        <div className="bg-grey mx-auto max-w-lg shadow-lg rounded-lg p-6 mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Результат</h2>
            <img src={imageUrl} alt="Сгенерированное изображение" className="w-full rounded-lg mb-4 shadow-lg" />
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg mb-4" onClick={() => window.location.reload()}>Попробовать ещё раз</button>
        </div>
    );
}