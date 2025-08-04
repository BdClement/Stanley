import Devis from "./Devis";
import SuccessDevis from "./SuccessDevis"
import ErrorDevis from "./ErrorDevis"

import { useState } from 'react';

function BodyFormulaire() {
    const [type, setType] = useState('particulier');
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [initialReader, setInitialReader] = useState(true)

    return (
        <>
        {submissionStatus === null && (
            <Devis 
                setSubmissionStatus={setSubmissionStatus}
                type={type}
                setType={setType}
                initialReader={initialReader}
                setInitialReader={setInitialReader}
                //Faire un objet qui regroupe tout ca 
            />
        )}

        {submissionStatus === 'success' && (
            <SuccessDevis setSubmissionStatus={setSubmissionStatus}/>
        )}

        {submissionStatus === 'error' && (
            <ErrorDevis setSubmissionStatus={setSubmissionStatus}/>
        )}
        </>
)}

export default BodyFormulaire;