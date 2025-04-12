import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <div className="info">
        <div className="kolona">
          <p className="nadNaslov">
            <span style={{color:'#0AADFF'}}>•</span>&nbsp;Challenges
          </p>

          <h2>
            Challenges Faced <br /> by Insurance Providers
          </h2>
          <div className="stavka">
            <Image src={"/images/SandClock.svg"} alt="sandClock" width={74} height={74} />
            <div>
              <p style={{ fontSize:'20px', fontWeight:'700' }}>Wasting Time on Unqualified Leads</p>
              <p style={{ fontSize:'14px', fontWeight:'500' }}>Stop chasing dead ends with leads that don’t convert.</p>
            </div>
          </div>
          <div className="stavka">
            <Image src={"/images/People.png"} alt="people" width={74} height={74} />
            <div>
              <p style={{ fontSize:'20px', fontWeight:'700' }}>Struggling to Stand Out in a Crowded Digital Market</p>
              <p style={{ fontSize:'14px', fontWeight:'500' }}>Stop chasing dead ends with leads that don’t convert.</p>
            </div>
          </div>
          <div className="stavka">
            <div style={{ background:'#03153E', borderRadius:'20px', minWidth:'74px', minHeight:'74px', display:'flex', justifyContent:'center', alignItems:'center' }}>
              <Image src={"/images/Clock.png"} alt="sandClock" width={52} height={52} />
            </div>
            <div>
              <p style={{ fontSize:'20px', fontWeight:'700' }}>Losing Leads Due to Slow Follow-Up</p>
              <p style={{ fontSize:'14px', fontWeight:'500' }}>Timely engagement increases conversion chances.</p>
            </div>
          </div>
        </div>
        <div className="kolona">
          <p className="nadNaslov">
          <span style={{color:'#0AADFF'}}>•</span>&nbsp;Services
          </p>
          <h2>
            Solutions We Provide <br /> for insurance providers
          </h2>
          <div className="stavka">
            <Image src={"/images/Meta.svg"} alt="sandClock" width={74} height={74} />
            <div>
              <p style={{ fontSize:'20px', fontWeight:'700' }}>Highly Targeted Leads</p>
              <p style={{ fontSize:'14px', fontWeight:'500' }}>Pre-qualified leads that match your ideal customer profile.</p>
            </div>
          </div>
          <div className="stavka">
            <Image src={"/images/AI.png"} alt="sandClock" width={74} height={74} />
            <div>
              <p style={{ fontSize:'20px', fontWeight:'700' }}>AI-Powered Follow-Up System</p>
              <p style={{ fontSize:'14px', fontWeight:'500' }}>Stay on top of lead nurturing with automated workflows.</p>
            </div>
          </div>
          <div className="stavka">
            <Image src={"/images/Mail.png"} alt="sandClock" width={74} height={74} />
            <div>
              <p style={{ fontSize:'20px', fontWeight:'700' }}>Personalized Outreach at Scale</p>
              <p style={{ fontSize:'14px', fontWeight:'500' }}>Deliver campaigns tailored to each lead’s unique needs.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="kartice">
        <p className="nadNaslov">
          <span style={{color:'#0AADFF'}}>•</span>&nbsp;Challenges
        </p>
        <div style={{height:'10px',width:'100%'}}></div>
        <h2 style={{textAlign:'center'}}>
        Challenges Faced 
        by Insurance Providers
        </h2>
        <div className="kartica">
          <span className="broj">01</span>
          <div className="content">
            <p>Highly Targeted Leads</p>
            <span>Pre-qualified leads that match your ideal customer profile.</span>
          </div>
        </div>
        <div className="kartica">
          <span className="broj">02</span>
          <div className="content">
            <p>Highly Targeted Leads</p>
            <span>Pre-qualified leads that match your ideal customer profile.</span>
          </div>
        </div>
        <div className="kartica">
          <span className="broj">03</span>
          <div className="content">
            <p>Highly Targeted Leads</p>
            <span>Pre-qualified leads that match your ideal customer profile.</span>
          </div>
        </div>
        <div className="kartica">
          <span className="broj">04</span>
          <div className="content">
            <p>Highly Targeted Leads</p>
            <span>Pre-qualified leads that match your ideal customer profile.</span>
          </div>
        </div>
        <div className="kartica">
          <span className="broj">05</span>
          <div className="content">
            <p>Highly Targeted Leads</p>
            <span>Pre-qualified leads that match your ideal customer profile.</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
