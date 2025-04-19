import Button1 from "./Button1";
import Image from "next/image";

const BookCall = () => {
  return (
    <div className="book-call">
        <div className="content">
            <div style={{textAlign:'center', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'80%'}}>
                <h2>Book Your Discovery Call</h2>
                <p style={{marginBottom:'15px'}}>Generate reliable, targeted leads through AI-powered cold email outreach, helping your business connect with the right clients effortlessly.</p>
                <Button1 />
            </div>
            {/*<div style={{ alignItems:'center' }}>
                <Image src={"/images/vukasin.webP"} alt="vukasin" width={342} height={342} style={{borderRadius:'50px', aspectRatio:'1/1'}} />
                <span>Vukasin Kitanovic | Founder</span>
            </div>*/}
        </div>

        <div className="dec1"></div>
        <div className="dec2"></div>
        <div className="dec3"></div>
        <div className="blur"></div>
    </div>
  );
};

export default BookCall;
