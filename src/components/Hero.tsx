"use client";
import { useState } from "react";
import Image from "next/image";
import Button2 from "./Button2";
import VideoWithThumbnail from "./VideoWithThumbnail";
import Link from "next/link";

const Hero = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="hero fade-slide-in-left">
        <Image src={"/images/Group 2.svg"} alt="Vektori" width={1920} height={1080} className="vektori"/>
        <div className="content">
            <div>
                <h1>Struggling to create <br /><span style={{color:'#0AADFF'}}>Quality</span> leads?</h1>
                <p>Generate reliable, targeted leads through AI-powered <br /> cold email outreach</p>
                <div className="BiR">
                    <Button2 />
                    <div className="recenzije">
                        <Image src={"/images/Frame 154.webP"} alt="memoji" width={180} height={40} />
                        <div className="zvezdice">
                            <Image src={"/images/Frame 155.png"} alt="zvezdice" width={100} height={20} />
                            <p>Trusted by 100+ customers</p>
                        </div>
                    </div>
                </div>
            </div>
            <VideoWithThumbnail />
        </div>
    </div>
  );
};

export default Hero;
