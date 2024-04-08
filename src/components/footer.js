import Phone from "../images/phone.svg";
import Mail from "../images/mail.svg";
import Geo from "../images/geo.svg";

import { Contacts } from "./lilcoms";

const footerText = [
    {
        text: "8 800 555 35 35",
        image: Phone
    },
    {
        text: "abc@gmail.com",
        image: Mail
    },
    {
        text: "Руставели 33, Санкт-Петербург ",
        image: Geo
    },
]
const footerText2 = ["О нас", "Свяжитесь с нами", "События"]
const footerText3 = ["Политика конфиденциальности", "Условия и услуги", "Политика возврата"]


function Footer()
{
    return(
        <footer className = "bg-Blue">
            <div className = "container mx-auto">
                <div className = "flex">
                    <TextMaker name = "Контакты" textArr = {footerText} isContacts="s"/>
                    <TextMaker name = "Компания" textArr = {footerText2}/>
                    <TextMaker name = "Условия использования" textArr = {footerText3}/>
                    <div className = "bg-white p-3 flex flex-col gap-8">
                        <p className = "font-Black text-lg">Подпишитесь на рассылку</p>
                        <div className = "flex">
                            <input className = "placeholder:font-Light border border-Trans20 pl-1" placeholder = "Ваша почта" type = "text"/>
                            <button className = "border border-Blue bg-Blue text-white font-Light py-1.5 px-3">Подписаться</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "bg-[#2159D7] font-Light text-white text-center py-1.5">
                DENTIQUE. 2024
            </div>
        </footer>
    );
}

function TextMaker({name, textArr, isContacts})
{
    let elems = textArr.map((elem, i) => { return <p key = {i}>{elem}</p> });

    if(isContacts)
    {
        elems = textArr.map((elem, i) => { return <Contacts image = {elem.image} text = {elem.text} key = {i}/>});
    }

    return (
        <div className = "text-white font-Light flex flex-col gap-4">
            <p>{name}</p>
            {elems}
        </div>
    );
}

export default Footer;