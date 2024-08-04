import Contact from "../Contact/Contact";
import css from './ContactList.module.css'
const ContactList = ({
cards
}) => {
    return (
        <ul className={css.list}> 
            {cards.map(card => (
                <li key={card.id}>
                    <Contact number={card.number} name={card.name} />
            </li>
            ))}
            
        </ul>
    )
}
export default ContactList