import { Link } from "react-router-dom";

function SuccessDevis({ setSubmissionStatus }) {
    return (
        <div className='w-full h-[35vh] flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl'>
            <div className="p-2 text-center min-w-[50%] xl:min-w-[35%] bg-beige-contrast rounded opacity-0 animate-fade-in">
                <h2 className="font-semibold text-green-700 p-2">Demande envoyée !</h2>
                <p className="mt-2 p-2 text-grey-main">Nous avons bien reçu votre demande. Nous revenons vers vous sous 48h.</p>
                <Link to='/'>
                    <button className="p-2 m-2 text-beige-main rounded-full border-2 bg-grey-main hover:bg-beige-contrast hover:border-grey-main hover:text-grey-main transition" onClick={() => setSubmissionStatus(null)}>Retour a l'acceuil</button>
                </Link>
            </div>
        </div>
    )
}

export default SuccessDevis;