export default function Footer() {
    return (
        <footer
            className="p-4 shadow border-t border-accent-2 md:flex md:items-center md:justify-between md:p-6 bg-accent-1">
            <span className="text-sm font-bold text-gray-700 sm:text-center dark:text-gray-400">© 2022 <a
                href="https://charlesyoung.dev/" className="hover:underline">Charles Young</a>. All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <span className="mr-4 md:mr-6">
                        This website is created and authored by Charles Young and is published and provided for informational and entertainment purposes only.
                    </span>
                </li>
            </ul>
        </footer>
    )
}
