import Link from "next/link";


export default function Home() {
    return (
        <main className="relative flex flex-col min-h-screen ">
            <div className="absolute w-full h-full bg-[url('/images/bg-main.png')] bg-no-repeat bg-cover">
                
            </div>
            <div className='flex-grow relative text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl
                pl-4 sm:pl-6 md:pl-8 xl:pl-10 2xl:pl-12
                pr-30 sm:pr-40 md:pr-45 xl:pr-50 2xl:pr-55
                pt-3 sm:pt-5 md:pt-7 xl:pt-9 2xl:pt-11
            '>
                <Link href={'/lobby'} className="fixed right-10 bottom-10 _footer-button-auto rounded-xl p-3 px-5">
                    <span className="tracking-wider _footer-button-auto-text text-[14px] sm:text-[20px] tracking-wider uppercase">
                        ACCEPT
                    </span>
                </Link>

                <h1 className='tracking-wider leading-[48px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] _text_h1'>Privacy Policy</h1>
                <p>
                    This Privacy Policy for Gold Rush has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read  Privacy Policy  Gold Rush carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information.
                    What personal information do we collect from the people that visit Gold Rush?
                    When ordering or registering on our app, as appropriate, you may be asked to enter your phone number or other details to help you with your experience.
                    When do we collect information?
                    We collect information from you when you are installing the application.
                    Data you provide us.
                </p>
                <p>
                Contact information (such as name and email address)
                Player name
                Your messages to the Service (such as chat logs and player support tickets)
                Other data you choose to give us (such as data to identify a lost account)
                </p>
                <p>
                Data we collect automatically.
                </p>
                <p>
                Data about your account and game progress
                Your IP address and mobile device identifiers (such as your device ID, advertising ID, MAC address, IMEI)
                Data about your device, such as device name and operating system, browser type and language
                Data we collect with cookie and similar technology (see more below)
                General location data
                Precise geolocation data (GPS, with your consent)
                Data about your use of the Service, such as gameplay data and your interactions with other players inside the Service
                In most cases, we also create a specific ID for you when you use the Service
                </p>
                <p>
                How do we use your information?
                We may use the information we collect from you when you register, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways: to quickly process your requests.
                How do we protect your information?
                We do not use vulnerability scanning and/or scanning to PCI standards. We only provide articles and information. Not only that, but we never ask for credit card numbers. Likewise, we do not use Malware Scanning. We do not use an SSL certificate. Furthermore, we do not need an SSL because: it is android application
                Do we use 'cookies'?
                Like most online services, our partners, and we use cookie and similar technology to provide and personalize the Service, analyze use, target advertisements and prevent fraud. 
                You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since the browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.
                If you turn cookies off, Some of the features that make your site experience more efficient may not function properly. That make your site experience more efficient and may not function properly.
                Third-party disclosure
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.
                Google
                Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en
                We have not enabled Google AdSense on our app, but we may do so in the future.
                How does our site handle Do Not Track signals?
                We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.
                Fair Information Practices
                he Fair Information Practices Principles form the backbone of privacy law in the United States, and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.
                </p>
            </div>
        </main>
    )
}
