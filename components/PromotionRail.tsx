import Image from "next/image";


 export default function PromotionRail() {
    return (
      <aside className="promotion-rail" aria-label="Promotions">
        <section className="promotion-card partner-promotion">
          <h2>Partners Promotions</h2>
          <Image src="/the-lady-picture-big-poster.png" alt="Hi Job next-generation features coming soon" width={170} height={227} />
        </section>
        <section className="promotion-card talent-promotion">
          <h2>Talents Promotions</h2>
          <div className="talent-promotion__grid">
            <Image src="/first image bottom in the left.png" alt="Gustavo C. graphic designer profile" width={170} height={227} />
            <Image src="/second image bottom in the right.png" alt="Allyson G. graphic designer profile" width={170} height={227} />
          </div>
        </section>
        <Footer />
      </aside>
    );

    function Footer() {
        return (
          <footer className="site-footer">
            <div className="site-footer__top"><Image src="/logo.png" alt="Hi Job" width={59} height={10} /><span>Terms of Service</span><i /> <span>Privacy Policy</span></div>
            <div className="site-footer__bottom"><span><Image src="/support mail icon.png" alt="" width={10} height={10} /> support@hijob.work</span><span>© 2026 HiJob. All rights reserved.</span></div>
          </footer>
        );
      }
  }