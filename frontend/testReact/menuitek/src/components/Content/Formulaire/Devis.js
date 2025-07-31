import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getNameValidation, getNumberValidation } from "./validationRules"

function Devis() {
    const [type, setType] = useState('particulier');
    const {register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log('Formulaire soumis', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-2 sm:gap-4 lg:gap-8 text-sm sm:text-base md:text-lg lg:text-xl opacity-0 animate-slide-in-right" style={{ animationDelay: '800ms' }} action="" method="post">
            <ul className="w-1/2 2xl:w-1/3 flex flex-col rounded-t-lg xl:gap-2 p-2 md:p-4 lg:p-6 xl:p-12">
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
                        <input required type="text" id="first_name" name="user_first_name" className="bg-beige-contrast text-grey-main rounded focus:bg-white"></input>
                    </li>
                </>
                )} 
                { type === 'pro' && (
                    <li className="flex flex-col lg:gap-2 2xl:gap-4">
                        <label htmlFor="society">Nom d'entreprise :</label>
                        <input required type="text" id="society" name="user_society" className="bg-beige-contrast text-grey-main rounded focus:bg-white"></input>
                    </li>
                )}
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label htmlFor="tel"> Numero de téléphone :</label>
                    <input required type="tel" id="tel" name="tel" className={`bg-beige-contrast text-grey-main rounded focus:bg-white ${errors.name ? 'border border-red-500' : 'border border-stone-300'}`}
                        {...register("tel", getNumberValidation())}></input>
                    {errors.tel && (
                        <span className="text-red-500 text-sm">{errors.name.message}</span>
                    )}
                </li>
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label htmlFor="email">E-mail :</label>
                    <input required type="email" id="email" name="email" className="bg-beige-contrast text-grey-main rounded focus:bg-white"></input>
                </li>
                <li className="flex flex-col lg:gap-2 2xl:gap-4">
                    <label htmlFor="project">Décrivez-nous vos besoins ou vos envies :</label>
                    <textarea required id="project" name="user_project" cols="50" rows="10" className="bg-beige-contrast text-grey-main rounded focus:bg-white"></textarea>
                </li>
            </ul>
            <div className="flex items-center justify-center">
                <button  className="p-2 border-2 border-beige-main rounded-full hover:bg-beige-main hover:text-grey-main transition ease-in-out duration:300" type="submit">Soumettez votre projet</button>
            </div>
        </form>
    )
}

export default Devis;

// Contenu image de consultant souriant ?
// Check cote front data