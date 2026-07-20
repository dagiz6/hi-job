
import Image from "next/image";

 export default function ProfileCard() {
  return (
    <aside className="profile-card" aria-label="Your profile">
      <Image className="profile-card__portrait" src="/image 1910.png" alt="Thomas Arwinkle" width={141} height={141} priority />
      <div className="profile-card__identity">
        <h1>Thomas Arwinkle</h1>
        <p>Experienced Architecture over<br />5+ years experience</p>
      </div>
      <div className="profile-card__detail">
        <Image src="/location icon.png" alt="" width={12} height={15} />
        <span>Liechtenstein, Yekaterinburg</span>
      </div>
      <div className="profile-card__detail profile-card__detail--split">
        <Image src="/remote_freelance.png" alt="" width={14} height={12} />
        <span>Remote</span><span>Freelance</span>
      </div>
      <div className="profile-card__detail">
        <Image src="/email icon.png" alt="" width={14} height={11} />
        <span>**************@gmail.com</span>
        <Image className="profile-card__eye" src="/eye-off.png" alt="Hidden email" width={14} height={14} />
      </div>
      <div className="profile-card__actions">
        <Image src="/qr code.png" alt="Thomas Arwinkle profile QR code" width={64} height={64} />
        <div>
          <button className="profile-card__button profile-card__button--primary">Share Profile <Image src="/share profile icon.png" alt="" width={14} height={12} /></button>
          <button className="profile-card__button">Download PDF <Image src="/download pdf icon.png" alt="" width={12} height={15} /></button>
        </div>
      </div>
    </aside>
  );
}