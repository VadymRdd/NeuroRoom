import Header from "../components/Header";
import Footer from "../components/Footer";
import background from "./../assets/images/background.jpg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute inset-0 opacity-100">
                    <img src={background} alt="Background" className="absolute object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <Header />
            <main className="flex-grow relative z-10 flex flex-col items-center justify-center p-4">
                <h2 className="text-4xl font-bold text-center mb-6">Добро пожаловать в AI Интерьер Дизайнер!</h2>
                <p className="text-lg text-gray-400 mb-8 text-center">Загрузите ваше фото и выберите стиль интерьера для обработки.</p>
                <div className="bg-gray-700 p-1 px-2 py-1 rounded-lg shadow-lg relative z-10 flex flex-col items-center shadow-xl 
                        hover:bg-gray-700 transition-transform transform hover:scale-105">
                    <Link to="/upload">
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md 
                        hover:bg-purple-800 transition-transform transform hover:scale-105">Перейти к загрузке</button>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}