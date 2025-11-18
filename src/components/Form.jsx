import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ← replace useRouter
import toast from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
export default function Form({ title, buttontext, onClose, plan }) {
    const router = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
        plan: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const blockedTempDomains = [
        "0-mail.com", "0815.ru", "0clickemail.com", "0wnd.net", "0wnd.org",
        "10minutemail.com", "10minutemail.net", "10minutemail.org", "10minutemail.us",
        "10minutemailbox.com", "10minute-email.com", "10minutesmail.com",
        "10minmail.de", "123mail.org", "1ce.us", "1mail.ml", "1pad.de",
        "20minutemail.com", "21cn.com", "2prong.com", "33mail.com",
        "3mail.ga", "3mail.gq", "3mail.ml", "4mail.cf", "4mail.ga", "4warding.com",
        "4warding.net", "4warding.org", "55mail.xyz", "5mail.cf", "5mail.ga",
        "60minutemail.com", "675hosting.com", "675hosting.net", "675hosting.org",
        "6mail.ml", "7tags.com", "9ox.net", "a-bc.net", "amail.com", "abuser.eu",
        "abyssmail.com", "afrobacon.com", "ajaxapp.net", "akamaimail.com",
        "anon-mail.de", "anonbox.net", "anonymbox.com", "antireg.ru", "armyspy.com",
        "artman-conception.com", "azazazatashkent.tk",
        "balanc3r.com", "bareed.ws", "baxomale.ht", "beefmilk.com", "bigprofessor.so",
        "bigstring.com", "binkmail.com", "bio-muesli.net", "bitmails.net",
        "blockfilter.com", "bobmail.info", "bodhi.lawl", "bofthew.com",
        "bootybay.de", "boxformail.in", "brefmail.com", "bspamfree.org", "bugmenot.com",
        "casualdx.com", "centermail.com", "centermail.net", "chammy.info",
        "cheatmail.de", "childsavetrust.org", "chithinh.com",
        "choicemail1.com", "cool.fr.nf", "courrieltemporaire.com",
        "cuoly.com", "cust.in", "cyber-email.io", "czqjii8.com",
        "deadaddress.com", "deadspam.com", "decoymail.com", "despam.it",
        "disposableaddress.com", "disposableemailaddresses.com", "dispo.in",
        "dodgit.com", "dodgit.org", "dontreg.com", "dontsendmespam.de", "dropmail.me",
        "e-mail.com", "easymail.now", "easytrashmail.com", "email-fake.com",
        "email.net", "email60.com", "emailtemporanea.com", "emailtemporario.com.br",
        "emailthe.net", "emailtmp.com", "emailto.de", "ephemail.net", "etranquil.com",
        "fakeemail.com", "fakeinbox.com", "fakemail.net", "fakemailgenerator.com",
        "falkh.net", "filzmail.com", "fishfuse.com", "flyspam.com", "freetmail.net",
        "garliclife.com", "getairmail.com", "getnada.com", "getonemail.com",
        "girlmail.win", "guerrillamail.biz", "guerrillamail.com",
        "guerrillamail.de", "guerrillamail.info", "guerrillamail.net",
        "guerrillamail.org", "guerrillamailblock.com",
        "h8s.org", "haltospam.com", "hazelnut4u.com", "hermes.bet",
        "hidemyass.com", "hidzz.com", "hmamail.com", "hochsitze.com",
        "hot-mail.gq", "hotmai.com", "hotmial.com", "hulapla.de",
        "ieatspam.eu", "iheartspam.org", "incognitomail.com", "incognitomail.net",
        "incognitomail.org", "infocom.zp.ua", "instantemailaddress.com",
        "ip4.pp.ua", "irish2me.com", "ispuntheweb.com", "iwi.net",
        "jetable.org", "jnxjn.com", "jourrapide.com", "junkmail.ga", "junkmail.gq",
        "kasmail.com", "kickmark.com", "klassmaster.com", "klzlk.com",
        "letthemeatspam.com", "lifetotech.com", "link2mail.net", "lol.ovpn.to",
        "lolfreak.net", "lookugly.com", "lortemail.dk", "lr7.us", "luv2.us",
        "mail-temporaire.fr", "mail.by", "mail.mezimages.net", "mail.zp.ua",
        "mail1a.de", "mail21.cc", "mail2rss.org", "mail333.com", "mailbidon.com",
        "mailcatch.com", "maileater.com", "mailexpire.com", "mailguard.me",
        "mailimate.com", "mailin8r.com", "mailinator.com", "mailinator.net",
        "mailinator.org", "mailinator.us", "mailinator2.com", "mailincubator.com",
        "mailismagic.com", "mailjunk.ga", "mailjunk.gq", "mailjunk.ml",
        "mailme.dk", "mailme24.com", "mailmetrash.com", "mailmoat.com",
        "mailnator.com", "mailnesia.com", "mailnull.com", "mailorc.com",
        "mailpick.biz", "mailpoof.com", "mailrock.biz", "mailscrap.com",
        "mailshell.com", "mailsiphon.com", "mailslapping.com", "mailtemp.info",
        "mailtothis.com", "mailtrash.net", "mailtv.net", "mailtv.org",
        "mailzilla.com", "mailzilla.org", "makemetheking.com",
        "messagebeamer.de", "mfsa.ru", "mierdamail.com", "migmail.net", "migmail.org",
        "mintemail.com", "moburl.com", "moncourrier.fr.nf", "monemail.fr.nf",
        "monmail.fr.nf", "msh.mobi", "mt2009.com", "mx0.wwwnew.eu",
        "mypartyclip.de", "mytrashmail.com", "mytemp.email", "my10minutemail.com",
        "nepwk.com", "noclickemail.com", "nospam.ze.tc", "nospam4.us",
        "notmailinator.com", "nowmymail.com", "nwytg.net", "nzh.in", "obfusko.com",
        "opayq.com", "otherinbox.com", "ovpn.to", "owlpic.com",
        "p0q.org", "pjjkp.com", "poofy.org", "pookmail.com", "privacy.net",
        "proxymail.eu", "putthisinyourspamdatabase.com", "qq.com.de", "r4nd0m.de",
        "ra3.us", "rcpt.at", "reallymymail.com", "recyclemail.dk", "regbypass.com",
        "regbypass.comsafe-mail.net", "rejectmail.com", "rhyta.com",
        "sharklasers.com", "shieldemail.com", "shiftmail.com", "shitmail.org",
        "shmeriously.com", "shut.name", "sify.com", "slapsfromlastnight.com",
        "slushmail.com", "smapfree24.com", "smashmail.de", "smellfear.com",
        "snapmail.cc", "sneakemail.com", "sneakmail.de", "softpls.asia",
        "sofortmail.de", "spam.la", "spam.su", "spam4.me", "spamail.de",
        "spamcannon.com", "spamcannon.net", "spamcon.org", "spamcorptastic.com",
        "spamcowboy.com", "spamcowboy.net", "spamcowboy.org", "spamday.com",
        "spamex.com", "spamfree.eu", "spamfree24.de", "spamfree24.org",
        "spamgoes.in", "spamgourmet.com", "spamhole.com", "spamhornet.com",
        "spaminator.de", "spamkill.info", "spaml.com", "spaml.de", "spammotel.com",
        "spamobox.com", "spamoff.de", "spamslicer.com", "spamspot.com",
        "spamthis.co.uk", "spamthisplease.com", "spoofmail.de", "stuffmail.de",
        "supergreatmail.com", "supermailer.jp", "supramail.com", "sweetville.net",
        "tagyourself.com", "talkinator.com", "teewars.org", "temp-mail.io",
        "temp-mail.org", "temp-mail.ru", "tempail.com", "tempemail.biz",
        "tempemail.co.za", "tempemail.net", "tempinbox.com", "tempmail.de",
        "tempmail.it", "tempmail.us", "tempmailer.com", "tempmailer.de",
        "temporaryemail.net", "temporarystuff.com", "tempymail.com", "thanksnospam.info",
        "theaperturelabs.com", "thelimestones.com", "thisisnotmyrealemail.com",
        "throwam.com", "throwawayemailaddress.com", "tmail.com", "tmail.io", "tmail.ws",
        "trash-mail.at", "trash-mail.com", "trash-mail.de", "trashcanmail.com",
        "trashmail.com", "trashmail.de", "trashmail.net", "trashmails.com",
        "trashymail.com", "trashymail.net", "trbvm.com", "trbvn.com", "trbvo.com",
        "uemail99.com", "uggsrock.com", "upliftnow.com", "uplipht.com",
        "vmani.com", "vomoto.com", "vpn.st", "vps30.com", "wasteland.rfc822.org",
        "webemail.me", "wegwerfadresse.de", "wegwerfemail.de", "wegwerfmail.de",
        "wegwerfmail.net", "wegwerfmail.org", "whatpaas.com", "whiffles.org",
        "whyspam.me", "willselfdestruct.com", "winemaven.info", "wiroute.com",
        "wuzup.net", "wuzupmail.net", "www.com", "xcoxc.com", "xemaps.com",
        "xents.com", "xmaily.com", "xoxy.net", "xyzfree.net", "yanet.me",
        "yepmail.net", "yoggmail.com", "yopmail.com", "yopmail.fr", "yopmail.net",
        "yuurok.com", "z1p.biz", "za.com", "zehnminuten.de", "zehnminutenmail.de",
        "zeta-telecom.com", "zetmail.com", "zoemail.net"
    ];

    const handleSubmit = async () => {
        if (!formData.name.trim()) return toast.error("Name is required");

        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email))
            return toast.error("Enter a valid email address");
        const domain = formData.email.split("@")[1].toLowerCase();
        if (blockedTempDomains.includes(domain)) {
            return toast.error("Enter a valid email address");
        }

        if (!formData.phone.trim()) return toast.error("Phone number is required");
        const cleaned = formData.phone.replace(/\D/g, "");

        if (cleaned.length < 8) {
            return toast.error("Enter a valid phone number");
        }
        const repeatedPatterns = [
            "1111111111", "2222222222", "3333333333",
            "4444444444", "5555555555", "6666666666",
            "7777777777", "8888888888", "9999999999",
            "0000000000", "1234567890", "0123456789"
        ];
        if (repeatedPatterns.includes(formData.phone)) {
            return toast.error("Enter a valid phone number");
        }

        if (!formData.budget.trim()) return toast.error("Budget is required");

        if (!formData.message.trim()) return toast.error("Message is required");
        if (formData.message.length > 1999)
            return toast.error("Message is too large");
        try {
            const fillForm = await axios.post(
                "https://shopifycustom.kretosstechnology.com/api/v1/kretoss/form",
                {
                    ...formData,
                    plan: plan
                }
            );
            if (fillForm?.data?.success) {
                toast.success('Form submitted successfully.');
                onClose();
                setTimeout(() => {
                    router("/hire-mobile-app-developers/thankyou");
                }, 2000);
            }
        } catch (error) {
            console.log("error:", error);
        }
    };
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
            <div className="bg-white w-[650px] max-w-[90%] rounded-[12px] p-8 shadow-lg relative overflow-auto max-h-[90vh]">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-500 text-xl cursor-pointer"
                >
                    ✕
                </button>


                <h2 className="text-[24px] font-semibold text-[#02021E] mb-6 text-center">
                    {title}
                </h2>

                <div className="flex flex-col gap-[20px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                        <div>
                            <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                Name
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="John Deo"
                                onChange={handleChange}
                                value={formData.name}
                                className="w-full h-[48px] px-[12px] rounded-[6px] text-[#333] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="john.doe@gmail.com"
                                onChange={handleChange}
                                value={formData.email}
                                className="w-full h-[48px] px-[12px] rounded-[6px] text-[#333]  border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                        <div>
                            <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                Phone Number
                            </label>
                            <PhoneInput
                                country={'in'}
                                value={formData.phone}
                                onChange={(phone) => setFormData({ ...formData, phone })}
                                inputClass="w-full h-[48px] px-[20px] rounded-[6px] text-[#000000] border border-[#E0E0E0] bg-[#F5F8FC] outline-none"
                                containerClass="w-full"
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                }}
                            />
                        </div>
                        <div>
                            <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                                Budget
                            </label>
                            <select
                                name="budget"
                                onChange={handleChange}
                                value={formData.budget}
                                className="w-full h-[48px] px-[12px] rounded-[6px] text-[#333]  border border-[#E0E0E0] bg-[#F5F8FC] text-[#666] outline-none"
                            >
                                <option value="">Select project budget</option>
                                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                                <option value="$50,000+">$50,000+</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-[#000000] text-[16px] font-medium mb-[6px]">
                            Message
                        </label>
                        <textarea
                            name="message"
                            onChange={handleChange}
                            value={formData.message}
                            placeholder="Tell us about your requirements..."
                            className="w-full h-[120px] px-[12px] py-[10px] text-[#333]  rounded-[6px] border border-[#E0E0E0] bg-[#F5F8FC] resize-none outline-none"
                        ></textarea>
                    </div>
                </div>
                <button
                    onClick={() => {
                        handleSubmit();
                    }}
                    className="bg-[#5D59EA] text-white w-full font-semibold py-2 rounded-full mt-2 hover:bg-[#4a47d1] transition"
                    style={{ boxShadow: "0px 0px 22px 0px #5D59EA99" }}
                >
                    {buttontext}
                </button>
            </div>
        </div>
    )
}
