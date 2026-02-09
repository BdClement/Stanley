function ErrorDevis({ setSubmissionStatus }) {
    return (
        <div className='w-full h-[35vh] flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl'>
           <div className="text-center min-w-[50%] xl:min-w-[35%] bg-brun-contrast/40 rounded opacity-0 animate-fade-in">
                <h2 className="font-semibold text-red-700">Erreur !</h2>
                <p className="mt-2 text-brun-main">Un erreur est survenue.</p>
                <button className="p-2 m-2 md:px-4 text-beige rounded-full bg-brun-contrast hover:bg-brun-main transition" onClick={() => setSubmissionStatus(null)}>Revenir au formulaire</button>
            </div>
        </div>
    )
}

export default ErrorDevis;