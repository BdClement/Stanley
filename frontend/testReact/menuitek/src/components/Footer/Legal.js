function Legal() {
    return (
        <div className="p-1 flex flex-grow items-center justify-center border-t-2 border-brun-contrast/90">
            <ul className="flex flex-row gap-4">
                <li>MenuiteK © 2025</li>
                <li>•</li>
                <li className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:opacity-0 after:bg-grey-main hover:after:opacity-1 hover:after:animate-fade-in">Mentions Légales</li>
                <li>•</li>
                <li className="hover:text-black hover:underline">Politique de confidentialité</li>
                <li>•</li>
                <li className="hover:text-black hover:underline">CGV</li>
            </ul>
        </div>
    )
}

export default Legal;