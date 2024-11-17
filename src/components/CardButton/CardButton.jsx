import './CardButton.css'

export default function CardButton({ children,className }) {
    const cl = className ? `card-button ${className}` : 'card-button'
    
    return (
        <button className={cl}>

            {children}
            
        </button>
    )
}
