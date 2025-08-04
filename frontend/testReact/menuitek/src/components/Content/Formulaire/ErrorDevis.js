function ErrorDevis({ setSubmissionStatus }) {
    return (
        <div className='w-full h-[35vh] flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl'>
           <div className="text-center min-w-[50%] xl:min-w-[35%] bg-beige-contrast rounded opacity-0 animate-fade-in">
                <h2 className="font-semibold text-red-700">Erreur !</h2>
                <p className="mt-2 text-grey-main">Un erreur est survenue.</p>
                <button className="p-2 m-2 text-beige-main rounded-full border-2 bg-grey-main hover:bg-beige-contrast hover:border-grey-main hover:text-grey-main transition" onClick={() => setSubmissionStatus(null)}>Revenir au formulaire</button>
            </div>
        </div>
    )
}

export default ErrorDevis;