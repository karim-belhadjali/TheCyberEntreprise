import * as React from "react";
import { useEffect, useRef } from "react";
import { mainAnimation } from "src/animations/hero";
import hero_bottom_svg from "../../assets/svg/top-mask-bar.svg";

import "./HeroStyle.scss";

function Hero() {
  useEffect(() => {
    mainAnimation();
  }, []);
  return (
    <div className="hero">
      <div className="hero_mobile">
        <div className="mobile_text">
          <div className="mob_speech">
            <div className="mob_fade_background">
              <div className="mob_visible_text">
                <p className="margins">
                  Hello stranger, I am <span>The Cyber Inu</span> and it{" "}
                  <span>is</span> truly a pleasure to have <span>you</span> here
                  at the New Cyber Enterprise website! Here at the enterprise,
                  we strive in <span>creating an ever-growing</span> and
                  developing <span>decentralized ecosystem</span>, a one-stop
                  shop, for all your DeFi needs. Creating decentralized
                  applications <span>under the trusted brand, Cyber.</span>{" "}
                  Providing reassurance to its users is what we're all about.{" "}
                </p>
                <p>
                  Unfortunately, if you see this message it means that you're
                  missing out on one hell of a story. I'd strongly suggest
                  checking us out on a device that has a bigger resolution to
                  get the full experience.
                </p>
              </div>
            </div>
            <div className="mob_corner_top"></div>
            <div className="mob_corner_bottom"></div>
          </div>
        </div>
        <div className="mobile_mascot">
          <img src={require("../../assets/mascot/normal.webp")} alt="" />
        </div>
      </div>

      <div className="hero_container">
        <div className="hero_images">
          <div className="hero_full">
            <img
              src={require("../../assets/main/main/placeholder.webp")}
              alt=""
            />
          </div>

          <div className="hero_naming"></div>
          <div className="hero_hover"></div>
        </div>

        <div className="speech">
          <div className="fade_background">
            <div className="visible_text">
              <p></p>
            </div>

            <div className="text_container">
              <div className="text_scene_1">
                Hello stranger! I am The Cyber Inu, a Cyberian that came from
                the future. Quickly, a crypto disaster is about to happen. There
                isn't much time but remember, only you can help us.
                <span className="colors">The Cyber Inu</span>
              </div>

              <div className="text_scene_2">
                Do you not see what is happening in the world each and every
                day? Inflation, Isolation, disinformation… I used to have
                friends like you, good-hearted but blind to the changing world.
                We were workers at a factory.{" "}
                <span className="colors">is * in * each and every</span>
              </div>

              <div className="text_scene_3">
                It was nice in the beginning. To see all of us becoming happy
                one by one, working towards greater goals. The sky was blue,
                birds flew above our heads and we all did as we were told
                joyfully. I know you would've liked it!
                <span className="colors">of * one * you</span>
              </div>

              <div className="text_scene_4">
                The factory was thriving and no matter what the challenge was.
                Together we pushed forward. The age of coal was ending, and we
                had to learn a new skill building solar panels and wind
                turbines.
                <span className="colors">
                  no matter * the * age *, * skill{" "}
                </span>
              </div>

              <div className="text_scene_5">
                It was either that, or slow production, but we knew with our
                experience we had it in us to build an eco-friendly place. We
                wanted to make sure we didn't harm both old and new communities,
                as we could all be barking to the moon!
                <span className="colors"> or * experience </span>
              </div>
              <div className="text_scene_6">
                One bad thing after another, the first bots came quick and
                nobody had time to react. They took us by surprise…
                <span className="colors">One </span>
              </div>
              <div className="text_scene_7">
                They started taking our products, our hard work…
              </div>
              <div className="text_scene_8">
                We thought it was, but a person from the neighboring factory ran
                to warn us something even worse was brewing.
                <span className="colors"> person </span>
              </div>
              <div className="text_scene_9">
                No, they were too quick and can front run most preparations… and
                they sandwiched us with their guns, forcing us to make more
                boxes. We had to sacrifice more time, energy, and our wages.
                <span className="colors"> can </span>
              </div>
              <div className="text_scene_10">
                They sandwiched us with their guns, forcing us to make more
                products. Stealing everything we had worked so damn hard for…
                <span className="colors"> make </span>
              </div>
              <div className="text_scene_11">
                And that's not all! When a worker's morale is low there's a
                significant difference in productivity, and when the bots saw
                this they destroyed what we had left. Our factory, our
                livelihood, our lives.
                <span className="colors"> a * difference </span>
              </div>
              <div className="text_scene_12">
                If we let them, they have would have truly succeeded and moved
                onto others. We knew that we couldn't let this continue and
                something had to be done, but we knew alone we didn't stand a
                chance.<span className="colors"> but * a </span>
              </div>
              <div className="text_scene_13">
                A group of people over the hill heard all the commotion and came
                to help. It was almost like destiny made our paths meet. We
                fought back with everything we had, and it was just the support
                we needed. That day we made a lot of friends.
                <span className="colors"> group of people </span>
              </div>
              <div className="text_scene_14">
                Yup, we destroyed some and put them on the run buying ourselves
                some time. I was heavily wounded losing an arm and part of my
                face during the battle, but my will to fight back grew. Little
                did I know I was just preparing myself to come back better and
                stronger.<span className="colors"> will </span>
              </div>
              <div className="text_scene_15">
                Well, we enjoyed our victory but that didn't last long.
                Everything around us was destroyed and we either had to make a
                plan or accept defeat…<span className="colors"> make </span>
              </div>
              <div className="text_scene_16">
                Of course not, we started cleaning the rubble and brainstormed
                ideas that would make a difference.
                <span className="colors"> a difference</span>
              </div>
              <div className="text_scene_17">
                We repaired the factory and all of us got back to work. There
                was a need to bring something new to the table.
                <span className="colors">We * need </span>
              </div>
              <div className="text_scene_18">
                Oh it doesn't finish there, everyone that came pitched in to
                make a new and improved factory which really helps. We couldn't
                have asked for better newfound friends.
                <span className="colors">everyone that </span>
              </div>
              <div className="text_scene_19">
                If you never try, we'll never know what we're truly capable of.
                The improved factory allowed us to develop robotic parts and
                with further research we created Cybernators.{" "}
                <span className="colors">
                  If you never try, we'll never know what we're truly capable
                  of.
                </span>
              </div>
              <div className="text_scene_20">
                Yup, I became stronger than ever before! Cybernators are Robotic
                AI made to help us and used a similar technology that had
                wreaked havoc on us. It was the best chance we had to go on the
                offensive.
              </div>
              <div className="text_scene_21">
                Knowing the enemy could come back at any time and our numbers
                were too few even with Cybernators, the engineers started
                building a time machine. We had to attack the problem early on
                to prevent what was happening.
              </div>
              <div className="text_scene_22">
                I was sent back in time with some Cybernators to give the future
                the best shot it had to stop this insanity.
              </div>
              <div className="text_scene_23">
                They continued the production of Cybernators and I told them to
                meet up with my cousins Harmony, Ethan, and Banion. Last I heard
                they were working on a game changer in the North.
              </div>
              <div className="text_scene_24">
                My friends went to go find them, but I haven't heard from them
                yet. But stick with me, and I'll keep you updated. You can help
                DeFine our Future!
              </div>
            </div>
          </div>
          <div className="corner_top"></div>
          <div className="corner_bottom"></div>

          <div className="continue_button">
            <span className="btn_text_scene_1">Help you?</span>
            <span className="btn_text_scene_2">What happened?</span>
            <span className="btn_text_scene_3">Continue...</span>
            <span className="btn_text_scene_4">Go on...</span>
            <span className="btn_text_scene_5">What went wrong?</span>
            <span className="btn_text_scene_6">What did they do?</span>
            <span className="btn_text_scene_7">Was that it?</span>
            <span className="btn_text_scene_8">Were you prepared?</span>
            <span className="btn_text_scene_9">And then?</span>
            <span className="btn_text_scene_10">That's outrageous!</span>
            <span className="btn_text_scene_11">
              Did they break your spirits?
            </span>
            <span className="btn_text_scene_12">So what did you do?</span>
            <span className="btn_text_scene_13">That's great!</span>
            <span className="btn_text_scene_14">How so?</span>
            <span className="btn_text_scene_15">So you gave up?</span>
            <span className="btn_text_scene_16">What happened after?</span>
            <span className="btn_text_scene_17">That's one cool story!</span>
            <span className="btn_text_scene_18">That's amazing!</span>
            <span className="btn_text_scene_19">
              Robotic parts and Cybernators?
            </span>
            <span className="btn_text_scene_20">On the Offensive?</span>
            <span className="btn_text_scene_21">What happened next?</span>
            <span className="btn_text_scene_22">And your friends?</span>
            <span className="btn_text_scene_23">And?</span>
          </div>

          <div className="end_button join_button">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Join the Cause
            </a>
          </div>

          <div className="end_button informed_button">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Get Informed
            </a>
          </div>
        </div>

        <div className="mascot_images">
          <img
            src={require("../../assets/mascot/placeholder.webp")}
            width="1"
            height="1"
            alt=""
          />
        </div>

        <div className="hero_main_bg">
          <div className="flame_small"></div>
          <div className="flame_big"></div>
        </div>
      </div>
      <div className="hero_bottom_svg">
        <img
          className="bottom_hero_bottom_svg"
          src={hero_bottom_svg}
          width="1"
          height="auto"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
