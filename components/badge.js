export default function Badge({tag, color}) {
    let theme;
    switch (color) {
        case 'blue':
            theme = 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800'
            break;
        case 'dark':
            theme = 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            break;
        case 'red':
            theme = 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900'
            break;
        case 'green':
            theme = 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900'
            break;
        case 'yellow':
            theme = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900'
            break;
        case 'indigo':
            theme = 'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900'
            break;
        case 'purple':
            theme = 'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900'
            break;
        case 'pink':
            theme = 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900'
            break;
        default:
            theme = 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    }
    return (tag !== undefined) ?
        <span
            className={`${theme} text-xs font-medium inline-flex items-center  mr-2 px-2.5 py-0.5 rounded`}>{tag}</span> : ''
}