import { useForm } from 'react-hook-form';
import { getEmailValidation, getNameValidation, getNumberValidation } from "./validationRules"

function Devis({ setSubmissionStatus, type, setType, initialReader, setInitialReader }) {
    const {register, handleSubmit, formState: { errors },} = useForm();

    const onSubmit = (data) => {
        console.log('Formulaire soumis', data);
        try {
            setInitialReader(false);
            //Appel API a faire
            setSubmissionStatus('success');
            // setSubmissionStatus('error');
        } catch (error) {
            setSubmissionStatus('error');
        }
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className={`w-full flex flex-col items-center gap-2 sm:gap-4 lg:gap-8 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl opacity-0 
            ${initialReader ? 'animate-slide-in-right' : 'animate-fade-in'}`} style={initialReader ? { animationDelay: '800ms' } : {}} action="" method="post">
            <ul className="w-2/3 2xl:w-2/5 flex flex-col xl:gap-2 p-2 md:p-4 lg:p-6 xl:p-12 border-t-2 border-beige-main">
                <p className="">Vous etes un :</p>
                <li className="flex flex-row gap-2 lg:gap-4 2xl:gap-8 items-center justify-center">
                    <label htmlFor="particulier">Particulier</label>
                    <input type="radio" id="particulier" name="user_type" value="particulier" checked={type === 'particulier'} onChange={() => setType('particulier')}></input>
                    <label htmlFor="pro">Professionnel</label>
                    <input type="radio" id="pro" name="user_type" value="pro" checked={type === 'pro'} onChange={() => setType('pro')}></input>
                </li>
                { type === 'particulier' && (
                <>
                    <li className="flex flex-col lg:gap-2 2xl:gap-4">
                        <label htmlFor="name">Nom :</label>
                        <input required type="text" id="name" name="user_name" className={`bg-beige-contrast text-grey-main rounded focus:bg-white ${errors.name ? 'border border-red-500' : 'border border-stone-300'}`}
                            {...register("name", getNameValidation())}></input>
                        {errors.name && (
                            <span className="text-red-500 text-sm">{errors.name.message}</span>
                        )}
                    </li>
                    <li className="flex flex-col lg:gap-2 2xl:gap-4">
                        <label htmlFor="first_name">Prénom :</label>
                        <input required type="text" id="first_name" name="user_name" className={`bg-beige-contrast text-grey-main rounded focus:bg-white ${errors.first_name ? 'border border-red-500' : 'border border-stone-300'}`}
                            {...register("first_name", getNameValidation())}></input>
                        {errors.first_name && (
                            <span className="text-red-500 text-sm">{errors.first_name.message}</span>
                        )}
                    </li>
                </>
                )} 
                { type === 'pro' && (
                    <li className="flex flex-col lg:gap-2 2xl:gap-4">
                        <label htmlFor="company">Societe :</label>
                        <input required type="text" id="company" name="user_society" className={`bg-beige-contrast text-grey-main rounded focus:bg-white ${errors.company ? 'border border-red-500' : 'border border-stone-300'}`}
                            {...register("company", { required: "Le nom de la société est requis." })}></input>
                        {errors.company && (
                            <span className="text-red-500 text-sm">{errors.company.message}</span>
                        )}
                    </li>
                )}
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label htmlFor="tel"> Numero de téléphone :</label>
                    <input required type="tel" id="tel" name="tel" className={`bg-beige-contrast text-grey-main rounded focus:bg-white ${errors.tel ? 'border border-red-500' : 'border border-stone-300'}`}
                        {...register("tel", getNumberValidation())}></input>
                    {errors.tel && (
                        <span className="text-red-500 text-sm">{errors.tel.message}</span>
                    )}
                </li>
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label htmlFor="email">E-mail :</label>
                    <input required type="email" id="email" name="email" className={`bg-beige-contrast text-grey-main rounded focus:bg-white ${errors.email ? 'border border-red-500' : 'border border-stone-300'}`}
                        {...register("email", getEmailValidation())}></input>
                    {errors.email && (
                        <span className="text-red-500 text-sm">{errors.email.message}</span>
                    )}
                </li>
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label htmlFor="project">Décrivez-nous vos besoins ou vos envies :</label>
                    <textarea required id="project" name="user_project" cols="50" rows="10" className={`bg-beige-contrast text-grey-main rounded focus:bg-white ${errors.project ? 'border border-red-500' : 'border border-stone-300'}`}
                        {...register("project", { required: "Ce champs est requis." })}></textarea>
                    {errors.project && (
                        <span className="text-red-500 text-sm">{errors.project.message}</span>
                    )}
                </li>
            </ul>
            <div className="flex items-center justify-center">
                <button  className="p-2 border-2 border-beige-main rounded-full hover:bg-beige-main hover:text-grey-main transition ease-in-out duration:300" type="submit">Soumettez votre projet</button>
            </div>
        </form>
    )
}

export default Devis;