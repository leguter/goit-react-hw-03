import css from './Contact.module.css'
const Contact = ({
    number,
    name,

}) => {

    return (
      <div className={css.item}>
        <span className={css.spanText}>
          <p className={css.name}>{name}</p>
          <p className={css.name}>{number}</p>
        </span>
        <button type="button" className={css.deleteBtn}>Delete</button>
      </div>
    );
}
export default Contact