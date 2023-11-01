import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const ContactForm = () => {

    let name;
    let email;
    let text;

    const onSubmit = (event) => {

        name = event.target[0].value;
        email = event.target[1].value;
        text = event.target[2].value;

        event.preventDefault();
        console.log("name");
        console.log("email");
        console.log("text");
    }


    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_button}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button
                        text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
                </div>
                <Button isoutline={true} text="VIA Email Form" icon={<HiMail fontSize="24px" />} />

                <form onSubmit={onSubmit}>
                    <div className={styles.form_controller}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className={styles.form_controller}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>

                    <div className={styles.form_controller}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows={7} />
                    </div>

                    <div style={
                        {
                            display: 'flex',
                            justifyContent: 'end'
                        }
                    }>
                        <Button text="Submit" />

                    </div>
                </form>
            </div>

            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="Contact image" style={{
                    height: '500px'
                }} />
            </div>



        </section>
    )
}

export default ContactForm
