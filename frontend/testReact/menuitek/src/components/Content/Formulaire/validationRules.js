export function getNameValidation() {
  return {
    required: "Ce champ est requis",
    pattern: {
        value: /^[^\d]+$/,
        message: "Le nom ne peut pas contenir de chiffre",
    },
  };
}

export function getNumberValidation() {
    return {
    required: "Veuillez renseigner un numéro de téléphone.",
    pattern: {
        value: /^[\d+()\s-]{10,20}$/,
        message: "Format invalide. Ex : 06 12 34 56 78 ou +33 6 12 34 56 78"
        },
    };
}